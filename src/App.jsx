import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Blogs from './Components/Blogs/Blogs';
import Dashborad from './Components/Dashborad/Dashborad';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import NotFound from './Components/NotFound/NotFound';
import Reviews from './Components/Reviews/Reviews';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='/reviews' element={<Reviews/> }/>
        <Route path='/blogs' element={<Blogs/> }/>
        <Route path='/dashboard' element={<Dashborad />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </div>
  );
}

export default App;
