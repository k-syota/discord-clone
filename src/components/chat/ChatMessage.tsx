import { Avatar } from '@mui/material'
import { Timestamp } from 'firebase/firestore';
import React from 'react'

type Props = {
    message: string;
    timestamp: Timestamp;
    user: {
        uid: string;
        photo: string;
        email: string;
        displayName: string;
    }
}

const ChatMessage = (props: Props) => {

    console.log(props)

    const { message, timestamp, user } = props

    return (
        <div className='message'>
            <Avatar src={user?.photo} />
            <div className="messageInfo">
                <h4>
                    {user?.displayName}
                    <span className='messageTimestamp'>
                        {new Date(timestamp?.toDate()).toLocaleString()}
                    </span>
                </h4>
                <p>{message}</p>
            </div>
        </div>
    )
}

export default ChatMessage
