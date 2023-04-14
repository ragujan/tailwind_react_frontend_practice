import React from 'react'
import TopBar from './TopBar'
import UserList from './UserList'
import UserActivity from './UserActivity'

function Content() {
  return (
    <div className='w-full px-4'>
      <TopBar/> 
      <div className='flex flex-row py-4 gap-x-3'>
        <UserList/>
        <UserActivity/>
      </div>
    </div>
  )
}

export default Content
