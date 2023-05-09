import React from 'react'
import './sidebarChannel.scss'
import { DocumentData } from 'firebase/firestore'
import { useDispatch } from 'react-redux'
import { setChannelInfo } from '../../features/channelSlice'

type props = {
    id: string,
    channel: DocumentData
}
const SidebarChannel = (props: props) => {

    const { id, channel } = props
    const dispatch = useDispatch()

    return (
        <div className='sidebarChannel' onClick={() => {
            dispatch(setChannelInfo(
                {
                    channelId: id,
                    channelName: channel.channel.channelName
                }
            ))

        }}>
            <h4>
                <span className='sidebarChannelHash'>#</span>
                {channel.channel.channelName}
            </h4>
        </div>
    )
}

export default SidebarChannel
