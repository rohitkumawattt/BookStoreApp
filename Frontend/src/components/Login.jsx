import React from 'react'
import { NavLink , Link} from 'react-router-dom'
import { useForm } from "react-hook-form"



function Login() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
    return (
        <div className='dark:bg-slate-900 dark:text-white'>
            <dialog id="my_modal_3" className="modal ">
                <div className="modal-box dark:bg-slate-900 dark:text-white relative">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-5 top-5 text-2xl" onClick={() => document.getElementById('my_modal_3').close()}>✕</button>
                       
                    <h3 className="font-bold text-lg mb-4">Login!</h3>
                    <div>
                        <span>Email</span> <br />
                        <input type="email" placeholder="Enter your email" className="input input-bordered w-full max-w-xs outline-0" {...register("email", { required: true })}/>
                        <br />
                        {errors.email && <span className='text-md text-red-400'>This field is required</span>}
                    </div>
                    <div>
                        <span>Password</span><br />
                        <input type="password" placeholder="Enter your password" className="input input-bordered w-full max-w-xs outline-0" {...register("password", { required: true })}/>
                        <br />
                        {errors.password && <span className='text-md text-red-400'>This field is required</span>}
                    </div>
                    <div className="mt-4 flex justify-between align-middle">
                        <button className="btn btn-secondary">Login</button>
                        <p>Not registered? <NavLink to="/signup" className="text-blue-500">Sign up</NavLink></p>
                    </div>
                    </form>
                </div>
            </dialog>
        </div>
    )
}

export default Login
