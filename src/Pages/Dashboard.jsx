import React, { useEffect, useState } from 'react'
import { Appbar } from '../component/Appbar'
import { Balance } from '../component/Balance'
import { Users } from '../component/Users'
import axios from 'axios'


const Dashboard = () => {
  const[firstName , setfirstName] = useState("");
  const[balance,setbalance] = useState(0)
  const token = localStorage.getItem("token");
    if (!token) {
      toast.error("No token found. Please log in.");
      return;
    }
  useEffect(()=>{
    axios.get("http://localhost:3000/account/balance",
    {
      headers:{
        Authorization:"Bearer " + token
      }
    }).then((response)=>{
      setbalance(response.data.balance)
      
      
    })
  },[balance])

  useEffect(()=>{
    axios.get("http://localhost:3000/account/Detail",
      
    {
      headers:{
        Authorization:"Bearer " + token
      }
    }).then((response)=>{
      setfirstName(response.data.firstName);
      
      
    })
  },[balance])
  return (
    
    <div>
        <Appbar firstName={firstName}></Appbar>
        <Balance value={balance}></Balance>
        <Users></Users>
    </div>
  )
}

export default Dashboard