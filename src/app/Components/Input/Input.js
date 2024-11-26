import React from 'react'

function Input({onChange,placeholder,labelText,fieldName}) {
  return (
    <div className='flex flex-col gap-[5px] '>
    <label className = ''>{labelText}</label>
    <input name = {fieldName} onChange={onChange}  className = 'w-[365px] h-[38px] border-[1px] border-[#2F2B3D40] rounded-[6px] !outline-none px-3' placeholder={placeholder}  />
    </div>
  )
}

export default Input