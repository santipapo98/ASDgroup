import Head from 'next/head'
import LoginBanner from '../components/LoginBanner/LoginBanner'
import LoginForm from '../components/LoginForm/LoginForm'
import styles from '../styles/Globals.module.scss'

export default function Home() {
  return (<>
    <Head>
      <title>My page title</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <div className={styles.loginContainer}>
      <LoginForm />
      <LoginBanner />
    </div>
    <footer className={styles.footer}>
      <p>Prueba presentada por Santiago Aguirre Galvez</p>
    </footer>
  </>
  )
}
