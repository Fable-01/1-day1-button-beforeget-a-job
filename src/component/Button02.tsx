import React from 'react'
import { Dot } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
const Button02 = () => {
    return (
        <div className=' flex w-[280px] h-[70px] bg-blue-200 rounded-[48px] group overflow-hidden items-center  duration-300
         hover:bg-blue-950
         hover:w-[320px]
        '>
            <div className=' relative flex  items-center  text-3xl'>
            <div className='  relative w-[30px] h-10  py-1.5    '>

                <div className=' bg-amber-400 '></div>
                 <Dot className=' text-blue-950 absolute  duration-300  scale-[5]  translate-x-[20px] 
                  group-hover:scale-[13] 
                   group-hover:text-blue-200
                  '/>
       


                     <ArrowRight  className=' 
                       absolute  scale-120 translate-x-[-25px] duration-350  ease-out
                       group-hover:translate-x-[20px] 
                       text-blue-950
                      
                     '/>  
              
            </div>
            <div className=' duration-300 group-hover:text-blue-200 translate-x-[25px] group-hover:translate-x-[50px]'>
                Hover this link
            </div>
            </div>


        </div>
    )
}

export default Button02