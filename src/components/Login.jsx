import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login as storeLogin } from '../store/authSlice'
import { Button, Logo, Input } from './index'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import { useForm } from 'react-hook-form'
import { useState } from 'react'


function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState("");


    const login = async (data) => {
        setError("")
        try {
            const session = await authService.login(data)
            console.log('Current session', session);

            if (session) {
                const userData = await authService.getCurrentUser()
                console.log('Current user', userData);

                if (userData) dispatch(storeLogin(userData))
                navigate('/')
            }
        } catch (error) {
            setError(error.message)
        }
    }

    return (

        <div className="min-h-screen flex items-center justify-center bg-[#0b0f19] px-4">
            <div className="w-full max-w-md bg-slate-900/80 backdrop-blur-xl
        border border-slate-800 rounded-2xl p-8 shadow-2xl">

                <div className="flex justify-center mb-6">
                    <Logo width="w-[120px]" />
                </div>

                <h2 className="text-2xl font-bold text-center text-white">
                    Welcome Back 👋
                </h2>
                <p className="text-center text-slate-400 text-sm mt-1">
                    Sign in to continue
                </p>

                {error && (
                    <p className="text-red-500 text-sm text-center mt-4">{error}</p>
                )}

                <form onSubmit={handleSubmit(login)} className="mt-6 space-y-5">
                    <Input
                        label="Email"
                        type="email"
                        placeholder="you@example.com"
                        {...register("email", { required: true })}
                    />

                    <Input
                        label="Password"
                        type="password"
                        placeholder="••••••••"
                        {...register("password", { required: true })}
                    />

                    <Button type="submit" className="w-full bg-indigo-600">
                        Sign In
                    </Button>
                </form>

                <p className="text-center text-sm text-slate-400 mt-6">
                    Don’t have an account?{" "}
                    <Link
                        to="/signup"
                        className="text-indigo-400 hover:text-indigo-300 font-medium"
                    >
                        Create one
                    </Link>
                </p>
            </div>
        </div>


        // <div className='flex items-center justify-center w-full'>
        //     <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        //         <div className="mb-2 flex justify-center">
        //             <span className="inline-block w-full max-w-[100px]">
        //                 <Logo width="100%" />
        //             </span>
        //         </div>
        //         <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
        //         <p className="mt-2 text-center text-base text-black/60">
        //             Don&apos;t have any account?&nbsp;
        //             <Link
        //                 to='/signup'
        //                 className='font-medium text-primary transition-all duration-200 hover:underline'
        //             >
        //                 Sign Up
        //             </Link>
        //         </p>

        //         {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

        //         <form onSubmit={handleSubmit(login)} className='mt-8'>
        //             <div className='space-y-5'>
        //                 <Input
        //                     label="email"
        //                     type="email"
        //                     placeholder="Enter your email"
        //                     {...register('email', {
        //                         required: true,
        //                         validate: {
        //                             matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
        //                                 "Email address must be a valid address",
        //                         }
        //                     })}
        //                 />

        //                 <Input
        //                     label='password'
        //                     type="password"
        //                     placeholder="Enter Your password"
        //                     {...register('password', {
        //                         required: true
        //                     })}
        //                 />

        //                 <Button
        //                     type='submit'
        //                     className='w-full  '
        //                 >Sign in
        //                 </Button>

        //             </div>
        //         </form>
        //     </div>

        // </div>
    )
}

export default Login
