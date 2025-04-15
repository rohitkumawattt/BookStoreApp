import React from 'react'
import { NavLink } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"




function Signup() {
  const {
          register,
          handleSubmit,
          watch,
          formState: { errors },
        } = useForm()
      
        const onSubmit = (data) => console.log(data)
  return (
    <>
      <div className='flex items-center justify-center h-screen'>
        <div id="my_modal_4" className="dark:bg-slate-900 dark:text-white border-0 py-8 px-6 rounded-2xl shadow-lg relative">
          <div className="">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <NavLink to="/" className="btn btn-sm btn-circle btn-ghost absolute right-5 top-5 text-2xl hover:scale-105">✕</NavLink>
            
            <h3 className="font-bold text-lg mb-4">Signup!</h3>
            <div>
              <span>Name</span> <br />
              <input type="text" placeholder="Enter your full name" className="input input-bordered w-full max-w-xs outline-0" {...register("name", { required: true })} /> <br />
              {errors.email && <span className='text-md text-red-400'>This field is required</span>}
            </div>
            <div>
              <span>Email</span> <br />
              <input type="email" placeholder="Enter your email" className="input input-bordered w-full max-w-xs outline-0" {...register("email", { required: true })} /> <br />
              {errors.email && <span className='text-md text-red-400'>This field is required</span>}
            </div>
            <div>
              <span>Password</span><br />
              <input type="password" placeholder="Enter your password" className="input input-bordered w-full max-w-xs outline-0" {...register("password", { required: true })} /> <br />
              {errors.email && <span className='text-md text-red-400'>This field is required</span>}
            </div>
            <div className="mt-4 gap-3 flex justify-between align-middle">
              <button className="btn btn-secondary">Signup</button>
              <p>Have an account? <a className="text-blue-500 cursor-pointer" onClick={() => document.getElementById("my_modal_3").showModal()}>Log in</a>{" "}
                <Login />
              </p>

            </div>
</form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup
