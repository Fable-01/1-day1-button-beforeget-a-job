import React from 'react'

const Button03 = () => {
  return (
    <div className=' duration-300 group flex justify-center items-center w-[300px] h-[80px] bg-amber-300  rounded-[50px]
     hover:shadow-[6px_6px_10px_gray] 
     hover:translate-y-[-5px]
    
     '>
        <div className=' absolute text-3xl'>
             Hover
        </div>
          <div className=' duration-300 bg-amber-300 w-[300px] h-[80px] group-hover:animate-ping-once rounded-[50px]'>

          </div>
    </div>
  )
}

export default Button03