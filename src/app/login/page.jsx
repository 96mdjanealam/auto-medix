"use client";
import Image from "next/image";
import React from "react";
import RegistrationImg from "../../assets/images/login/login.svg";
import { FaFacebook, FaGoogle, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { signIn } from "next-auth/react";

const Login = () => {

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      await signIn("credentials", { email, password, callbackUrl: "/" });
    } catch (error) {
      console.log(error);
      alert("authentication error");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="bg-white rounded-2xl shadow-lg flex flex-col md:flex-row w-full max-w-4xl">
        {/* Left Side Illustration */}
        <div className="flex flex-1 items-center justify-center p-6">
          <Image
            src={RegistrationImg}
            alt="Signup Illustration"
            width={300}
            height={300}
            className="w-auto h-auto"
          />
        </div>

        {/* Right Side Form */}
        <div className="flex-1 p-8">
          <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                name="email"
                type="email"
                placeholder="Your email"
                className="w-full p-3 border rounded-lg focus:ring focus:ring-orange-400"
              />
            </div>
            <div>
              <input
                name="password"
                type="password"
                placeholder="Your password"
                className="w-full p-3 border rounded-lg focus:ring focus:ring-orange-400"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white p-3 rounded-lg hover:bg-orange-600"
            >
              Login
            </button>
          </form>

          <div className="text-center my-4 text-gray-500">Or Login with</div>

          {/* Social Media Login */}
          <div className="flex justify-center space-x-4 text-xl">
            <button className="p-2 bg-gray-200 rounded-full">
              <FaFacebook></FaFacebook>
            </button>
            <button className="p-2 bg-gray-200 rounded-full">
              <FaLinkedin></FaLinkedin>
            </button>
            <button className="p-2 bg-gray-200 rounded-full">
              <FaGoogle></FaGoogle>
            </button>
          </div>

          <p className="text-center text-gray-600 mt-4">
            New to this site?{" "}
            <Link href="/register" className="text-orange-500 font-semibold">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
