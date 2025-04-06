import React, { FC } from 'react'

interface Button {
    onClick: () => void
}

const Button: FC<Button> = ({onClick}) => {
  return (
    <div className='flex justify-center' onClick={onClick}>
        <button type='button' className='w-35 h-12 bg-slate-600 rounded-2xl cursor-pointer hover:bg-slate-500 hover:shadow-md ring-orange-300 hover:ring-2 duration-900' >
            Load SWapi
        </button>
    </div>        
  )
}

export default Button
