import { Button } from '@mui/material'
import { signInWithPopup } from 'firebase/auth'
import React, { useEffect } from 'react'
import { auth, provider } from '../../firebase'
import { useAppDispach } from '../../app/hooks'
import { login, logout } from '../../features/userSlice'

const Login = () => {

    const signIn = () => {
        signInWithPopup(auth, provider)
            .catch((err) => { alert(err.message) })
    }

    const dispatch = useAppDispach();

    useEffect(() => {
        auth.onAuthStateChanged((loginUser) => {
            console.log(loginUser)
            if (loginUser) {
                dispatch(login({
                    uid: loginUser.uid,
                    photo: loginUser.photoURL,
                    email: loginUser.email,
                    displayName: loginUser.displayName
                }))
            } else {
                dispatch(logout())
            }
        })
    }, [dispatch])

    return (
        <div className='login'>
            <div className="loginLogo">
                <img src="./discordIcon.png" alt="" />
            </div>
            <Button onClick={signIn}>ログイン</Button>
        </div>
    )
}

export default Login
