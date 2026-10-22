'use client'
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";



const RegisterPage = () => {

    const {register , handleSubmit , formState: { errors } , watch} = useForm()

    const handleSubmitRegister = (data) => {
      const { name, photoUrl, email, password } = data;
      console.log("Form submitted", { name, photoUrl, email, password });
    };
   
  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100">
      <div className="p-4 rounded-xl bg-white">
        <h2 className="font-bold text-2xl text-center mb-3">
          Register for an account
        </h2>
        <form className="space-y-4 " onSubmit={handleSubmit(handleSubmitRegister)}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend font-bold">Name</legend>
            <input  type="text" className="input" placeholder="Type your name" {...register("name", { required: true })} />
            {errors.name && <span className="text-red-500">Name is required</span>}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend font-bold">Photo Url</legend>
            <input  type="text" className="input" placeholder="Type your photo url" {...register("photoUrl", { required: true })} />
            {errors.photoUrl && <span className="text-red-500">Photo URL is required</span>}
          </fieldset>
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
          <button className="btn w-full bg-slate-800 text-white">Register</button>
        </form>
        
      </div>
    </div>
  );
};

export default RegisterPage;
