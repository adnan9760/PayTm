import React from 'react'
import { Link } from 'react-router-dom'

export const ButtonWarn = ({lable,to,btnText}) => {
  return (
    <div className='py-2 text-sm flex justify-center'>
     <div>
        {lable}
     </div>
     <Link to={to} className='pointer underline pl-1 cursor-pointer '>
     {btnText}
     </Link>
    </div>
  )
}
