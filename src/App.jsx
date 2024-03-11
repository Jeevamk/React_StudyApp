import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import {Home , About , Contact ,Services} from './components/pages'
import Carousal from "./components/pages/Carousal";


const App = ()=>{
  return(
    <>
    <div className="App">
      <Navbar />
      <Routes >
        <Route path="/" element={ <Home />} />
        <Route path="/about" element={<About />}/>
        <Route path="/services" element={<Services />}/>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
    
    </>
  )
}

export default App;

