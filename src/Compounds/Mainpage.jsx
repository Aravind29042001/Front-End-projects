import React, { useEffect, useState } from 'react'
import Shimmer from './Shimmer'

function Mainpage() {
    const [bk, setBk] = useState([])
    const [term, setTerm] = useState("")
    useEffect(() => {
        if (term != "") {
            getBk()
        }
    }, [term]
    )
    async function getBk() {
        const data = await fetch(`https://openlibrary.org/search.json?title=${term}`)
        const json = await data.json()
        setBk(json.docs)
    }
    return (
        <div >
            <div className='bg-red-400 w-full h-[980px]'>
                <input type="text" placeholder='Search' className='bg-gray-400 h-[20px] w-[30%] ml-[33%] p-8 border-4 border-slate-950 text-2xl font-serif  relative top-3 rounded-xl text-gray-950 ' onChange={(e) => { setTerm(e.target.value) }} />
                <div className='flex flex-wrap gap-12 ml-10 my-12'>
                    {
                        console.log(bk)
                    }
                    {bk.length==0?<Shimmer/> :



                        bk.slice(0, 10).map((list, index) => (
                            <div key={index} className='flex flex-col h-[380px]'>
                                <img className='h-60 w-56' src={`https://covers.openlibrary.org/b/id/${list.cover_i}-L.jpg`} alt="" />
                                <h1 className='h-16 w-64  my-6'>{list.title}</h1>

                            </div>
                        )
                        )
                    }

                </div>


            </div>


        </div>
    )
}

export default Mainpage