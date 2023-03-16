

import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

function Signup() {
    const navigate=useNavigate();

    const [user,setUser]=useState({
        team_name:"", team_email:"",team_phone:"",password:"",cpassword:""
    });
    let name,value;
     const handleInputs =(e)=>{
         console.log(e);
         name=e.target.name;
         value=e.target.value;
         setUser({...user,[name]:value})
     }
    const PostData= async (e)=>{
        e.preventDefault(); 

        const{team_name,team_email,team_phone,password,cpassword}=user;

        const res=await fetch("/register",{

            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                team_name,team_email,team_phone,password,cpassword
            })

        });

        const data = await res.json();

        if(data.status=== 422|| !data){
            window.alert("invald Registration");
            console.log("invalid Registration");
        }
        else{
            window.alert(" Registration Successful");
            console.log("Registration Successful");

            navigate("/login");

        }
    }
       
  return (
    <div >
    <div class="m-5  ">
      <span class="badge badge-warning ">SingUp</span>
        <form  method="POST">
        <div class="form-group">
    <label for="exampleInputEmail1">Team Name</label>
    <input name="team_name" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
     value={user.team_name}
     onChange={handleInputs}
     
    
     placeholder="Team Name"/>
   
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email Id</label>
    <input name="team_email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
    
    value={user.team_email}
     onChange={handleInputs}
    placeholder="Enter email"/>
   
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Phone Number</label>
    <input name="team_phone" type="number" class="form-control" id="exampleInputPassword1"
    
    value={user.team_phone}
     onChange={handleInputs}
     placeholder="Phone Number"/>
  </div>
  
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input name="password" type="password" class="form-control" id="exampleInputPassword1" 
    
    value={user.password}
     onChange={handleInputs}
    placeholder="Password"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Confirm Password</label>
    <input name="cpassword" type="password" class="form-control" id="exampleInputPassword1" 
     value={user.cpassword}
     onChange={handleInputs}
    placeholder="Confirm Password"/>
  </div>
  
  
  <input  type="submit" class="btn btn-success"
      onClick={PostData}
  />
</form>
    </div>
    </div>
  )
}

export default Signup