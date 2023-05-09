import React, { useEffect, useState } from 'react'
import { DocumentData, Query, collection, onSnapshot, query } from 'firebase/firestore'
import { db } from '../firebase'

interface Channels {
    id: string,
    channel: DocumentData
}
const useCollection = (data: string) => {

    const [documents, setDocuments] = useState<Channels[]>([])
    const collectionRef: Query<DocumentData> = query(collection(db, "data"))

    useEffect(() => {
        onSnapshot(collectionRef, (query) => {
            const returnChannels: Channels[] = [];
            query.docs.forEach((doc) => returnChannels.push({
                id: doc.id,
                channel: doc.data(),
            }))
            setDocuments(returnChannels)
        })
    }, [])

    return { documents }
}

export default useCollection
