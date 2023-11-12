/* eslint-disable consistent-return */
import React from 'react'

import Confetti from 'react-dom-confetti'

import { restartGame } from '@/entities/maze'
import { setVictoryModal } from '@/entities/victory_modal/model/victoryModalSlice.ts'
import { useAppDispatch, useAppSelector } from '@/shared/hooks'
import { Button } from '@/shared/ui'

import styles from './VictoryWindow.module.css'

function VictoryWindow() {
  const dispatch = useAppDispatch()
  const isOpen = useAppSelector((state) => state.victoryModal.isVictoryModal)
  const [confetti, setConfetti] = React.useState(false)
  const config = {
    angle: 90,
    spread: 360,
    startVelocity: 40,
    elementCount: 70,
    dragFriction: 0.12,
    duration: 7000,
    stagger: 3,
    width: '10px',
    height: '10px',
    perspective: '500px',
    colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a']
  }

  React.useEffect(() => {
    if (isOpen) {
      setConfetti(true)
      const confettiTimeout = setTimeout(() => {
        setConfetti(false)
      }, 7000)
      return () => clearTimeout(confettiTimeout)
    }
  }, [isOpen])

  const newGameHandler = () => {
    dispatch(setVictoryModal(!isOpen))
    dispatch(restartGame())
  }

  return (
    <div className={styles.container}>
      <div className={styles.victory_window}>
        <Confetti active={confetti} config={config} />
        <h3>Поздравляем!</h3>
        <p>Пускай это было непросто, но Вы справились!</p>
        <Button size="medium" onClick={newGameHandler}>
          <h2>Продолжить</h2>
        </Button>
      </div>
    </div>
  )
}

export default VictoryWindow
