import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import { Header } from "./component/Header";
import { ProductsContext } from "./context/ProductContext";
import { AddNewProduct } from './pages/AddNewProduct';
import { Login } from './pages/Login';
import { ProductList } from './pages/ProductList';

function App() {
  const { isloggedIn} = useContext(ProductsContext);
  return (
    <div className="App container">
    {isloggedIn && <Header/>}      
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/add" element={<AddNewProduct />} />
        <Route path="/productlist" element={<ProductList />} />
      </Routes>
    </div>
  );
}

export default App;
