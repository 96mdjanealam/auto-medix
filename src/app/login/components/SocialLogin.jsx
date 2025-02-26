import { signIn } from "next-auth/react";
import React from "react";
import { FaFacebook, FaGithub, FaGoogle, FaLinkedin } from "react-icons/fa";

const SocialLogin = () => {
  const handleSocialLogin = async (providerName) => {
    console.log("social Login", providerName);
    const result = await signIn(providerName, { redirect: false });
    console.log(result);
  };

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
