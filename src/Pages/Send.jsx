import axios from 'axios';
import React, { useState } from 'react'
import { Navigate, useNavigate, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const Send = () => {
  
  const [searchparam]= useSearchParams();
  const id = searchparam.get("id");
  const name = searchparam.get("name");
  const navigate = useNavigate();
  
  const[amount , setamount]= useState(0);
  const token = localStorage.getItem("token");
    if (!token) {
      toast.error("No token found. Please log in.");
      return;
    }
    const Requestdata= {
      to:id,
      amount
    }
  return (
    <div className="flex justify-center h-screen bg-gray-100">
    <div className="h-full flex flex-col justify-center">
      <div className="border h-min text-card-foreground max-w-md p-4 space-y-8 w-96 bg-white shadow-lg rounded-lg">
        <div className="flex flex-col space-y-1.5 p-6">
          <h2 className="text-3xl font-bold text-center">Send Money</h2>
        </div>
        <div className="pl-6 pr-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
              <span className="text-2xl text-white">
                {name[0].toUpperCase()}
              </span>
            </div>
            <h3 className="text-2xl font-semibold">{name}</h3>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="amount"
              >
                Amount (in Rs)
              </label>
              <input onChange={(e)=>{
                setamount(e.target.value)
              }}
               
                type="number"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                id="amount"
                placeholder="Enter amount"
              />
            </div>
            <button onClick={()=>{
              axios.post("http://localhost:3000/account/transfer",
                Requestdata
              ,{
                headers:{
                  Authorization:"Bearer " + token
                }
              }).then(Response=>{
                toast.success(Response.data.message);
                if(Response.data.status){
                  navigate("/Dashboard")
                }
                
              }).catch(Response=>{
                // toast.success(Response.data.message);
              })
            }}
              className="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-green-500 text-white"
            >
              Initiate Transfer
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Send;