import React from 'react'

function Cards({ item }) {
    return (
        <>
            <div className='mt-4 my-5'>
                <div className="card bg-base-100 w-80 shadow-sm hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
                    <figure>
                        <img
                            src={item.image}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {item.name}
                            <div className="badge badge-secondary">{item.category}</div>
                        </h2>
                        <p>{item.title}</p>
                        <div className="card-actions justify-between">
                            <div className="badge badge-outline">$ {item.price}</div>
                            <div className="border px-2 py-1 rounded hover:bg-pink-500 duration-200 hover:text-white cursor-pointer">Buy now</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards
