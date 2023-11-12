import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp } from 'lucide-react'

import { movePlayer } from '@/entities/maze'
import { useAppDispatch } from '@/shared/hooks'
import { Button } from '@/shared/ui'

import styles from './MobileControls.module.css'

export default function MobileControls() {
  const dispatch = useAppDispatch()

  const upHandler = () => {
    dispatch(movePlayer('ArrowUp'))
  }

  const downHandler = () => {
    dispatch(movePlayer('ArrowDown'))
  }

  const leftHandler = () => {
    dispatch(movePlayer('ArrowLeft'))
  }

  const rightHandler = () => {
    dispatch(movePlayer('ArrowRight'))
  }

  return (
    <div className={styles.controls}>
      <Button className={styles.controls__up} size="icon" onClick={upHandler}>
        <ArrowUp className={styles.icon} />
      </Button>
      <Button
        className={styles.controls__down}
        size="icon"
        onClick={downHandler}
      >
        <ArrowDown className={styles.icon} />
      </Button>
      <Button
        className={styles.controls__left}
        size="icon"
        onClick={leftHandler}
      >
        <ArrowLeft className={styles.icon} />
      </Button>
      <Button
        className={styles.controls__right}
        size="icon"
        onClick={rightHandler}
      >
        <ArrowRight className={styles.icon} />
      </Button>
    </div>
  )
}
