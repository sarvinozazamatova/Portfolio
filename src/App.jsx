import React from "react";
import {Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar";
import Footer  from "./components/Footer";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";



const App = () => {
  return ( 
    <React.Fragment>   
      <div className="app">
  
        <Navbar/>
     
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
         
        </Routes>
        <Footer/>
        </div>
    </React.Fragment>
   );
}
 
export default App;