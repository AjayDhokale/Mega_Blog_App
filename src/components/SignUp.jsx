import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../store/authSlice'
import { Button, Input, Logo } from './index'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

function SignUp() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [error, setError] = useState('');
    const { register, handleSubmit } = useForm()

    const create = async (data) => {
        setError("")

        try {
            const userData = await authService.createAccount(data)
            // console.log(userData);
            if (userData) {
                const userData = await authService.getCurrentUser()

                if (userData) dispatch(login(userData))

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
                    Create Account 🚀
                </h2>
                <p className="text-center text-slate-400 text-sm mt-1">
                    Join Mega Blog today
                </p>

                {error && (
                    <p className="text-red-500 text-sm text-center mt-4">{error}</p>
                )}

                <form onSubmit={handleSubmit(create)} className="mt-6 space-y-5">
                    <Input
                        label="Full Name"
                        placeholder="Your name"
                        {...register("name", { required: true })}
                    />

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
                        Create Account
                    </Button>
                </form>

                <p className="text-center text-sm text-slate-400 mt-6">
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        className="text-indigo-400 hover:text-indigo-300 font-medium"
                    >
                        Sign In
                    </Link>
                </p>
            </div>
        </div>

        // <div className='flex items-center justify-center'>
        //     <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        //         <div className="mb-2 flex justify-center">
        //             <span className="inline-block w-full max-w-[100px]">
        //                 <Logo width="100%" />
        //             </span>
        //         </div>
        //         <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
        //         <p className="mt-2 text-center text-base text-black/60">
        //             Already have an account?&nbsp;
        //             <Link
        //                 to="/login"
        //                 className="font-medium text-primary transition-all duration-200 hover:underline"
        //             >
        //                 Sign In
        //             </Link>
        //         </p>

        //         {error && <p className="text-red-600 mt-8 text-center">{error}</p>}


        //         <form onSubmit={handleSubmit(create)}>
        //             <div className='space-y-5'>

        //                 <Input
        //                     label='name'
        //                     type='text'
        //                     placeholder="Enter your Full Name"
        //                     {...register('name', {
        //                         required: true
        //                     })}
        //                 />

        //                 <Input
        //                     label='email'
        //                     type='email'
        //                     placeholder="Enter your email"
        //                     {...register('email', {
        //                         required: true,
        //                         validate: {
        //                             matchPattern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
        //                                 "Email address must be a valid address",
        //                         }
        //                     })}
        //                 />


        //                 <Input
        //                     label='password'
        //                     type='password'
        //                     placeholder="Enter your password"
        //                     {...register('password', {
        //                         required: true
        //                     })}
        //                 />

        //                 <Button type='submit' className='w-full'>
        //                     Create Account
        //                 </Button>
        //             </div>
        //         </form>
        //     </div>
        // </div>
    )
}

export default SignUp
