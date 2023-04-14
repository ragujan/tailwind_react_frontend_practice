import React from 'react'
import UserListCard from './UserListCard'

function UserList() {
  return (
    <div className='py-3 pl-3 pr-10 bg-white rounded-md'>
      <div className='flex flex-col'>
        {/*header contains titles  */}
        <div className='relative flex flex-row items-center pt-2 pb-5 gap-x-4'>
          <input type="checkbox" className='relative w-5 h-5 border rounded-sm appearance-none border-slate-500 focus:outline-none checked:bg-gray-500' />
          <h1>Name</h1>
        </div>
        {/* user name list */}
        <UserListCard/>
        <UserListCard/>
        <UserListCard/>
        <UserListCard/>
      </div>
    </div>
  )
}

export default UserList
