import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import MovieList from './pages/MovieList';
import FavMovie from './pages/FavMovie';
import { useDispatch } from 'react-redux';
import { addFavMovie } from './redux/actions/actions';

function App() {
  const dispatch = useDispatch()
  const favMovie = JSON.parse(localStorage.getItem('favMovie'));
  if (favMovie?.length) {
      for (const item of favMovie) {
        dispatch(addFavMovie(item));
      }
  }
  return (
    <>
      <div className='App'>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<MovieList />} />
            <Route path='/favourites' element={<FavMovie />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
