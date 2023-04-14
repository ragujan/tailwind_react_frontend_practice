import React from 'react'

function UserListCard() {
    return (
        <div className='flex flex-row items-center py-4 border-t-2 border-b-2 '>
            <input type="checkbox" className='w-5 h-5 border border-slate-500 rounded-[5px] appearance-none cursor-pointer focus:outline-none checked:bg-gray-500' />
            <img src={require("./resources/images/human.png")} alt="" className='object-cover w-10 h-10 ml-4 rounded-full' srcset="" />
            <div className='flex flex-col ml-4'>
                <h1 className='text-sm font-semibold'>Chrissy White </h1>
                <span className='text-gray-400 text-[12px]'>chrissy@gmail.com</span>
            </div>
        </div>
    )
}

export default UserListCard
