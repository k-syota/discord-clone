import React from 'react'
import { Help, Notifications, PeopleAlt, PushPin, Search, Send } from '@mui/icons-material';

type props = {
    channelName: string | null
}

const ChatHeader = (props: props) => {
    const { channelName } = props;
    return (
        <div className='chatHeader'>
            <div className="chatHeaderLeft">
                <h3>
                    <span className='chatHeaderHash'>#</span>
                    {channelName}
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
