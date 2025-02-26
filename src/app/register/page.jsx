"use client";
import React from "react";
import Image from "next/image";
import { FaFacebook, FaGoogle, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import SignupImg from "../../assets/images/login/login.svg";
import { registerUser } from "../actions/auth/registerUser";
import SocialLogin from "../login/components/SocialLogin";

const Register = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    try {
        const response = await registerUser({ name, email, password });
        console.log("Registration Response:", response);
      } catch (error) {
        console.error("Error registering user:", error);
      }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="bg-white rounded-2xl shadow-lg flex flex-col md:flex-row w-full max-w-4xl">
        {/* Left Side Illustration */}
        <div className="flex flex-1 items-center justify-center p-6">
          <Image
            src={SignupImg}
            alt="Signup Illustration"
            width={300}
            height={300}
            className="w-auto h-auto"
          />
        </div>

        {/* Right Side Form */}
        <div className="flex-1 p-8">
          <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="w-full p-3 border rounded-lg focus:ring focus:ring-orange-400"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your email"
                className="w-full p-3 border rounded-lg focus:ring focus:ring-orange-400"
                required
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="Your password"
                className="w-full p-3 border rounded-lg focus:ring focus:ring-orange-400"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white p-3 rounded-lg hover:bg-orange-600"
            >
              Sign Up
            </button>
          </form>

          <div className="text-center my-4 text-gray-500">Or Sign Up with</div>

          {/* Social Media Login */}
          <SocialLogin></SocialLogin>

          <p className="text-center text-gray-600 mt-4">
            Already have an account?{" "}
            <Link href="/login" className="text-orange-500 font-semibold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
