import React from 'react'

const Info = () => {
    return (
        <div>
            <div>
                <div class="border-b-2 container mx-auto py-2">
                    <h3 class="text-blue-500">Hồ sơ cá nhân</h3>
                </div>
            </div>
            <div class="grid grid-rows-3 grid-flow-col gap-4 container mx-auto pt-4">

                <div class="row-span-3 ...">
                    <div>
                        <div class="h-full p-3 space-y-2 w-60 bg-white text-gray-800">
                            <div class="flex items-center p-2 space-x-4">
                                <div>
                                    <h2 class="text-lg font-semibold">VAN DINH HUY</h2>
                                    <span class="flex items-center space-x-1">
                                        <a href="#" class="text-sm py-1 hover:underline text-gray-600">
                                            Fmarket ID: 007F9025834269</a>
                                    </span>
                                    <span class="flex items-center space-x-1">
                                        <button class="bg-gray-200 hover:bg-blue-700 text-white font-bold  rounded-full">
                                            <a href="#" class="text-xs hover:underline text-gray-600 px-10">
                                                Chưa hoàn tất hồ sơ</a>
                                        </button>
                                    </span>
                                </div>
                            </div>
                            <div class="divide-y border rounded-lg">
                                <ul class="pt-2 pb-4 space-y-1 text-sm">
                                    <li class=" text-gray-900 border-b">
                                        <a href="#" class="flex items-center p-2 space-x-3 rounded-md">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                                fill="currentColor">
                                                <path fill-rule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                            <span>Thông tin cá nhân</span>
                                        </a>
                                    </li>
                                    <li class="border-b">
                                        <a href="#" class="flex items-center p-2 space-x-3 rounded-md">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                                fill="currentColor">
                                                <path fill-rule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                            <span>Giấy tờ tùy thân</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="flex items-center p-2 space-x-3 rounded-md">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                                fill="currentColor">
                                                <path fill-rule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                            <span>Tài khoản ngân hàng</span>
                                        </a>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>

                <div class="row-span-2 col-span-2 ...">
                    <div class="block p-6 rounded-lg shadow-lg bg-white">
                        <form>
                            <div class=" pb-4">
                                <div class="flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <h2 class="text-2xl">Thông tin cá nhân</h2>
                                </div>
                                <div>
                                    <p class="px-10">Quý nhà đầu tư vui lòng điền thông tin chính xác trên giấy tờ tùy thân.
                                        Thông này sẽ là cơ sở để xác thực thông tin khi đăng ký tài khoản giao dịch Quỹ</p>
                                </div>


                            </div>
                            <div class="grid grid-cols-2 gap-4">
                                <div class="form-group mb-6 mr-4">
                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text">Username</span>
                                        </label>
                                        <input type="text" placeholder="username" class="input input-bordered" />
                                    </div>


                                </div>
                                <div class="form-group mb-6 pr-4">
                                    <p class="font-medium py-2">Ngày sinh (dd/mm/yyyy)*</p>
                                    <div class="flex">
                                        <label for="">
                                            <input type="text" class="form-control block w-20 px-3
                        py-1.5 text-base, text-center font-normal text-gray-700 bg-white bg-clip-padding border border-solid
                         border-gray-300 rounded transition ease-in-out m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                placeholder="Ngày" />

                                        </label>
                                        <label for="">
                                            <input type="text" class="form-control text-center
                        block
                        w-20
                        mx-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                placeholder="Tháng" />

                                        </label>
                                        <label for="">
                                            <input type="text" class="form-control text-center
                        block
                        w-20
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                placeholder="Năm" />

                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="grid grid-cols-2 gap-4">
                                    <div class="form-group mb-6">
                                        <p class="font-medium py-2">Giới tính</p>
                                        <label class="inline-flex items-center px-2">
                                            <input type="radio" class="form-radio h-6 w-6" name="radio-sizes" value="2" checked />
                                            <span class="ml-3 mr-3 text-lg">Nam</span>
                                            <input type="radio" class="form-radio h-6 w-6" name="radio-sizes" value="2" />
                                            <span class="ml-3 text-lg">Nữ</span>
                                        </label>
                                    </div>
                                    <div class="form-group mb-6 mr-4">
                                        <p class="font-medium py-2">Họ và tên đầy đủ</p>
                                        <input type="text" class="form-control
                        block
                        w-full
                        px-4
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                            id="exampleInput123" aria-describedby="emailHelp123" placeholder="First name" />
                                    </div>
                                </div>
                                <div class="grid grid-cols-2 gap-4">
                                    <div class="form-group mb-6">
                                        <p class="font-medium py-2">Số điện thoại</p>
                                        <div class="flex">
                                            <input type="text" class="form-control
                        block
                        px-4 mx-4 w-20
                        py-1.5
                        text-base
                        font-normal
                        text-black
                        bg-gray-200 bg-clip-padding
                        border border-solid border-gray-300
                        rounded box-content
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                placeholder="VN (+84)" disabled />
                                            <input type="text" class="form-control
                        block
                        w-full
                        px-4
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                placeholder="09027467483" disabled />
                                        </div>

                                    </div>
                                    <div class="form-group mb-6 mr-4">
                                        <p class="font-medium py-2">Email</p>
                                        <input type="text" class="form-control
                        block
                        w-full
                        px-4
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                            id="exampleInput123" aria-describedby="emailHelp123"
                                            placeholder="Contact@thebank.gmail.com" disabled />
                                    </div>
                                </div>

                                <div class="form-group mb-6">
                                    <p class="font-medium py-2">Địa chỉ liên hệ</p>
                                    <input type="text" class="form-control block
                      w-full
                      px-3
                      py-1.5
                      text-base
                      font-normal
                      text-gray-700
                      bg-white bg-clip-padding
                      border border-solid border-gray-300
                      rounded
                      transition
                      ease-in-out
                      m-0
                      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Vui lòng cập nhập thông tin" />
                                </div>
                                <div class="form-group mb-6">
                                    <div class="flex">
                                        <p class="font-medium py-2">Địa chỉ thường trú </p>
                                        <p class="pr-2">*</p>
                                        <p class="text-blue-500 font-medium"><sup>( Giống địa chỉ liên hệ )</sup></p>
                                    </div>

                                    <input type="text" class="form-control block
                      w-full
                      px-3
                      py-1.5
                      text-base
                      font-normal
                      text-gray-700
                      bg-white bg-clip-padding
                      border border-solid border-gray-300
                      rounded
                      transition
                      ease-in-out
                      m-0
                      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Vui lòng cập nhập thông tin" />
                                </div>
                                <div class="grid grid-cols-2 gap-4">
                                    <div class="form-group mb-6 mr-4">
                                        <p class="font-medium py-2">Tỉnh / Thành phố</p>
                                        <input type="text" class="form-control
                        block
                        w-full
                        px-4
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                            id="exampleInput123" aria-describedby="emailHelp123"
                                            placeholder="Contact@thebank.gmail.com" disabled />
                                    </div>
                                    <div class="form-group mb-6 mr-4 pt-10">
                                        <div class="flex">
                                            <button type="text" class="form-control
                                    block
                                    py-1.5
                                    text-base
                                    font-normal
                                    text-gray-700
                                    bg-blue-400 bg-clip-padding
                                    border border-solid border-gray-300
                                    rounded
                                    transition
                                    ease-in-out
                                    m-0
                                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mr-4"
                                                id="exampleInput123" aria-describedby="emailHelp123"
                                                placeholder="Contact@thebank.gmail.com"> <a href="" class="px-8 my-3">Xác
                                                    nhận</a></button>
                                            <button type="text" class="form-control
                                    block
                                    py-1.5
                                    text-base
                                    font-normal
                                    text-gray-700
                                    bg-gray-300 bg-clip-padding
                                    border border-solid border-gray-300
                                    rounded
                                    transition
                                    ease-in-out
                                    m-0
                                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                id="exampleInput123" aria-describedby="emailHelp123"
                                                placeholder="Contact@thebank.gmail.com"> <a href="" class="px-8 my-3">Đặt
                                                    lại</a></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info
