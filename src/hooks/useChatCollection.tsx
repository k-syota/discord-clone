import React, { useEffect, useState } from 'react'
import { CollectionReference, DocumentData, Query, Timestamp, collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from '../firebase'
import { useAppSelector } from '../app/hooks'

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
const useChatCollection = (collectionName: string, subCollectionName: string) => {

    const channelId = useAppSelector((state) => state.channel.channelId)
    const [chatDocuments, setChatDocuments] = useState<Messages[]>([])

    useEffect(() => {
        const collectionRef: CollectionReference<DocumentData> = collection(db, collectionName, String(channelId), subCollectionName)
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
            setChatDocuments(res)
        })
    }, [channelId])

    return { chatDocuments }
}

export default useChatCollection
