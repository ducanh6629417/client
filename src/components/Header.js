import React from "react";
import Logo from '../asset/image/logo_thebankw.png'
import { NavLink, Link } from "react-router-dom";

export default function Header(props) {
    return (
        <>
            <div className="header-2 ">
                <nav className="bg-base-200 py-2 md:py-4 ">
                    <div className="container px-4 mx-auto md:flex md:items-center w-[1250px]">
                        <div className="flex">
                            <button className=" py-1 rounded text-white opacity-50 hover:opacity-75 md:hidden" id="navbar-toggle">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                                </svg>
                            </button>
                            <div className="flex justify-between mx-auto">
                                <NavLink to="/">

                                    <img src={Logo} width={150} alt="" />
                                </NavLink>

                            </div>

                        </div>

                        <div className="hidden md:flex flex-col md:flex-row mt-3 px-4 md:mt-0" id="navbar-collapse">

                            <a href="/" className="p-2 lg:px-2 md:mx-2 text-base-100 text-xl font-medium transition-colors duration-300">Kiến thức</a>

                            <a href="/" className="p-2 lg:px-2 md:mx-2 text-base-100 text-xl font-medium transition-colors duration-300">
                                <Link to='our-story'>Về chúng tôi </Link>
                            </a>
                            <a href="/" className="p-2 lg:px-2 md:mx-2 text-base-100 text-xl font-medium transition-colors duration-300">Liên hệ</a>

                            <div className="md:hidden py-4">
                                <a href="/" className="p-2 px-8 lg:px-4 md:mx-2 text-lg font-medium text-base-100 text-center border border-solid border-base-100 rounded-full hover:text-gray-700 transition-colors duration-300 mt-1 md:mt-0 md:ml-1">Signin</a>
                                <a href="/" className="p-2 px-8 mx-4 lg:px-4 md:mx-2 text-lg font-medium text-base-100 text-center border border-solid border-base-100 rounded-full hover:text-gray-700 transition-colors duration-300 mt-1 md:mt-0 md:ml-1">Signup</a>
                            </div>

                        </div>
                        <div className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0" id="navbar-collapse">

                            <a href="/" className="p-2 lg:px-4 md:mx-2 text-lg font-medium text-base-100 text-center border border-transparent rounded hover:text-gray-700  transition-colors duration-300">
                                <Link to="signin">Sign in</Link>
                            </a>
                            <a href="/" className="p-2 lg:px-4 md:mx-2 text-lg font-medium text-base-100 text-center border border-solid rounded-full hover:text-gray-700 transition-colors duration-300 mt-1 md:mt-0 md:ml-1">
                                <Link to="signup">Sign up</Link>
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </>

    )
}