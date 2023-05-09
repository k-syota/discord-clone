import React from 'react'
import ChatHeader from './ChatHeader'
import ChatMessage from './ChatMessage'
import './Chat.scss'
import './ChatHeader.scss'
import './ChatMessage.scss'
import { AddCircleOutline, CardGiftcard, EmojiEmotions, Gif } from '@mui/icons-material'
import { useAppSelector } from '../../app/hooks'

const Chat = () => {

    const channelName = useAppSelector((state) => state.channel.channelName)

    return (
        <div className='chat'>
            <ChatHeader channelName={channelName} />
            <div className="chatMessage">
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
            </div>
            <div className="chatInput">
                <AddCircleOutline />
                <form>
                    <input type="text" placeholder='Testへ送信' />
                    <button type="submit" className='chatInputButton'></button>
                </form>
                <div className="chatInputIcons">
                    <CardGiftcard />
                    <Gif />
                    <EmojiEmotions />
                </div>
            </div>
        </div>
    )
}

export default Chat
