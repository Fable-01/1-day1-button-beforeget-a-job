import React from 'react'

const Button01 = () => {
    return (<>
        <div className='   
         group
        flex w-[300px] h-[100px] bg-amber-200 justify-center items-center
        border-4 border-black transition-all duration-300
        hover:translate-x-[4px] 
        hover:-translate-y-[4px]
        hover:shadow-[-12px_12px_0px_black]
         
       
      "
    '>
            <div>
                <span className='
                overflow-hidden
                relative
                 font-bold  text-[24px] 
                 text-center flex justify-between 
                 items-center   w-[200px] h-[40px] '>

                    <div
                        className="
            absolute inset-0  flex items-center justify-center
             duration-300 ease-in-out
            group-hover:-translate-y-full
          "
                    >
                        Hover Me
                    </div>



                    <div
                        className="
            absolute inset-0 flex items-center justify-center
            duration-300 ease-in-out
            translate-y-[30px] group-hover:translate-y-0
          "
                    >
                        Hover Me
                    </div>


                </span>


            </div>

        </div>




    </>

    )
}

export default Button01