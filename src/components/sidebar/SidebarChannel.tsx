import React from 'react'
import './sidebarChannel.scss'
import { DocumentData } from 'firebase/firestore'

type props = {
    id: string,
    channel: DocumentData
}
const SidebarChannel = (props: props) => {
    const { id, channel } = props
    console.log(channel)
    return (
        <div className='sidebarChannel'>
            <h4>
                <span className='sidebarChannelHash'>#</span>
                {channel.channel.channelName}
            </h4>
        </div>
    )
}

export default SidebarChannel
