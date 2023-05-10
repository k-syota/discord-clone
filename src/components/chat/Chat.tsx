import React, { useEffect, useState } from 'react'
import ChatHeader from './ChatHeader'
import ChatMessage from './ChatMessage'
import './Chat.scss'
import './ChatHeader.scss'
import './ChatMessage.scss'
import { AddCircleOutline, CardGiftcard, EmojiEmotions, Gif } from '@mui/icons-material'
import { useAppSelector } from '../../app/hooks'
import { Timestamp, CollectionReference, DocumentData, addDoc, collection, onSnapshot, serverTimestamp, query, orderBy } from 'firebase/firestore'
import { db } from '../../firebase'

interface Messages {
    timestamp: Timestamp,
    message: string,
    user: {
        uid: string;
        photo: string;
        email: string;
        displayName: string;
    }
}

const Chat = () => {

    const [text, setText] = useState<string>('')
    const [messages, setMessages] = useState<Messages[]>([])
    const channelName = useAppSelector((state) => state.channel.channelName)
    const channelId = useAppSelector((state) => state.channel.channelId)
    const user = useAppSelector((state) => state.user.user)

    useEffect(() => {
        const collectionRef: CollectionReference<DocumentData> = collection(db, "channels", String(channelId), "messages")
        //timestampでsortしたデータを変数に格納
        const collectionRefOrderBy = query(collectionRef, orderBy("timestamp", "desc"))
        onSnapshot(collectionRefOrderBy, (snapshot) => {
            let res: Messages[] = [];
            snapshot.docs.forEach((doc) => {
                res.push({
                    timestamp: doc.data().timestamp,
                    message: doc.data().message,
                    user: doc.data().user
                })
            })
            setMessages(res)
        })
    }, [channelId])

    const sendMessage = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        const collectionRef: CollectionReference<DocumentData> = collection(db, "channels", String(channelId), "messages")
        await addDoc(collectionRef, {
            'message': text,
            timestamp: serverTimestamp(),
            user: user
        })
        setText('')
    }
    return (
        <div className='chat'>
            <ChatHeader channelName={channelName} />
            <div className="chatMessage">
                {messages.map((message, index) => (
                    <ChatMessage key={index} message={message.message} timestamp={message.timestamp} user={message.user} />
                ))}
            </div>
            <div className="chatInput">
                <AddCircleOutline />
                <form>
                    <input type="text" placeholder='Testへ送信' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)} value={text} />
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
