import React from 'react'
import { Help, Notifications, PeopleAlt, PushPin, Search, Send } from '@mui/icons-material';

const ChatHeader = () => {
    return (
        <div className='chatHeader'>
            <div className="chatHeaderLeft">
                <h3>
                    <span className='chatHeaderHash'>#</span>
                    Test
                </h3>
            </div>

            <div className="chatHeaderRight">
                <Notifications />
                <PushPin />
                <PeopleAlt />
                <div className="chatHeaderSearch">
                    <input type="text" placeholder='Search' />
                    <Search />
                </div>
                <Send />
                <Help />
            </div>

        </div>
    )
}

export default ChatHeader
