import { Chip } from '@mui/material';
import { type } from '@testing-library/user-event/dist/type';
import axios from 'axios'
import React, {useState,useEffect } from 'react'


function Genres(
    props
    
) {
    const fetchGenres = async ()=>{
        const {data}=await  axios.get(
            `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API}&language=en-US`
          );

          props.setGenres(data.props.genres)
    }

    useEffect(() => {
        fetchGenres();
        return ()=>{
            props.setGenres({});
        };
    }, [])
      return (
    <div style={{padding:"6px 0"}}>
        {props.genres.length > 0 && props.genres.map((genre)=>(
            <Chip label={genre.name}/>
        ))}

    </div>
  )
}

export default Genres