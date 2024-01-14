import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products'
import Contact from './pages/Contact'
import ProductDetails from './pages/ProductDetails'
import PageNotFound from './pages/PageNotFound'
import Cart from './pages/Cart'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/productDetails/:id' element={<ProductDetails />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
