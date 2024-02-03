import React , {forwardRef} from 'react'
import './Post.css'
import { Avatar } from '@mui/material'
import InputOption from './InputOption'
import { ChatOutlined, SendOutlined, ShareOutlined, ThumbUpAltOutlined } from '@mui/icons-material'

const Post= forwardRef(({name, description, message, photoUrl}, ref) => {
  return (
    <div ref={ref} className='post'>
      <div className='post_header'>
        <Avatar src={photoUrl}>{name[0]}</Avatar>
        <div className='post_info'>
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
      </div>

      <div className='post_body'>
        <p>{message}</p>
      </div>

      <div className='post_buttons'>
        <InputOption Icon={ThumbUpAltOutlined} 
        title="Like" color="gray"/>
        <InputOption Icon={ChatOutlined} 
        title="Comment" color="gray"/>
        <InputOption Icon={ShareOutlined} 
        title="Share" color="gray"/>
        <InputOption Icon={SendOutlined} 
        title="Send" color="gray"/>
      </div>
    </div>
  )
})

export default Post
