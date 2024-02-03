import React from 'react'
import './Header.css'
import { BusinessCenter, Chat, Home, Notifications, Search, SupervisorAccount } from '@mui/icons-material'
import HeaderOption from './HeaderOption'
import { useDispatch } from 'react-redux'
import { auth } from './firebase'
import { logout } from './features/userSlice'

function Header() {

  const dispatch = useDispatch();

  const logOutOfApp =() => {
    dispatch(logout())
    auth.signOut();
  }
  return (
    <div className='header'>
      

      <div className='header_left'>

        <img src='https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg' alt='logo' />
        

        <div className='header_search'>
            <Search />
            <input placeholder='Search' type='text' />

        </div>
        
      </div>

      <div className='header_right'>
        <HeaderOption Icon={Home} title="Home" />
        <HeaderOption Icon={SupervisorAccount} title="My Network" />
        <HeaderOption Icon={BusinessCenter} title="Jobs" />
        <HeaderOption Icon={Chat} title="Messaging" />
        <HeaderOption Icon={Notifications} title="Notifications" />
        <HeaderOption onClick={logOutOfApp} avatar={true} title="Me" />
      </div>

      



    </div>
  )
}

export default Header
