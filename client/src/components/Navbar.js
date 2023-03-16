import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import logo from"./logo.jpg";
const Navbar = () => {
  return (
  <div class="sticky-top position-sticky bg-dark text-white ">
  <nav class=" navbar navbar-expand-lg navbar-dark bg-black  text-white">
  <a class="navbar-brand" href="/" >
    <img class="logo" src={logo}></img>
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active mr-5">
        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
      </li>
      
      <li class="nav-item mr-5">
        <a class="nav-link" href="/about">About</a>
      </li>
      <li class="nav-item mr-5">
        <a class="nav-link" href="/contest">Contests</a>
      </li>
      <li class="nav-item mr-5">
        <a class="nav-link" href="/login">Login</a>
      </li>
      <li class="nav-item mr-5">
        <a class="nav-link" href="/signup">Registration</a>
      </li>
      <li class="nav-item mr-5">
        <a class="nav-link" href="/logout">Logout</a>
      </li>
      
      
    
        
      
     
    </ul>
    
  </div>
</nav>
</div>
  )
}

export default Navbar