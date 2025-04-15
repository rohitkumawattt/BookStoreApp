import React from 'react'
import list from "../../public/list.json"
import Cards from './Cards'
import { Link } from 'react-router-dom'
function Course() {
    console.log(list)
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
                <div className='mt-28 items-center justify-center text-center'>
                    <h1 className='text-2xl font-semibold md:text-4xl'>We're delighted to have you <span className='text-pink-500'>here! :)</span></h1>
                    <p className='mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est earum eum esse veritatis quas tenetur voluptatum qui atque rem deserunt animi, numquam cupiditate recusandae officiis perspiciatis voluptas vitae maxime optio.</p>
                    <Link to="/">
                    
                    <button className="btn btn-secondary mt-6 hover:text-pink-700,text-white duration-300 ">Back</button>
                    </Link>
                </div>
                <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
                    {
                        list.map((item) => {
                            return <Cards key={item.id} item={item} />
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Course

