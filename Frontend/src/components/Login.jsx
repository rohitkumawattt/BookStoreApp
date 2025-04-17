import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios'
import { toast } from 'react-hot-toast'


function Login() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        const userInfo = {
            email: data.email,
            password: data.password
        }
        await axios.post("http://localhost:4001/user/login", userInfo)
            .then((res) => {
                console.log(res.data)
                if (res.data) {
                    toast.success('Login successful!');
                    document.getElementById("my_modal_3").close()
                    setTimeout(() => {
                        window.location.reload()
                        localStorage.setItem("Users", JSON.stringify(res.data.user))
                    }, 1000)
                }
            })
            .catch((error) => {
                if (error.response) {
                    toast.error('This is an error in login process!');
                    setTimeout(() => {
                
                    }, 1000);
                }
            });
    }
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
                            <input type="email" placeholder="Enter your email" className="input input-bordered w-full max-w-xs outline-0" {...register("email", { required: true })} />
                            <br />
                            {errors.email && <span className='text-md text-red-400'>This field is required</span>}
                        </div>
                        <div>
                            <span>Password</span><br />
                            <input type="password" placeholder="Enter your password" className="input input-bordered w-full max-w-xs outline-0" {...register("password", { required: true })} />
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
