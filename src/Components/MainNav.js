import * as React from 'react';
import Box from '@mui/material/Box';
import { useEffect } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import SearchIcon from '@mui/icons-material/Search';
import MovieIcon from '@mui/icons-material/Movie';
import TvIcon from '@mui/icons-material/Tv';
import { makeStyles } from '@mui/material';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import {useNavigate} from 'react-router-dom';





export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

   useEffect(() => {
   if(value===0) navigate("/");
   else if(value===1) navigate("/Movies");
   else if(value===2) navigate("/Series")
   else navigate("/Search")
  }, [value])
  

  

  return (
    < >
    <div style={{backgroundColor:"black"}}>
    <Box sx={{ width: "100%",position:"fixed",bottom:0,backgroundColor:"black",
    zIndex:100,
    
    }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        style={{backgroundColor:"#39445A"}}
      >
        <BottomNavigationAction style={{color:"white"}} 
        label="Trending"
         icon={< WhatshotIcon />}/>

        <BottomNavigationAction 
        style={{color:"white"}}
        label="Movies" 
        icon={<MovieIcon />} />

        <BottomNavigationAction
        style={{color:"white"}}
         label="Tv" 
         icon={<TvIcon />} />

<BottomNavigationAction
        style={{color:"white"}}
         label="Search" 
         icon={<SearchIcon />} />
      </BottomNavigation>
    </Box>
    </div>
   
    </>
    
  );
}
