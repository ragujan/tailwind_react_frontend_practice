import React from 'react'

function UserActivity() {
    return (
        <div className='flex flex-col px-4 py-2 bg-white grow '>
            {/*name details and options  */}
            <div className='flex flex-row justify-between pt-4'>
                <div className='flex flex-row items-center gap-x-5'>
                    <img src={require("./resources/images/human.png")} className='rounded-full w-14 h-14' alt="" />
                    <div className='flex flex-col ml-4'>
                        <h1 className='text-sm font-semibold'>Chrissy White </h1>
                        <span className='text-gray-400 text-[12px]'>chrissy@gmail.com</span>
                    </div>
                </div>
                <div className='flex flex-row items-center gap-x-4'>
                    <button className='px-4 font-semibold border border-gray-200 rounded-md'>Follow +</button>
                    <button className='px-4 font-semibold border border-gray-200 rounded-md'>Message +</button>
                </div>
            </div>
            {/* special note section */}
            <div className='pt-6 '>
                {/* div for showing inside a rounded border */}
                <h3 className='text-slate-500'>Private note </h3>
                <div className='border rounded-lg'>
                    <div>
                        <div className='flex flex-row items-center px-3 pb-3 mt-3 gap-x-10 specialNoteSectionIcons'>
                            <img src={require("./resources/images/bold.png")} alt="" srcset="" />
                            <img src={require("./resources/images/italic.png")} alt="" srcset="" />
                            <img src={require("./resources/images/hyperlink.png")} alt="" className='rotate-45' srcset="" />
                            <img src={require("./resources/images/underline.png")} alt="" srcset="" />
                            <img src={require("./resources/images/attach_file.png")} alt="" srcset="" className='rotate-90' />
                            <img src={require("./resources/images/list.png")} alt="" srcset="" />
                            <img src={require("./resources/images/alignment.png")} alt="" srcset="" />
                        </div>
                        <textarea name="" id="" cols="15" rows="5" className='bg-slate-100 w-full px-3 py-2 text-[12px] outline-none'></textarea>
                    </div>
                </div>
            </div>
            {/* contact and social  */}
            <div>

                <div className='flex flex-row items-center px-4 py-2 gap-x-5'>
                    <img src={require("./resources/images/email.png")} className='w-5 h-5' alt="" />
                    <span className='font-semibold text-[12px]'>ragjn@gmail.com</span>
                </div>
                <div className='flex flex-row items-center px-3 pt-4 pb-4 mt-3 border-t-2 gap-x-10 socialIcons border-slate-100'>
                    <img src={require("./resources/images/twitter.png")} alt="" srcset="" />
                    <img src={require("./resources/images/instagram.png")} alt="" srcset="" />
                    <img src={require("./resources/images/pinterest.png")} alt="" srcset="" />
                    <img src={require("./resources/images/facebook.png")} alt="" srcset="" />
                </div>
                <div className='flex flex-row items-center px-3 py-2 border-t-2 gap-x-5 border-slate-100'>
                    <img src={require("./resources/images/hyperlink.png")} className='w-4 h-4 rotate-45' alt="" />
                    <span className='text-[12px] font-bold'>robot.cc</span>
                </div>
            </div>
            {/* product listing  */}
            <div className='overflow-y-scroll h-72'>
                <table class="table-auto  ">
                    <thead className='text-left'>
                        <tr>
                            <th className='p-4'>Product</th>
                            <th className='p-4'>Price</th>
                            <th className='p-4'>Date</th>
                        </tr>
                    </thead>
                    <tbody className='' >


                        <tr>
                            <td className='p-4'>
                                <div className='flex flex-row gap-x-8'>
                                    <img src={require("./resources/images/cap.png")} className="w-14" alt="" />
                                    <div>

                                        <h4 className='font-semibold'>cap 001 playa 33</h4>
                                    </div>
                                </div>
                            </td>
                            <td className='p-4'>
                                <div className='p-1 bg-blue-400 rounded-md'>
                                    <h3>$45.00</h3>
                                </div>
                            </td>
                            <td className='p-4'>2023/05/21</td>
                        </tr>
                        <tr>
                            <td className='p-4'>
                                <div className='flex flex-row gap-x-8'>
                                    <img src={require("./resources/images/cap.png")} className="w-14" alt="" />
                                    <div>

                                        <h4 className='font-semibold'>cap 001 playa 33</h4>
                                    </div>
                                </div>
                            </td>
                            <td className='p-4'>
                                <div className='p-1 bg-blue-400 rounded-md'>
                                    <h3>$45.00</h3>
                                </div>
                            </td>
                            <td className='p-4'>2023/05/21</td>
                        </tr>
                        <tr>
                            <td className='p-4'>
                                <div className='flex flex-row gap-x-8'>
                                    <img src={require("./resources/images/cap.png")} className="w-14" alt="" />
                                    <div>

                                        <h4 className='font-semibold'>cap 001 playa 33</h4>
                                    </div>
                                </div>
                            </td>
                            <td className='p-4'>
                                <div className='p-1 bg-blue-400 rounded-md'>
                                    <h3>$45.00</h3>
                                </div>
                            </td>
                            <td className='p-4'>2023/05/21</td>
                        </tr>
                        <tr>
                            <td className='p-4'>
                                <div className='flex flex-row gap-x-8'>
                                    <img src={require("./resources/images/cap.png")} className="w-14" alt="" />
                                    <div>

                                        <h4 className='font-semibold'>cap 001 playa 33</h4>
                                    </div>
                                </div>
                            </td>
                            <td className='p-4'>
                                <div className='p-1 bg-blue-400 rounded-md'>
                                    <h3>$45.00</h3>
                                </div>
                            </td>
                            <td className='p-4'>2023/05/21</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UserActivity
