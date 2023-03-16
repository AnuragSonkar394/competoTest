import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';


function Login() {
  const navigate=useNavigate();

  const [team_email,setEmail]=useState('');
  const [password,setPassword]=useState('');
 
  const loginUser= async (e)=>{
      e.preventDefault(); 

      

      const res=await fetch("/signin",{

          method: "POST",
          headers: {
              "Content-Type":"application/json"
          },
          body:JSON.stringify({
             team_email,password
          })

      });

      const data = await res.json();

     
      if(res.status === 400 || !data)
      {
        window.alert("INVALID CREDENTIALS");
        navigate("/login");
      }
      else{
        window.alert("User Login Succesfully");
       
        navigate("/");

      }}
  return (
    <div>
       <div class="m-5">
      <span class="badge badge-warning ">LogIn</span>
        <form method="POST">
       
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input name="team_email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
    
    value={team_email}
     onChange={(e)=>setEmail(e.target.value)}
     placeholder="Enter email"/>
   
 
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input name="password" type="password" class="form-control" id="exampleInputPassword1"
    
    value={password}
     onChange={(e)=>setPassword(e.target.value)}
     autocomplete="off"
     placeholder="Password"/>
  </div>
  
  
  
  <input  type="submit" class="btn btn-success "  onClick={loginUser}/>
</form>
    </div>
    </div>
  )
}

export default Login