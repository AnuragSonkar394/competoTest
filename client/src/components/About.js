
import React from 'react';
import { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import pic1 from "./BALL.png";
import Anurag from "./Image/dp.png";
import winner2 from "./Image/Winner2.jpg";
function About() {

    const navigate = useNavigate();
    const [userData, setUserData]=useState({});
   const callAboutPage = async () => {
   try{
     const res = await fetch('/about',{

      method:"GET",
      headers:{
        Accept: "application/json",
        "Content-Type":"application/json"
      },
      credentials:"include"
     });
      const data =await res.json();
    setUserData(data);
      console.log(data);
      if(!res.status===200)
        {
          const error = new Error(res.error);
           throw error;

        }

   }catch(err){
     console.log(err);
    navigate("/login"); 
   }
}
useEffect(() => {

  callAboutPage();

}, []);


return (
  <div class=" justify-content-center  bg-black text-white  w-100 h-100">
    <form method="GET">
   
    <div class="media">
  <div class="media-body">
    <h2 class="mt-0 mb-1 text-center">My Profile</h2>
    
  </div>
  <img src={Anurag} class="pr-5" alt="../"/>
  </div>
  


   
    
    <div class="container mt-4">
     <div class="row">
     <div class="col-sm text-center">
     <h3>Team Name</h3>
     <h2>{userData.team_name}</h2>
    </div>
      <div class="col-sm text-center">
      <h3>Contact Detail</h3>
      <h2>{userData.team_email}</h2>
      </div>
    <div class="col-sm text-center">
    <h3>Awards You Won</h3>
    <h2></h2>
      </div>
     </div>
    </div>

    <h3 class=" text-center  text-white  bg-black mt-5">History</h3>
    <table class="table table-hover table-dark  ">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Contest Name</th>
          <th scope="col">Status</th>
          <th scope="col">Results</th>
          <th scope="col">Transactions</th>

        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>WON</td>
          <td>@mdo</td>
          <td>+200</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>LOSE</td>
          <td>@fat</td>
          <td>-200</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td >Larry the Bird</td>
          <td>WON</td>
          <td>@twitter</td>
          <td>+200</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td >Larry the Bird</td>
          <td>WON</td>
          <td>@twitter</td>
          <td>+200</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td >Larry the Bird</td>
          <td>WON</td>
          <td>@twitter</td>
          <td>+200</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td >Larry the Bird</td>
          <td>WON</td>
          <td>@twitter</td>
          <td>+200</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td >Larry the Bird</td>
          <td>WON</td>
          <td>@twitter</td>
          <td>+200</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td >Larry the Bird</td>
          <td>WON</td>
          <td>@twitter</td>
          <td>+200</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td >Larry the Bird</td>
          <td>WON</td>
          <td>@twitter</td>
          <td>+200</td>
        </tr><tr>
          <th scope="row">3</th>
          <td >Larry the Bird</td>
          <td>WON</td>
          <td>@twitter</td>
          <td>+200</td>
        </tr>
      </tbody>
    </table>

    </form>
  </div>
)
}

export default About