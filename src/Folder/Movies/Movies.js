import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Genres from '../../Components/Genres';
import CustomPagination from '../../Components/Pagination/CustomPagination';
import SingleContent from '../../Components/SingleContent/SingleContent';
import UseGenre from '../../Hooks/UseGenre';

function Movies() {
  const [page, setPage] = useState(1);
  const [content,setContent]=useState([]);
  const [numOfPages,setNumOfPages]=useState();
  const [selectedGenres,setSelectedGenres]=useState([]);
  const [genres,setGenres]=useState([]);
  
  const FetchApi=async ()=>{
   const genreForUrl= UseGenre(selectedGenres);
  //  console.log(selectedGenres);
  const {data}=await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate
  &page=${page}&with_genres=${genreForUrl}`);

  setContent(data.results);
  setNumOfPages(data.total_pages);
 
};

useEffect(() => {
  // eslint-disable-next-line 
FetchApi();

}, [page, selectedGenres ])

  return (
    <div>   <span className="PageTitle">Movies</span>
    <Genres type="movie" 
    selectedGenres={selectedGenres} 
    genres={genres}
    setGenres={setGenres}
    setSelectedGenres={setSelectedGenres}
    setPage={setPage}
    />
       <div className="trending">
        {content && content.map ((c) => <SingleContent 
        key={c.id}
         id={c.id}
         poster={c.poster_path}
          title={c.title || c.name}
        date={c.release_air_date||c.release_date}
        media_type='movie'
        vote_average={c.vote_average}
      />
        )}
      </div>
      {numOfPages>1&&( <CustomPagination setPage={setPage} numOfPages={numOfPages}/>)}
     
    
    </div>
  )
}

export default Movies