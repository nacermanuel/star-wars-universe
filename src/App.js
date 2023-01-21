import './App.css';
import Home from './components/Home/Home'
import Movie from './components/Movie/Movie';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movie/:id" element={<Movie/>}/>      
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
