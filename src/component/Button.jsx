import React from 'react'

export const Button = ({lable, onClick}) => {
  return (
    <div className='pt-3'>
        <button  type="button" onClick={onClick} className="block w-full text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">{lable}</button>
    </div>
  )
}
