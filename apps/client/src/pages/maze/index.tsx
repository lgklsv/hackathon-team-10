import { useEffect, useState } from 'react'

import ModalWindow from '@/shared/ui/ModalWindow/ModalWindow.tsx'

import styles from './index.module.css'
import Form from "@/shared/ui/Form/Form.tsx";
import VictoryWindow from "@/shared/ui/VictoryWindow/VictoryWindow.tsx";

export default function MazePage() {
  const [greeting, setGreeting] = useState('')

  useEffect(() => {
    fetch('/api/test/654eb5a275673c260b8074d2')
      .then((res) => res.json())
      .then((res) => setGreeting(res.message))
  }, [])

  return (
    <div className={styles.root}>
      <div className={styles.root__maze}>
        <ModalWindow />
        <VictoryWindow/>
        <h1>{greeting}</h1>
      </div>
    </div>
  )
}
