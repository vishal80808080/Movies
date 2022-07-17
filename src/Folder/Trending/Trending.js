import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SingleContent from '../../Components/SingleContent/SingleContent';
import './trending.css';
import CustomPagination from '../../Components/Pagination/CustomPagination';


function Trending() {
  const [page, setPage] = useState(1)
  const [content, setContent] = useState([])
    const FetchApi= async ()=>{
        const  {data} = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API}&page=${page}`);
    
       
       
        
        setContent(data.results);
        
    
     
    };
   
    useEffect(() => {
      FetchApi();
      // eslint-disable-next-line
    }, [page])

  return (
    <div>
        <span className="PageTitle">Trending</span>
      <div className="trending">
        {content && content.map ((c) => <SingleContent 
        key={c.id}
         id={c.id}
         poster={c.poster_path}
          title={c.title || c.name}
        date={c.release_air_date||c.release_date}
        media_type={c.media_type}
        vote_average={c.vote_average}
      />
        )}
      </div>
      <CustomPagination setPage={setPage}/>
    </div>
  )
 
}



export default Trending