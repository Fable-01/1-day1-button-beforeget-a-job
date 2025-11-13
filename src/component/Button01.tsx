import React from 'react'
import { ArrowRight } from 'lucide-react';



const Button01 = () => {
    return (<>
        <div className='   
         group
        flex w-[300px] h-[100px] bg-amber-200 justify-center items-center
        border-3 border-black transition-all duration-300
        hover:translate-x-1
        hover:-translate-y-1
        hover:shadow-[-12px_12px_0px_black]
    '>
            <div  className=' flex '>
                <div className='
                overflow-hidden
                relative
                 font-bold  text-[24px] 
                 text-center flex justify-between 
                 items-center   w-[200px] h-10 '>
                <div className="
            absolute inset-0  flex items-center justify-center
             duration-300 ease-in-out
            group-hover:-translate-y-full
          ">Hover Me</div>

                <div className="
            absolute inset-0 flex items-center justify-center
            duration-300 ease-in-out
            translate-y-[30px] group-hover:translate-y-0
          ">Hover Me</div>

                </div>

                <div className='
               overflow-hidden
                relative
                 font-bold  text-[24px] 
                 text-center flex justify-between 
                 items-center   w-10 h-10 '>
                <div className="
            absolute inset-0  flex items-center justify-center
             duration-300 ease-in-out
            group-hover:-translate-x-[-50px]
          "><ArrowRight/></div>

                <div className="
                text-red-500
            absolute inset-0 flex items-center justify-center
            duration-300 ease-out
            translate-x-[-60px] group-hover:translate-x-0
          "><ArrowRight/></div>





                </div>





            </div>

        </div>

    </>

    )
}

export default Button01