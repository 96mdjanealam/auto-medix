"use client"
import Image from "next/image";
import React from "react";
import logo from "../assets/logo.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  
  const navMenu = (
    <>
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      <li>
        <Link href={"/services"}>Services</Link>
      </li>
      <li>
        <Link href={"/contact"}>Contact</Link>
      </li>
      <li>
        <Link href={"/blogs"}>Blogs</Link>
      </li>
      <li>
        <Link href={"/about"}>About</Link>
      </li>
    </>
  );

  return (
    <div className="bg-base-100">
      <div className="w-11/12 navbar mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navMenu}
            </ul>
          </div>
          <Link href={"/"} className="ml-2 md:ml-0">
            <figure className="w-20">
              <Image
                src={logo}
                height={87}
                width={107}
                alt="logo"
                className="object-contain"
              ></Image>
            </figure>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navMenu}</ul>
        </div>

        <div className="navbar-end">
          <div className="flex gap-2">
            {pathname.includes("login")?<Link href={"/register"}>
              <button className="btn btn-sm">Register</button>
            </Link>:<Link href={"/login"}>
              <button className="btn btn-sm">Login</button>
            </Link>}
          </div>
          <a className="btn outline outline-2 outline-gray-300 ml-2">
            Appointment
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
