import React from 'react'
import banner from "../../public/banner.jpg"

const Banner = () => {
    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
                <div className='w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32'>
                    <div className='space-y-12'>
                        <h1 className='text-4xl font-bold'>Hello, welcomes here to learn something <span className='text-pink-500'>new everyday!!!</span></h1>
                        <p className='text-xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores placeat sed ullam cupiditate a accusantium rerum ea, molestias aliquid veniam nulla ratione quo incidunt tempora modi !</p>
                        <label className="input validator w-full md:w-150 dark:bg-slate-900 dark:text-white dark:border-white">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
                            <input type="email" placeholder="mail@site.com" required />
                        </label>
                    </div>
                    <button className="btn btn-secondary my-6">Get Started</button>
                    <div className="validator-hint hidden ">Enter valid email address</div>
                </div>
                <div className='order-1 w-full md:w-1/2'>
                        <img src={banner} className='w-160' alt="" />
                </div>
            </div>
        </>
    )
}

export default Banner
