import React , {useState} from 'react'
import httpClient from '../httpClient'
import './loginpage.css'

const Loginpage: React.FC = () => {
    const[email,setemail]= useState<string>("")
    const[password,setpassword]= useState<string>("")
    const loginuser = async() =>{
        console.log(email,password)
        try{
          const resp = await httpClient.post("//localhost:5000/login",{
          email,
          password,
        });
        window.location.href ="/"
        }
        catch(error:any){
          if(error.response.status === 401){
            alert("invalid credantial");}
          }

        }
  return (
    <div id = "wrapper">
      <form action="">
        <h2>Login</h2>
        <div id="input-box">
            <label>Email</label>
            <input placeholder='email' type = "text" value={email} 
            onChange={(e)=>setemail(e.target.value)} id=""/><br/>
            </div>
            <div id="input-box">
            <label>Password </label>
            <input placeholder='password' type = "password" value={password} 
            onChange={(e)=>setpassword(e.target.value)} id=""/>
            </div>
            <button id='login' type ="button" onClick={()=>loginuser()}>Login</button>
            <p id="p">Don't have an account?  <a href="/register">Signup</a></p>
      </form>
    </div>
  )
}

export default Loginpage