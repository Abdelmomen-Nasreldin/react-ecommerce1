
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const loginFormSchema = z.object({
    email: z.string({required_error: "required"}).trim().email(),
    password: z.string({required_error: "required"}).trim().min(6)
})

const FormLogin = () => {
    const [apiErrorMsg, setApiErrorMsg] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
   const navigate =  useNavigate()

   
    type formLoginSchema = z.infer<typeof loginFormSchema>;
    const { register, handleSubmit, formState: { errors } } = useForm<formLoginSchema>({
        resolver: zodResolver(loginFormSchema)
    });

    const onSubmit: SubmitHandler<formLoginSchema> = async (data) => {
        setApiErrorMsg(null)
        setIsLoading(true)
        try {
            const response = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signin", data)
            console.log(response.data)
            setIsLoading(false)
            navigate('/')

        } catch (error) {
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
                    <h1 className="text-2xl font-bold sm:text-3xl">Sign in</h1>

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


                    <div className="flex items-center justify-center">
                        <button type="submit"
                            className=" w-full rounded-lg bg-[#08ac0a] px-5 py-3 text-sm font-medium text-white">
                            {!isLoading &&
                                <span> Sign in</span>
                            }
                            {
                                isLoading &&
                                <span>loading...</span>
                            }
                        </button>
                    </div>
                </form >
            </div >


        </section >

    )
}

export default FormLogin