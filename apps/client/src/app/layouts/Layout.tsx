import { Outlet } from 'react-router-dom'

import { Header } from '@/widgets/header'

import styles from './Layout.module.css'
import NavigationMenu from "@/widgets/adaptive_menu/AdaptiveMenu.tsx";
import AdaptivenMenu from "@/widgets/adaptive_menu/AdaptiveMenu.tsx";
import AdaptiveMenu from "@/widgets/adaptive_menu/AdaptiveMenu.tsx";

export default function Layout() {
  return (
    <>
      <AdaptiveMenu/>
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  )
}
