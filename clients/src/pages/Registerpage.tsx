import React , {useState} from 'react'
import httpClient from '../httpClient'
import './registerpage.css'

const Registerpage = () => {
    const [email, setEmail]= useState<string>("")
    const [password, setPassword]= useState<string>("")
    const [user, setUser]= useState<string>("")
    const Registeruser = async() =>{
        await httpClient.post("//localhost:5000/register",{
          email,
          password,
        });
        alert("You have successfully register");
        window.location.href = "/";
    }
  return (
    <div id='wrapper'>
      <form action="">
        <h2>Registerpage</h2>
         <div id="input-box">
            <label>UseraName : </label>
            <input type="text" value={user} placeholder="username"
                onChange={(e)=>setUser(e.target.value)} id=""/>
            </div>
            <div id="input-box">  
                <label>Email : </label>
                <input type="text" value={email} placeholder="email"
                onChange={(e)=>setEmail(e.target.value)} id=""/>
              </div>
              <div id="input-box">
                <label>Password : </label>
                <input type="password" value={password} placeholder="password"
                onChange={(e)=>setPassword(e.target.value)} id=""/>
            </div>
          <button id ="logi" type="button" onClick={()=>Registeruser()}>Submit</button>
        </form>
        <p id="pi">Already have an account click <a href="/login">login</a> </p>
    </div>
        
  )
}

export default Registerpage