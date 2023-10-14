
import { useState, useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '@/contexts/AuthContext/auth';
import Loading from '@/components/Loading/Loading';


const registerFormSchema = z.object({
    name: z.string().nonempty({ message: 'Name is required' }),
    email: z.string().email({ message: 'Invalid email address' }),
    password: z.string().min(6, { message: 'Password must be at least 6 characters long' }),
    rePassword: z.string().min(6, { message: 'Password must be at least 6 characters long' }),
    phone: z.string().min(6, { message: 'phone must be 11 characters long' }),
})
.refine((data) => data.password === data.rePassword, {
    message: "Passwords don't match",
    path: ["rePassword"]
})


const Register = () => {
    const [apiErrorMsg, setApiErrorMsg] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const { login } = useContext(AuthContext)
    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm<formLoginSchema>({
        resolver: zodResolver(registerFormSchema),
        mode: 'onBlur'
    });

    // if (isLoggedIn) {
    //     navigate('/')
    // }

    type formLoginSchema = z.infer<typeof registerFormSchema>;


    const onSubmit: SubmitHandler<formLoginSchema> = async (data) => {
        setApiErrorMsg(null)
        setIsLoading(true)
        try {
            const res = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signup", data)
            console.log(res.data)
            setIsLoading(false)
            login(res.data.token)
            navigate('/')

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            console.log(error);
            console.log(error?.response?.data.message);
            if (error?.message == 'Network Error') {
                setApiErrorMsg(error.message)
            }

            setApiErrorMsg(error?.response?.data.message)
            setIsLoading(false)
        }
    }


    return (
        <section className="relative ">
            <div className="container mx-auto px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
                <div className="mx-auto max-w-lg text-center">
                    <h1 className="text-2xl font-bold sm:text-3xl">Sign up</h1>

                    <p className="mt-4 text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla
                        eaque error neque ipsa culpa autem, at itaque nostrum!
                    </p>
                </div>
                {
                    apiErrorMsg &&
                    <h2 className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-3">{apiErrorMsg}</h2>
                }

                <form onSubmit={handleSubmit(onSubmit)} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
                    {/* Name  */}
                    <div>
                        <label htmlFor="name" className="">name</label>

                        <div className="relative">
                            <input type="text" className="w-full rounded-lg border-gray-200 bg-[#f8f9fa] p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter name"
                                {...register('name')}
                            />

                            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                </svg>
                            </span>
                        </div>
                        {/* error  */}
                        {errors.name && <p className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-3'>{errors.name?.message}</p>}
                    </div>
                    {/* Email  */}
                    <div>
                        <label htmlFor="email" className="">Email</label>

                        <div className="relative">
                            <input type="email" className="w-full rounded-lg border-gray-200 bg-[#f8f9fa] p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter email"
                                {...register('email')}
                            />

                            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                </svg>
                            </span>
                        </div>
                        {/* error  */}
                        {errors.email?.message && <p className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-3'>{errors.email?.message}</p>}
                    </div>

                    {/* password  */}
                    <div>
                        <label htmlFor="password" className="">Password</label>

                        <div className="relative">
                            <input type="password" className="w-full rounded-lg bg-[#f8f9fa] border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter password"
                                {...register('password')}
                            />

                            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </span>
                        </div>
                        {/* error password  */}
                        {errors.password?.message && <p className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-3'>{errors.password?.message}</p>}
                    </div >
                    {/* rePassword  */}
                    <div>
                        <label htmlFor="rePassword" className="">rePassword</label>

                        <div className="relative">
                            <input type="password" className="w-full rounded-lg bg-[#f8f9fa] border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter rePassword"
                                {...register('rePassword')}
                            />

                            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </span>
                        </div>
                        {/* error rePassword  */}
                        {errors.rePassword?.message && <p className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-3'>{errors.rePassword?.message}</p>}
                    </div >
                    {/* Phone  */}
                    <div>
                        <label htmlFor="phone" className="">phone</label>

                        <div className="relative">
                            <input type="tel" className="w-full rounded-lg bg-[#f8f9fa] border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter phone"
                                {...register('phone')}
                            />

                            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </span>
                        </div>
                        {/* error phone  */}
                        {errors.phone?.message && <p className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-3'>{errors.phone?.message}</p>}
                    </div >


                    <div className="flex items-center justify-center">
                        {!isLoading &&
                            <button type="submit"
                                className=" w-full rounded-lg bg-[#08ac0a] px-5 py-3 text-sm font-medium text-white">

                                <span> Sign up</span>

                            </button>
                        }
                        {
                            isLoading &&
                            <button type="button"
                                className=" w-full rounded-lg  px-5 py-3 text-sm font-medium text-white">


                                <Loading />
                            </button>
                        }
                    </div>
                </form >
            </div >


        </section >

    )
}

export default Register