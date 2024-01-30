import React from 'react'

function Shimmer() {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (
        <div className=' flex flex-wrap gap-7 '>
            {
                array.map((index) => (
                    <div key={index} className=' bg-gray-300 h-60 w-56 my-[100px] ml-10 relative right-6 bottom-20   '>
                    </div>
                ))
            }
        </div>
    )
}

export default Shimmer