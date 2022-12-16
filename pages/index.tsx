import BottomWaves from '../components/BottomWaves/BottomWaves'
import LoginForm from '../components/LoginForm/LoginForm'
import styles from '../styles/Globals.module.scss'

export default function Home() {
  return (
    <div className={styles.loginContainer}>
      <LoginForm />
      <BottomWaves />
    </div>
  )
}
