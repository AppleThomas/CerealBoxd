// HOME PAGE 

import React from 'react'; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar"; 
import Login from "./Components/Login"; 
import About from "./Components/About"; 
import Cereals from "./Components/Cereals"; 
import Register from "./Components/Register"; 

function App() {
  return(
    <BrowserRouter>
      <Routes>
       <Route path="/AboutPage" index element = {<React.Fragment><Navbar /><About /></React.Fragment>}/>
       <Route path="/CerealsPage" index element = {<React.Fragment><Navbar /><Cereals /></React.Fragment>}/>
       <Route path="/" index element={<React.Fragment><Navbar /><Login /></React.Fragment>} />
       <Route path="/RegisterPage" index element = {<React.Fragment><Navbar /><Register /></React.Fragment>}/>
      </Routes>
    </BrowserRouter>
  ); 
}

export default App; 
