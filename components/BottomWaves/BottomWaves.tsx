import React from 'react'
import styles from './BottomWaves.module.scss'

type Props = {}

function BottomWaves({ }: Props) {
    return (
        <div className={styles.bottomWavesContainer}>
            <div className={styles.darkWave}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#224957" fillOpacity="0.2" d="M0,192L48,186.7C96,181,192,171,288,160C384,149,480,139,576,154.7C672,171,768,213,864,234.7C960,256,1056,256,1152,218.7C1248,181,1344,107,1392,69.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>
            <div className={styles.lightWave}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#20df7f" fillOpacity="0.3" d="M0,320L48,309.3C96,299,192,277,288,272C384,267,480,277,576,282.7C672,288,768,288,864,256C960,224,1056,160,1152,154.7C1248,149,1344,203,1392,229.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            </div>
        </div>
    )
}

export default BottomWaves