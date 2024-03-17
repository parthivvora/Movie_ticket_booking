import './styles/main.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import apiRoutes from "./constant/apiRoutes"
import Register from './pages/Register';
import Login from './pages/Login';
import About from './pages/About';
import Contact from './pages/Contact';
import Movies from './pages/movies/Movies';
import MovieDetails from './pages/movies/MovieDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={apiRoutes.HOME} element={<Home />} />
          <Route path={apiRoutes.REGISTER} element={<Register />} />
          <Route path={apiRoutes.LOGIN} element={<Login />} />
          <Route path={apiRoutes.ABOUT} element={<About />} />
          <Route path={apiRoutes.CONTACT} element={<Contact />} />
          <Route path={apiRoutes.MOVIE} element={<Movies />} />
          <Route path={`${apiRoutes.MOVIE}/:movieId`} element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// {apiRoutes.HOME}