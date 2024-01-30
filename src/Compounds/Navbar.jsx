import React from 'react'

function Navbar() {
    return (
        <div>
            <div className='w-full h-[780px]'>
                <div className='h-20 w-full bg-blue-300 flex justify-evenly items-center gap-[70%] font-semibold text-2xl  '>
                    <h1 className='' >E-Library</h1>
                    <button className='border-none bg-gray-400 h-10 w-36 rounded-lg text-white'>Contact</button>
                </div>
                <div>
                    <img src="https://i.pinimg.com/originals/67/18/22/671822c2f63dd5f65d8fd15c9710420b.jpg" alt="" className='h-[700px] w-full' />
                    <div className='relative bottom-[450px] text-white ml-[40%] font-medium text-2xl'>
                        <h1 className='border-8 border-yellow-500 w-[400px] h-36 text-5xl'>Explore Book</h1>
                        <button className='relative bottom-16 left-7 border-2 border-slate-950 w-36 bg-gray-400'>MORE</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar