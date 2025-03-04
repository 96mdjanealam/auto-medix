"use client"
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Router } from "next/router";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { FaFacebook, FaGithub, FaGoogle, FaLinkedin } from "react-icons/fa";

const SocialLogin = () => {
  const session = useSession();
  const router = useRouter()

  const handleSocialLogin = (providerName) => {
    signIn(providerName);
  };

  useEffect(()=>{
    if (session?.status == "authenticated"){
      router.push("/")
      toast("successfully logged in!")
    }
  },[session?.status])

  return (
    <div className="flex justify-center text-xl">
      <button
        onClick={() => handleSocialLogin("google")}
        className="p-2 bg-gray-200 rounded-full"
      >
        <FaGoogle></FaGoogle>
      </button>
    </div>
  );
};

export default SocialLogin;
