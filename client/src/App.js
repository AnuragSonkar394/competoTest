import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Logout from "./components/Logout";

import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import ErrorPage from "./components/ErrorPage";
import Contest from "./components/Contest";

import Cricket from "./components/Cricket";
import Carrom from "./components/Carrom";
import Football from "./components/Football";
import Chess from "./components/Chess";
import Tabletanis from "./components/Tabletanis";

import Badminton from "./components/Badminton";
import Hockey from "./components/Hockey";
import Race from "./components/Race";
import Egame from "./components/Egame";
import Registercontest from "./components/Registercontest";

export default function App() {
  return (
     
    <>
      <Navbar/>
      <Routes>
       
      <Route exact path="/" element={<Home/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/contest" element={<Contest/>} />
          <Route exact path="/signup" element={<Signup/>} />
          <Route exact path="/login" element={<Login/>} /> 
          <Route exact path="/logout" element={<Logout/>} /> 
          <Route exact path="/cricket" element={<Cricket/>} /> 
          <Route exact path="/football" element={<Football/>} /> 
          <Route exact path="/chess" element={<Chess/>} /> 
          <Route exact path="/egame" element={<Egame/>} /> 
          <Route exact path="/carrom" element={<Carrom/>} /> 
          <Route exact path="/race" element={<Race/>} /> 
          <Route exact path="/tabletanis" element={<Tabletanis/>} />
          <Route exact path="/badminton" element={<Badminton/>} /> 
          <Route exact path="/hockey" element={<Hockey/>} /> 
          <Route exact path="/registercontest" element={<Registercontest/>} /> 
          
         
          <Route path="*" element={<ErrorPage/>} />
          
      </Routes>

   </>
  );
}