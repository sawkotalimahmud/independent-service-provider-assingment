import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Blog from './Pages/Blog/Blog';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
