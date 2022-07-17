
import { Container } from '@mui/system';
import './App.css';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import Header from './Components/header/Header';
import BottomNavigation  from './Components/MainNav';
import Trending from './Folder/Trending/Trending';
import Search from './Folder/Search/Search';
import Movies from './Folder/Movies/Movies';
import Series from './Folder/Series/Series'


function App() {
  return (
    <>
    
    <BrowserRouter>  
      <Header/>
     <div className="App">
     <Container> 
      <Routes>
        <Route path='/' element={<Trending/>} exact/>
        <Route path='/Movies' element={<Movies/>}/>
        <Route path='/series' element={<Series/>}/>
        <Route path='/search' element={<Search/>}/>
      </Routes>
    </Container>
    </div>
    <BottomNavigation/>
    </BrowserRouter> 

    </>
   
  );
}

export default App;
