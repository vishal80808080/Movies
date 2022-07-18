import { Chip } from '@mui/material';

import axios from 'axios'
import React, {useState,useEffect } from 'react'


function Genres({selectedGenres,
    setSelectedGenres,
    genres,
    setGenres,
    type,
    setPage}) {
    
    const handleAdd = (genre) => 
    {
        setSelectedGenres([...selectedGenres,genre])
    
        setGenres(genres.filter((g)=> g.id!==genre.id));
        setPage(1);
    }
    const handleRemove = (genre) => {
        setSelectedGenres(
          selectedGenres.filter((selected) => selected.id !== genre.id)
        );
        setGenres([...genres, genre]);
        setPage(1);
      };
    
    const fetchGenres = async ()=>{
        const {data}=await  axios.get(
            `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API}&language=en-US`
          );
      console.log(data);
          setGenres(data.genres)
    }

    useEffect(() => {
        fetchGenres();
        return ()=>{
            setGenres({});
        };
    }, [])
      return (
    <div style={{padding:"6px 0"}}>
        {selectedGenres?.length > 0 && selectedGenres.map((genre)=>(
            <Chip label={genre.name} key={genre.id} size="small" style={{margin:2 ,backgroundColor:"white",color:"black"}} clickable 
            onDelete={()=>handleRemove(genre)}
   />
        ))}
        {genres?.length > 0 && genres.map((genre)=>(
            <Chip label={genre.name} key={genre.id} size="small" style={{margin:2 ,backgroundColor:"black",color:"white"}}
            onClick={()=>handleAdd(genre)}
             clickable/>
        ))}

    </div>
  )
}

export default Genres