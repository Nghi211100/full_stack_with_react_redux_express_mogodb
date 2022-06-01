import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductSceen";
import CartSceen from "./screens/CartScreen";
import Navbar from "./components/Navbar";
import Backdrop from "./components/Backdrop";
import SideDrawer from "./components/SideDrawer";
import { useState } from 'react';

function App() {

  const [sideToggle, setSideToggle] = useState(false);

  const handleClickBar = () => {
    setSideToggle(!sideToggle);
  }
  return (
    <Router>
      <Navbar click={handleClickBar} />
      <Backdrop show={sideToggle} click={handleClickBar} />
      <SideDrawer show={sideToggle} click={handleClickBar} />
      <main>
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route exact path="/product/:id" element={<ProductScreen />} />
          <Route exact path="/cart" element={<CartSceen />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App;
