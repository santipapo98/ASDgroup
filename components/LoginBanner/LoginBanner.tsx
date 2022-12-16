import React from 'react'
import styles from './LoginBanner.module.scss'

type Props = {}

function LoginBanner({ }: Props) {
    return (
        <div className={styles.loginBannerContainer}>
            <div className={styles.loginBanerBox}>
                <h1>ASDGroup</h1>
            </div>
        </div>
    )
}

export default LoginBanner