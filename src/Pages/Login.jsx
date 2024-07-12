import { Header } from '../component/Header'
import { Subheading } from '../component/Subheading'
import { InputBox } from '../component/InputBox'
import { Button } from '../component/Button'
import { ButtonWarn } from '../component/ButtonWarn'
import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate();
  const[userName,SetuserName] = useState("");
  const[password,setPassword] = useState("");
  return (
    <div className='bg-slate-300 h-screen flex  justify-center items-center'>
    <div className=' flex flex-col justify-center '>
        <div className='rounded-lg bg-white w-80 text-center p-2 h-max px-4'>
        <Header lable={"Sign In"}></Header>
        <Subheading lable={"Enter your credential to Access your account"} ></Subheading>
      
        <InputBox onChange={(e)=>{
          SetuserName(e.target.value)
        }} lable={"Email"} placeholder={"mdadnan97@gmail.com"} type={"text"}></InputBox>
        <InputBox onChange={(e)=>{
          setPassword(e.target.value)
        }}  lable={"Password"} placeholder={"khan@33"} type={"password"}></InputBox>
        <Button lable={"Sign In"} onClick={
          ()=>{
            fetch("https://paytm-backend-1-ewtn.onrender.com/user/login", {
              method: "POST",
              body: JSON.stringify({
                userName,
                password
              }
                  
              ),
              headers: {
                "Content-type": "application/json",
              },
            }).then(async function (res) {
              const json = await res.json();
             if(json.status){
              localStorage.setItem("token",json.token)
             }
              toast.success(json.message);
              
             if(json.status){
              navigate("/Dashboard")
             }
             else{
              navigate("/Login")
             }
          }
        )
        }}></Button>
      <ButtonWarn lable={"Haven't Register"} to={"/SignUp"} btnText={"SignUp"} ></ButtonWarn>

        </div>

    </div>

</div>
  )
}

export default Login
