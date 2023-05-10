import React, { useState } from 'react'
import ChatHeader from './ChatHeader'
import ChatMessage from './ChatMessage'
import './Chat.scss'
import './ChatHeader.scss'
import './ChatMessage.scss'
import { AddCircleOutline, CardGiftcard, EmojiEmotions, Gif } from '@mui/icons-material'
import { useAppSelector } from '../../app/hooks'

const Chat = () => {
    const [text, setText] = useState('')
    const channelName = useAppSelector((state) => state.channel.channelName)
    const sendMessage = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
    }
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
                    <input type="text" placeholder='Testへ送信' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)} />
                    <button type="submit" className='chatInputButton' onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => sendMessage(e)}></button>
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
