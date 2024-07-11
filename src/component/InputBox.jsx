import React from 'react'

export const InputBox = ({lable, placeholder,type,onChange}) => {
  return (
    <div>
        <div className='text-sm font-medium text-left py-2'>
            {lable}
        </div>
        <input  onChange={onChange} placeholder={placeholder} type={type} className='block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'></input>
    </div>
  )
}
