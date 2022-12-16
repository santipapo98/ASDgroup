import React from 'react'
import BottomWaves from '../components/BottomWaves/BottomWaves'
import LoginBanner from '../components/LoginBanner/LoginBanner'
import LoginForm from '../components/LoginForm/LoginForm'
import styles from '../styles/Globals.module.scss'

type Props = {}

function login({ }: Props) {
    return (
        <div className={styles.loginContainer}>
            <LoginForm />
            <BottomWaves />
        </div>
    )
}

export default login