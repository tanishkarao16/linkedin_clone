import { Avatar } from '@mui/material'
import React from 'react'
import './Sidebar.css'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function Sidebar() {

  const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className='sidebar_recentItem'>
            <span className='sidebar_hash'>#</span>
            <p>{topic}</p>
        </div>
    );


  return (
    <div className='sidebar'>
      <div className='sidebar_top'>

        <img src='https://upload.wikimedia.org/wikipedia/commons/5/57/Cumulus_Clouds_over_Yellow_Prairie2.jpg' alt='' />
        <Avatar src={user.photoUrl} className='sidebar_avatar'>{user.displayName[0]}</Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>

      </div>

      <div className='sidebar_stats'>
        <div className='sidebar_stat'>
            <p>who viwed you?</p>
            <p className='sidebar_statNumber'>2,543</p>
        </div>
        <div className='sidebar_stat'>
        <p>viwed you?</p>
        <p className='sidebar_statNumber'>2,543</p>
        </div>
      </div>

      <div className='sidebar_bottom'>
        <p>Recent</p>
        {recentItem('REACTjS')}
      </div>

    </div>
  )
}

export default Sidebar
