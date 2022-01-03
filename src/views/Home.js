import React from "react";
import ImgApp from '../asset/image/Thebank_app.png';
import IconRight from '../asset/image/img-right.png';
import Facebook from '../asset/image/facebook.png';
import Bg from '../asset/image/bground.png'
import logo from '../asset/image/logo_thebankw.png'
import BgUrl from '../asset/image/bgUrl.png'
import Iphone from '../asset/image/invest-iphone.png'

export default function ViewPage() {
    return (
        <>

            {/* Banner */}

            <div class="hero bg-base-100">
                <div class="flex-col hero-content lg:flex-row-reverse px-12">
                    <img src={ImgApp} class="max-w-lg rounded-lg " alt="" />
                    <div>
                        <h1 class="mb-5 text-5xl font-bold leading-normal sm:text-center lg:text-left">
                            Đầu tư thông minh, hiệu quả dành cho
                            <span class="mb-5 pl-4 text-5xl font-bold underline decoration-4 text-[#0e6fff]">
                                Nhà đầu tư
                            </span>
                        </h1>
                        <p class="mb-5 indent-8 pr-12 sm:text-center lg:text-left">
                            Nền tảng duy nhất tập trung các quỹ mở hàng đầu Việt Nam, người mua trực tiếp sở hữu chứng chỉ quỹ được phát hành bởi các quỹ đầu tư uy tín.
                        </p>
                        <div>
                            <div class="sm:text-center lg:text-left">
                                <button class="btn text-gray-700 lg:btn-md xl:btn-lg bg-base-300 border-none">ĐĂNG KÝ MIỄN PHÍ</button>
                            </div>
                            <div class="flex py-4 ">
                                <div class="sm:mx-auto lg:mx-0">
                                    <button class="btn mr-5 ">neutral</button>
                                    <button class="btn ">neutral</button>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* content */}

            <div class="hero bg-base-200">
                <div class="text-center hero-content relative">
                    <div class="max-w-xl py-5">

                        <h1 class="mb-5 text-5xl font-bold text-base-100">
                            Hiệu suất đầu tư quỹ mở
                        </h1>
                        <p class="mb-5 text-base-100">
                            Nhiều sản phẩm đầu tư lợi tức cao được phát hành bởi các Tổ chức uy tín hàng đầu Việt Nam, giúp mọi người tiết kiệm & đầu tư hiệu quả hơn.
                        </p>
                        <button class="btn btn-primary bg-[#00bd56] border-none">Tìm hiểu thêm</button>
                    </div>

                </div>
            </div>

            {/* table */}

            <div class="hero bg-base-200 h-full drop-shadow-md mb-48">
                <div class=" mx-auto container bg-base-100 rounded-lg -mb-48 lg:w-[1250px] sm:w-[800px]">
                    <div class="overflow-x-auto ">
                        <table class="table w-full ">
                            <thead>
                                <tr class="border-b-2">
                                    <th class="bg-base-100 border-r text-bottom">Tên CCQ</th>
                                    <th class="bg-base-100 border-r">Tổ chức phát hành</th>
                                    <th class="bg-base-100 border-r">Loại quỹ</th>
                                    <th class="bg-base-100 border-r">Giá gần nhất (VND)</th>
                                    <th>
                                        <th></th>
                                        <th class="bg-base-100 text-center">Tên CCQ</th>
                                        <th class="bg-base-100 text-center">Tên CCQ</th>
                                        <th class="bg-base-100 text-center">Tên CCQ</th>
                                    </th>


                                </tr>
                            </thead>
                            <tbody>
                                <tr class="border-b-2">
                                    <th>
                                        <label for="my-modal-2" >open modal</label>
                                    </th>
                                    <td>Cy Ganderton</td>
                                    <td>Quality Control Specialist</td>
                                    <td>Blue</td>
                                    <td class="text-center ">Blue</td>
                                    <td class="text-center ">Blue</td>
                                    <td class="text-center ">Blue</td>
                                    <td class="text-center ">Blue</td>
                                </tr>
                                <tr class="border-b-2">
                                    <th>
                                        <label for="my-modal-2" >open modal</label>
                                    </th>
                                    <td>Cy Ganderton</td>
                                    <td>Quality Control Specialist</td>
                                    <td>Blue</td>
                                    <td class="text-center ">Blue</td>
                                    <td class="text-center ">Blue</td>
                                    <td class="text-center ">Blue</td>
                                    <td class="text-center ">Blue</td>
                                </tr>
                                <tr class="border-b-2">
                                    <th>
                                        <label for="my-modal-2" >open modal</label>
                                    </th>
                                    <td>Cy Ganderton</td>
                                    <td>Quality Control Specialist</td>
                                    <td>Blue</td>
                                    <td class="text-center ">Blue</td>
                                    <td class="text-center ">Blue</td>
                                    <td class="text-center ">Blue</td>
                                    <td class="text-center ">Blue</td>
                                </tr>
                                <tr class="border-b-2">
                                    <th>
                                        <label for="my-modal-2" >open modal</label>
                                    </th>
                                    <td>Cy Ganderton</td>
                                    <td>Quality Control Specialist</td>
                                    <td>Blue</td>
                                    <td class="text-center ">Blue</td>
                                    <td class="text-center ">Blue</td>
                                    <td class="text-center ">Blue</td>
                                    <td class="text-center ">Blue</td>
                                </tr>
                                <tr class="border-b-2">
                                    <th>
                                        <label for="my-modal-2" >open modal</label>
                                    </th>
                                    <td>Cy Ganderton</td>
                                    <td>Quality Control Specialist</td>
                                    <td>Blue</td>
                                    <td class="text-center ">Blue</td>
                                    <td class="text-center ">Blue</td>
                                    <td class="text-center ">Blue</td>
                                    <td class="text-center ">Blue</td>
                                </tr>
                                <tr class="border-b-2">
                                    <th>
                                        <label for="my-modal-2" >open modal</label>
                                    </th>
                                    <td>Cy Ganderton</td>
                                    <td>Quality Control Specialist</td>
                                    <td>Blue</td>
                                    <td class="text-center ">Blue</td>
                                    <td class="text-center ">Blue</td>
                                    <td class="text-center ">Blue</td>
                                    <td class="text-center ">Blue</td>
                                </tr>
                                <tr class="border-b-2">
                                    <th>
                                        <label for="my-modal-2" >open modal</label>
                                    </th>
                                    <td>Cy Ganderton</td>
                                    <td>Quality Control Specialist</td>
                                    <td>Blue</td>
                                    <td class="text-center ">Blue</td>
                                    <td class="text-center ">Blue</td>
                                    <td class="text-center ">Blue</td>
                                    <td class="text-center ">Blue</td>
                                </tr>
                                <tr class="border-b-2">
                                    <th>
                                        <label for="my-modal-2" >open modal</label>
                                    </th>
                                    <td>Cy Ganderton</td>
                                    <td>Quality Control Specialist</td>
                                    <td>Blue</td>
                                    <td class="text-center ">Blue</td>
                                    <td class="text-center ">Blue</td>
                                    <td class="text-center ">Blue</td>
                                    <td class="text-center ">Blue</td>
                                </tr>
                                <tr class="border-b-2">
                                    <th>
                                        <label for="my-modal-2" >open modal</label>
                                    </th>
                                    <td>Cy Ganderton</td>
                                    <td>Quality Control Specialist</td>
                                    <td>Blue</td>
                                    <td class="text-center ">Blue</td>
                                    <td class="text-center ">Blue</td>
                                    <td class="text-center ">Blue</td>
                                    <td class="text-center ">Blue</td>
                                </tr>
                                <tr class="border-b-2">
                                    <th>
                                        <label for="my-modal-2" >open modal</label>
                                    </th>
                                    <td>Cy Ganderton</td>
                                    <td>Quality Control Specialist</td>
                                    <td>Blue</td>
                                    <td class="text-center ">Blue</td>
                                    <td class="text-center ">Blue</td>
                                    <td class="text-center ">Blue</td>
                                    <td class="text-center ">Blue</td>
                                </tr>
                            </tbody>

                        </table>
                        <div class="text-center py-4">
                            <button class="btn btn-outline btn-secondary">Xem tất cả</button>
                        </div>
                    </div>

                </div>
            </div>


            {/* bg */}
            <div className="pt-20 ">
                <div className="hero bg-[#f7f7f8]">
                    <div class="p-0">
                        <img src={BgUrl} className="w-full h-full " alt="" />
                    </div>

                    <div className="flex-col hero-content p-0 lg:flex-row-reverse w-full ">
                        <img src={Iphone} className=" h-full pt-4" alt="" />
                        <div>
                            <h1 className="mb-5 text-5xl font-bold lg:text-left sm:text-center">
                                Đầu tư linh hoạt
                            </h1>
                            <p className="mb-5 col-span-2 lg:text-left sm:text-center">
                                Đầu tư chứng chỉ quỹ chưa bao giờ dễ dàng hơn. Tại Fmarket, bạn có thể bắt đầu hành trình <br /> đầu tư vào các quỹ mở hàng đầu tại Việt Nam với số vốn phù hợp với khả năng của mình một<br /> cách linh hoạt và chủ động.
                            </p>
                            <div className="sm:text-center lg:text-left">
                                <button className="btn btn-primary sm:justify-center">Get Started</button>
                            </div>

                        </div></div>

                </div>
            </div>

            {/* group */}

            <div className="hero bg-[#0368ff] container mx-auto w-[1200px] rounded-xl my-24">
                <h1 className="text-[12rem] font-black opacity-10 text-base-100">
                    The bank
                </h1>
                <div className="text-center hero-content">
                    <div className="max-w-lg py-12">
                        <h1 className="mb-5 text-4xl font-bold uppercase text-base-100">
                            Cộng đồng TheBank
                        </h1>
                        <p className="mb-5 max-w-sm text-base-100">
                            Nơi trao đổi, thảo luận về các sản phẩm đầu tư tài chính chuyên nghiệp
                        </p>
                        <div classname="flex ">
                            <button className="btn rounded-full bg-base-300 border-none">
                                <img src={Facebook} width={20} alt="" />
                                <p className="px-2 text-black">Tham gia ngay</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            {/* modal */}
            <div >
                <input type="checkbox" id="my-modal-2" class="modal-toggle" />
                <div class="modal">
                    <div class="modal-box">
                        <p>Enim dolorem dolorum omnis atque necessitatibus. Consequatur aut adipisci qui iusto illo eaque. Consequatur repudiandae et. Nulla ea quasi eligendi. Saepe velit autem minima.</p>
                        <div class="modal-action">
                            <label for="my-modal-2" class="btn btn-primary">Accept</label>
                            <label for="my-modal-2" class="btn">Close</label>
                        </div>
                    </div>
                </div>

            </div>


        </>
    )
}