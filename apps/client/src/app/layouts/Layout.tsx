import { Outlet } from 'react-router-dom'

import { Header } from '@/widgets/header'

import styles from './Layout.module.css'

export default function Layout() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  )
}
