import React, { useEffect, useState } from 'react';
import { Button } from './Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export const Users = () => {
  const [filter,setfilter] = useState("");
  const [users, setUsers] = useState([
   
  ]);
  
  useEffect(()=>{
     axios.get("http://localhost:3000/user/bulk?filter=" + filter).then(response=>{
      setUsers(response.data.users);
     })
  },[filter])

  return (
    <>
      <div className="font-bold mt-6 ml-9 text-lg">Users</div>
      <div className="my-2 ">
        <input onChange={(e)=>{
           setfilter(e.target.value)
        }}
          type="text"
          placeholder="Search users..."
          className="w-[80%] ml-9 px-2 py-1 border rounded border-slate-200"
        />
      </div>
      <div className='w-[80%] ml-9 '>
        {users.map((user) => (
          <User key={user._id} user={user} />
        ))}
      </div>
    </>
  );
};

function User({ user }) {
  let navigate = useNavigate();
  return (
    <div className="flex justify-between items-center my-2 p-2 border rounded border-slate-200">
      <div className="flex items-center">
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center items-center mr-2">
          <div className="text-xl">
            {user.firstName[0]}
          </div>
        </div>
        <div className="flex flex-col justify-center h-full">
          <div>
            {user.firstName} {user.lastName}
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center h-full">
        <Button onClick={(e)=>{
         navigate("/Send?id="+user._id +"&name=" + user.firstName)
        }} lable={"Send Money"} />
      </div>
    </div>
  );
}
