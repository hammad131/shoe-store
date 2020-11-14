import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Header from './components/Header'
import Home from './components/Home';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';
import NotFound from './components/NotFound';
import { ProductIndex } from './components/ProductIndex';


function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='products' element={<Products />}>
          <Route path='/' element={<ProductIndex />}></Route>
          <Route path=':productId' element={<ProductDetails />}></Route>
         </Route>
        <Route path ='*' element={<NotFound />}></Route>
      </Routes>
    </Router>
  );
}
export default App;
