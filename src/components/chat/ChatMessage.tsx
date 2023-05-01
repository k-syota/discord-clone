import { Avatar } from '@mui/material'
import React from 'react'

const ChatMessage = () => {
    return (
        <div className='message'>
            <Avatar />
            <div className="messageInfo">
                <h4>
                    Test
                    <span className='messageTimestamp'>2023/05/01</span>
                </h4>
                <p>メッセージ本文</p>
            </div>
        </div>
    )
}

export default ChatMessage
