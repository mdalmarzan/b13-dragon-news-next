'use client'
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";



const LoginPage = () => {

    const {register , handleSubmit , formState: { errors } , watch} = useForm()

    const handleSubmite = (data) => {
      console.log("Form submitted", data);
    };
    console.log(watch("email")); // Watch the email field for changes
    console.log(watch("password")); // Watch the password field for changes
  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100">
      <div className="p-4 rounded-xl bg-white">
        <h2 className="font-bold text-2xl text-center mb-3">
          Login to your account
        </h2>
        <form className="space-y-4 " onSubmit={handleSubmit(handleSubmite)}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend font-bold">Email</legend>
            <input  type="email" className="input" placeholder="Type your email" {...register("email" , { required: true })} />
            {errors.email && <span className="text-red-500">Email is required</span>}
          
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend font-bold">Password</legend>
            <input  type="password" className="input" placeholder="Type your password" {...register("password", { required: true })} />
            {errors.password && <span className="text-red-500">Password is required</span>}
          </fieldset>
          <button className="btn w-full bg-slate-800 text-white">Login</button>
        </form>
        <p className="mt-4 text-center">
          Don't have an account? <Link href={'/register'} className="text-red-500 hover:underline ">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
