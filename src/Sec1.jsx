import React from 'react'

export default function Sec1() {
  return (
   <>
   <div className=' pb-20 pt-20'>
    <div className=' grid lg:grid-cols-3 grid-cols-1  px-20 gap-6'>
        <div className='border space-y-2'>
            <img src="../asets/img/2 (7).jpg" alt="" />
            <h2 className=' text-3xl font-bold text-black'>Family Room</h2>
            <p className=' text-gray-500 text-lg'> Day & Night</p>
            <div className=' flex justify-center items-center'>
            <button className=' h-12 w-36 border-2 border-black text-black text-sm hover:bg-black hover:text-white duration-300'> Booking Now</button>
            </div>
        </div>
        <div className='border space-y-2'>
        <img src="../asets/img/4 (3).jpg" alt="" />
        <h2 className=' text-3xl font-bold text-black'>Family Room</h2>
            <p className=' text-gray-500 text-lg'> Day & Night</p>
            <div className=' flex justify-center items-center'>
            <button className=' h-12 w-36 border-2 border-black text-black text-sm hover:bg-black hover:text-white duration-300'> Booking Now</button>
            </div>


        </div>
        <div className='border space-y-2'>
        <img src="../asets/img/8 (1).jpg" alt="" />
        <h2 className=' text-3xl font-bold text-black'>Family Room</h2>
            <p className=' text-gray-500 text-lg'> Day & Night</p>
            <div className=' flex justify-center items-center'>
            <button className=' h-12 w-36 border-2 border-black text-black text-sm hover:bg-black hover:text-white duration-300'> Booking Now</button>
            </div>

        </div>


    </div>
   </div>
   </>
  )
}
