import { Button } from '@/shared/ui'

import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <Button>Логин</Button>
      </div>
    </header>
  )
}
