import React from 'react'
import BG from '../../asset/image/BG.png'
import { NavLink, Link } from "react-router-dom"
const SignIn = () => {
    return (
        <div>
            <section class="text-gray-600 body-font mx-auto relative">
                <div class="absolute inset-0 items-center">
                    <div class="">
                        <img src={BG} class="w-full" alt="" />
                    </div>
                </div>
                <form class="container py-36 mx-auto flex ">
                    <div
                        class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0 relative z-10 shadow-md mx-auto">
                        <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Đăng nhập</h2>
                        <div class="relative mb-4">
                            <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                            <input type="email" id="email" name="email"
                                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div class="relative mb-4">
                            <label for="message" class="leading-7 text-sm text-gray-600">Mật khẩu</label>
                            <input type="password" id="password" name="password"
                                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <button
                            class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg my-2">
                          Đăng nhập
                            </button>
                        <a href="/" class="text-indigo-600 text-center border-0 py-2 px-6 focus:outline-none hover:text-gray-400 rounded text-lg">Quên
                            mật khẩu</a>

                        <div>

                            <NavLink to="signup">
                                <p class="text-center pt-6"> Bạn chưa có tài khoản ?<a href='/' class="text-[#8486ff]">Đăng ký</a> </p>
                            </NavLink>
                        </div>
                    </div>

                </form>

            </section>
        </div>
    )
}

export default SignIn;
