import React from 'react'
import { NavLink ,useLocation, useNavigate} from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"
import axios from 'axios'
import { toast } from 'react-hot-toast'


function Signup() {
  const location = useLocation()
  const navigate = useNavigate()
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password
    }
    await axios.post("http://localhost:4001/user/signup", userInfo)
      .then((res) => {
        console.log(res.data)
        if (res.data) {
          toast.success('User Created Successfully!');
          navigate(from, {replace: true});  
          window.location.reload();
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user))
      })
      .catch((error) => {
        if(error.response) {
          toast.error(error.response.data.message);
        }
      });
  }
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
                <input type="text" placeholder="Enter your full name" className="input input-bordered w-full max-w-xs outline-0" {...register("fullname", { required: true })} /> <br />
                {errors.fullname && <span className='text-md text-red-400'>This field is required</span>}
              </div>
              <div>
                <span>Email</span> <br />
                <input type="email" placeholder="Enter your email" className="input input-bordered w-full max-w-xs outline-0" {...register("email", { required: true })} /> <br />
                {errors.email && <span className='text-md text-red-400'>This field is required</span>}
              </div>
              <div>
                <span>Password</span><br />
                <input type="password" placeholder="Enter your password" className="input input-bordered w-full max-w-xs outline-0" {...register("password", { required: true })} /> <br />
                {errors.password && <span className='text-md text-red-400'>This field is required</span>}
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
