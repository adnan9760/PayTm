import React, { useState } from 'react';
import { Header } from '../component/Header';
import { Subheading } from '../component/Subheading';
import { InputBox } from '../component/InputBox';
import { Button } from '../component/Button';
import { ButtonWarn } from '../component/ButtonWarn';
import { toast } from "react-toastify";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Sign = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [otp,setotp] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async () => {
      const requestData = {
        firstName,
        lastName,
        userName,
        password,
        otp,
      };
      
       
      
        fetch("http://localhost:3000/user/signup", {
          method: "POST",
          body: JSON.stringify(
              requestData
          ),
          headers: {
            "Content-type": "application/json",
          },
        }).then(async function (res) {
          const json = await res.json();
          localStorage.setItem("token",json.token)
          toast.success(json.message);
          
         if(json.status){
          navigate("/Login")
         }
         else{
          navigate("/signup")
         }
        });
      
    } ;

  return (
    <div className='bg-slate-300 h-screen flex justify-center items-center'>
      <div className='flex flex-col justify-center'>
        <div className='rounded-lg bg-white w-80 text-center p-2 h-max px-4'>
          <Header lable={"Sign Up"}></Header>
          <Subheading lable={"Enter your credential to create an account"}></Subheading>
          {error && <div className='text-red-500'>{error}</div>}

          <InputBox 
            onChange={(e) => setUserName(e.target.value)} 
            lable={"Email"} 
            placeholder={"mdadnan97@gmail.com"} 
            type={"text"}
          ></InputBox>
           <div className="flex justify-center">
            <button
              type="submit"
              onClick={() => {
                fetch("http://localhost:3000/user/SendOTP", {
                  method: "POST",
                  body: JSON.stringify({
                    userName
                  }),
                  headers: {
                    "Content-type": "application/json",
                  },
                }).then(async function (res) {
                  const json = await res.json();
                  toast.success(json.Message);
                });
              }}
              className="inline-flex items-center mt-5 px-4 py-2 bg-indigo-600 border border-transparent rounded-md font-semibold text-white uppercase tracking-widest hover:bg-indigo-700 focus:outline-none focus:border-indigo-700 focus:ring focus:ring-indigo-500 disabled:opacity-50"
            >
              Next (Send OTP)
            </button>
          </div>
          <InputBox 
            onChange={(e) => setFirstName(e.target.value)} 
            lable={"First Name"}  
            placeholder={"Adnan"} 
            type={"text"}
          ></InputBox>
          <InputBox 
            onChange={(e) => setLastName(e.target.value)} 
            lable={"Last Name"} 
            placeholder={"Khan"} 
            type={"text"}
          ></InputBox>
         
          <InputBox 
            onChange={(e) => setPassword(e.target.value)}  
            lable={"Password"} 
            placeholder={"khan@33"} 
            type={"password"}
          ></InputBox>
          <InputBox 
            onChange={(e) => setotp(e.target.value)}  
            lable={"OTP(One Time Password"} 
            placeholder={"XXXXXX"} 
            type={"text"}
          ></InputBox>
          <Button 
            lable={"Sign Up"} 
            onClick={handleSignUp}
          ></Button>
          <ButtonWarn 
            lable={"Already Have an Account"} 
            to={"/Login"} 
            btnText={"Login"}
          ></ButtonWarn>
        </div>
      </div>
    </div>
  );
}

export default Sign;
