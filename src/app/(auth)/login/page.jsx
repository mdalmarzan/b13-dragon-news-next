"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye } from "react-icons/fa";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const [isShow, setIsShow] = useState(false);

  const handleSubmite = async (data) => {
    const { email, password } = data;

    const { data: res, error } = await authClient.signIn.email({
      email: email, // required, The email address of the user.
      password: password, // required, The password of the user. It should be at least 8 characters long and max 128 by default.
      rememberMe: true, // If false, the user will be signed out when the browser is closed. (optional) (default: true)
      callbackURL: "/", // An optional URL to redirect to after the user signs in. (optional)
    });
    console.log(res , error);
    
  };
 
  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100">
      <div className="p-4 rounded-xl bg-white">
        <h2 className="font-bold text-2xl text-center mb-3">
          Login to your account
        </h2>
        <form className="space-y-4 " onSubmit={handleSubmit(handleSubmite)}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend font-bold">Email</legend>
            <input
              type="email"
              className="input"
              placeholder="Type your email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-500">Email is required</span>
            )}
          </fieldset>
          <fieldset className="fieldset relative">
            <legend className="fieldset-legend font-bold">Password</legend>
            <input
              type={isShow ? "text" : "password"}
              className="input"
              placeholder="Type your password"
              {...register("password", { required: true })}
            />
            <span className="absolute right-2 top-4.5">
           {isShow ? (
                <FaEye onClick={() => setIsShow(!isShow)}/>
              ) : (
                <FaEye onClick={() => setIsShow(!isShow)}/>
              )}

              </span>
            {errors.password && (
              <span className="text-red-500">Password is required</span>
            )}
          </fieldset>
          <button className="btn w-full bg-slate-800 text-white">Login</button>
        </form>
        <p className="mt-4 text-center">
          Don't have an account?{" "}
          <Link href={"/register"} className="text-red-500 hover:underline ">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
