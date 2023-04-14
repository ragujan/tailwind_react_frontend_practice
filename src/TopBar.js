import React from 'react'

function TopBar() {
    return (
        <div className='w-full p-5 bg-white rounded-md '>
            <div className='flex flex-row justify-between '>
                {/* input and search icons */}
                <div className='flex flex-row items-center px-2 gap-x-6 bg-slate-100'>
                    <img src={require("./resources/images/search_icon.png")} className='w-4 h-4 cursor-pointer ' alt="" />
                    <input type="text" placeholder='Search or type a comment' className='px-2 py-1 rounded-md outline-none bg-slate-100' />
                </div>
                {/* button and other icon options */}
                <div className='flex flex-row items-center gap-x-8'>
                    <button className='flex flex-row items-center justify-center px-6 py-2 text-white bg-blue-400 rounded-md'><p>+</p>Create</button>
                    <img src={require("./resources/images/message.png")} className='w-6 h-6' alt="" />
                    <img src={require("./resources/images/bell_icon.png")} className='w-5 h-5' alt="" />
                    <img src={require("./resources/images/human.png")} alt="" className='rounded-full w-9 h-9' />
                </div>
            </div>
        </div>
    )
}

export default TopBar
