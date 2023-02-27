import logo from './logo.svg';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import {BrowserRouter , Routes, Route } from "react-router-dom";
import Items from './components/Items';
import Cart from './pages/Cart';

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Items />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
