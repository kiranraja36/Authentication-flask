import React,{useState,useEffect} from 'react'
import { User } from '../types'
import './landingpage.css'
import logo from '../Black_Pink_Bold_Elegant_Monogram_Personal_Brand_Logo-removebg-preview.png'
import httpClient from '../httpClient'
const Landingpage: React.FC = () => {
  const [User,setUser] = useState<User | null>(null)
  const logoutuser = async() =>{
    console.log(User);
    await httpClient.post("//localhost:5000/logout");
    window.location.href = "/";
  }
  useEffect(()=>{
    (async() => {
      try{
        const resp = await httpClient.get("//localhost:5000/@me");
        setUser(resp.data);
      } catch(error){
        console.log("Not Authenticated")
      }
    })();
  },[]);
  return (
    <div id='app'>
        <img id = "img-size" src={logo} alt="logo"/>
        {User != null ? (<div><h1>You are logged in </h1>
        <h2> ID : {User.id}</h2>
        <h2> EMAIL : {User.email}</h2>
        <button id="log" onClick={logoutuser}>logout</button></div>) : (<div>
          <h1>welcome to my react app</h1>
          <h5>you're not logged in</h5>
        <a href='/login'><button id="log">login</button></a>
        <h5 id="text">if you don't have account please press the register link <a href ="/register">  register </a></h5>
        </div>)}
    
    </div>
  )
}

export default Landingpage