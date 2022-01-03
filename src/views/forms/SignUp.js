import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import BG from '../../asset/image/BG.png'
const SignUp = () => {
    return (
        <div>
            <section class="text-gray-600 body-font mx-auto relative">
                <div class="absolute inset-0 items-center">
                    <div class="">
                        <img src={BG} class="w-full" alt="" />

                    </div>

                </div>

                <form class="container py-36 mx-auto flex">

                    <div
                        class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0 relative z-10 shadow-md mx-auto">
                        <h2 class="text-gray-900 text-3xl mb-6 font-medium title-font text-center">Đăng Ký</h2>

                        <div class="relative mb-4">
                            <label for="email" class="leading-7 text-sm text-gray-600 font-medium">Họ tên đầy đủ</label>
                            <input type="text"
                                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out uppercase italic " placeholder="Họ tên đầy đủ trên giấy tờ tùy thân " />
                        </div>
                        <div class="relative mb-4">
                            <label for="email" class="leading-7 text-sm text-gray-600 font-medium">Email</label>
                            <input type="email" id="email" name="email"
                                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out italic" placeholder='Vui lòng nhập Email của bạn' />
                        </div>
                        <div class="relative mb-4">
                            <div class=" pt-4">
                                <div class="form-group mb-6">
                                    <label class="inline-flex items-center px-2">
                                        <input type="radio" class="form-radio h-6 w-6" name="radio-sizes" value="2" checked />
                                        <span class="ml-3 mr-3 text-sm font-bold">Nhận tin nhắn qua SMS</span>
                                        <input type="radio" class="form-radio h-6 w-6 ml-4" name="radio-sizes" value="2" />
                                        <span class="ml-3 text-sm font-bold">Nhận tin nhắn qua Zalo</span>
                                    </label>
                                </div>
                            </div>
                            {/* phone */}
                            <div class="">

                                <div class="form-group mb-6">
                                    <p class="font-medium py-2">Số điện thoại</p>
                                    <div class="flex">
                                        <input type="text" class="form-control block px-2 mr-4 w-20 py-1.5 rounded box-content ease-in-out
                        text-base font-normal text-black bg-clip-padding border border-solid border-gray-300 transition
                        focus:text-gray-700 m-0 focus:bg-white focus:border-blue-600 focus:outline-none"
                                            placeholder="VN (+84)" disabled />
                                        <input type="number" class="form-control border border-solid border-gray-300
                        block w-full px-4 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding rounded transition
                        ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                            placeholder="SĐT nhận OTP SMS" />
                                    </div>
                                </div>
                            </div>
                            <div class="flex">
                                <input type="checkbox" class="appearance-none indeterminate:bg-gray-300 mx-2 mt-1" />
                                <p class="font-medium">
                                    Bằng cách đăng ký, bạn đồng ý với 
                                    <a href='/' class="px-2 text-[#296eff]">
                                        Điều khoản sử dụng
                                    </a>
                                    và
                                    <a href='/' class="px-2 text-[#296eff]">
                                        Chính sách quyền riêng tư
                                    </a>
                                    của Thebank.
                                </p>
                            </div>

                        </div>
                       
                        <button
                            class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg my-2"><NavLink to="/auth/signup">Tiếp tục
                                 </NavLink></button>
                        <a href="/" class="text-indigo-600 text-center border-0 py-2 px-6 focus:outline-none hover:text-gray-400 rounded text-lg">Quên
                            mật khẩu</a>

                            <NavLink to="signup">
                                <p class="text-center pt-6"> Bạn đã có tài khoản ?<a href='/' class="text-[#8486ff]">Đăng nhập</a> </p>
                            </NavLink>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default SignUp
