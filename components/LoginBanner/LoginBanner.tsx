import React from 'react'
import styles from './LoginBanner.module.scss'

type Props = {}

function LoginBanner({ }: Props) {
    return (
        <div className={styles.loginBannerContainer}>
            <div className={styles.loginBanerBox}>
                <h1>Prueba ASDGroup</h1>
                <p>Presentada por: <b>Santiago Aguirre</b></p>
            </div>
        </div>
    )
}

export default LoginBanner