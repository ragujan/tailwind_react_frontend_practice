import React, { useState } from 'react'

function SideBar() {
    const [customerArrowState, setCustomerArrowState] = useState(false);
    const [shopArrowState, setShopArrowState] = useState(false)
    return (
        <>
            <div class="bg-white w-72 px-5 py-5">

                <div>
                    <img src={require("./resources/images/logo.png")} class="w-[35px]" alt="" />
                </div>

                <div class="gap-y-2 mt-10 ml-7 text-gray-600">

                    <div class="flex flex-row items-center gap-x-4 py-3 cursor-pointer">

                        <img src={require("./resources/images/home.png")} class="w-5" alt="" />
                        <h4 class="text-sm">Home</h4>
                    </div>
                    <div class="flex flex-row items-center gap-x-4 py-3 cursor-pointer">
                        <img src={require("./resources/images/diamond.png")} class="w-5" alt="" />
                        <h4 class="text-sm">Products</h4>
                    </div>
                    <div class="flex flex-col   py-3 cursor-pointer ">
                        <div className='flex flex-row justify-between gap-x-4'>
                            <div className='flex flex-row gap-x-4'>
                                <img src={require("./resources/images/user_icon.png")} class="w-5" alt="" />

                                <h4 class="text-sm">Customer</h4>
                            </div>
                            <div class="flex flex-row justify-around items-center " />
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor"
                                onClick={() => { setCustomerArrowState(!customerArrowState) }}
                                class={customerArrowState ?
                                    "transition ease-in-out  -rotate-180 w-4 h-4  mr-5"
                                    :
                                    "transition ease-in-out  w-4 h-4  mr-5"}>
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                        <div className={
                            customerArrowState ?
                                'flex flex-col max-h-20   transistion duration-300 ' : 'max-h-0  transistion duration-300  overflow-hidden'
                        }>
                            <div className='py-2 ml-10'>
                                <h1 className='text-sm'>Overview</h1>
                            </div>
                            <div className='py-2 ml-10'>
                                <h1 className='text-sm'>Customer List</h1>
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-col   py-3 cursor-pointer ">
                        <div className='flex flex-row items-center justify-between gap-x-4'>
                            <div className='flex flex-row gap-x-4'>
                                <img src={require("./resources/images/shop.png")} class="w-5" alt="" />
                                <h4 class="text-sm">Shop</h4>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor"
                                onClick={() => { setShopArrowState(!shopArrowState) }}
                                class={shopArrowState ?
                                    "transition ease-in-out  -rotate-180 w-4 h-4  mr-5"
                                    :
                                    "transition ease-in-out  w-4 h-4  mr-5"}>
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                        <div className={
                            shopArrowState ?
                                'flex flex-col max-h-20   transistion duration-300 ' : 'max-h-0 transistion duration-300  overflow-hidden'
                        }>
                            <div className='py-2 ml-10'>
                                <h1 className='text-sm'>Overview</h1>
                            </div>
                            <div className='py-2 ml-10'>
                                <h1 className='text-sm'>Customer List</h1>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-row items-center gap-x-4 py-3 cursor-pointer">
                        <img src={require("./resources/images/sales.icon.jpg")} class="w-5" alt="" />
                        <div class="flex flexrow">
                            <h4 class="text-sm">Sales</h4>
                        </div>
                    </div>
                    <div class="flex flex-row items-center gap-x-4 py-3 cursor-pointer">
                        <img src={require("./resources/images/promote.png")} class="w-5" alt="" />
                        <h4 class="text-sm">Promote</h4>
                    </div>
                </div>

            </div>

        </>
    )
}

export default SideBar
