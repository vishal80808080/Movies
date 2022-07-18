import { createMuiTheme, Tab, Tabs, TextField, ThemeProvider } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import CustomPagination from '../../Components/Pagination/CustomPagination';
import SingleContent from '../../Components/SingleContent/SingleContent';

function Search() {
  const [type, setType] = useState(0);
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
  

  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#fff",
      },
    },
  });

  const fetchSearch = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${
          process.env.REACT_APP_API
        }&language=en-US&query=${searchText}&page=${page}&include_adult=false`
      );
      setContent(data.results);
      setNumOfPages(data.total_pages);
      // console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchSearch();
    // eslint-disable-next-line
  }, [type, page]);


  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <div style={{display:"flex",margin:"15px 0"}}>
        <TextField 
      style={{flex:1}}
      className="searchBox"
      onChange={(e)=>setSearchText(e.target.value)}
      label="SEARCH" 
      variant="filled" />
      <button variant="contained" style={{marginLeft:10}} onClick={fetchSearch}><SearchIcon/></button>
        </div>
        <Tabs value={type} indicatorColor="primary" textColor="white"
           onChange={(event, newValue) => {
            setType(newValue);
            setPage(1);
          }}
          >
          <Tab style={{width:"50%"}} label="SEARCH MOVIES" />
          <Tab style={{width:"50%"}} label="SEARCH TV SERIES" />


        </Tabs>
        </ThemeProvider>
        <div className="trending">
        {content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={type ? "tv" : "movie"}
              vote_average={c.vote_average}
            />
          ))}
        {searchText &&
          !content &&
          (type ? <h2>No Series Found</h2> : <h2>No Movies Found</h2>)}
      </div>
      {numOfPages > 1 && (
        <CustomPagination setPage={setPage} numOfPages={numOfPages} />
      )}
    
    </div>
  )
}

export default Search