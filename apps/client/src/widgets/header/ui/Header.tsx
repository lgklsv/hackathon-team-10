import Select, { SingleValue } from 'react-select'

import {
  MazeDifficulty,
  restartGame,
  restartLevel,
  selectIsSolutionMode,
  setMazeDifficulty,
  toggleSolutionMode
} from '@/entities/maze'
import { selectIsMenuOpen, setModal } from '@/entities/menu'
import { useAppDispatch, useAppSelector } from '@/shared/hooks'
import { Button } from '@/shared/ui'

import styles from './Header.module.css'

const options = [
  { value: MazeDifficulty.easy, label: 'Легко' },
  { value: MazeDifficulty.medium, label: 'Средне' },
  { value: MazeDifficulty.hard, label: 'Тяжело' }
]

export default function Header() {
  const dispatch = useAppDispatch()
  const isOpen = useAppSelector(selectIsMenuOpen)
  const solutionMode = useAppSelector(selectIsSolutionMode)

  const openModalHandler = () => {
    dispatch(setModal(!isOpen))
  }

  const restartGameHandler = () => {
    dispatch(restartGame())
  }

  const restartLevelHandler = () => {
    dispatch(restartLevel())
  }

  const toggleMazeSolutionHandler = () => {
    dispatch(toggleSolutionMode())
  }

  const changeDifficultyHandler = (
    e: SingleValue<{ value: MazeDifficulty; label: string }>
  ) => {
    if (e?.value) dispatch(setMazeDifficulty(e.value))
  }

  return (
    <header className={styles.header}>
      <nav className={styles.header__content}>
        <Button onClick={restartGameHandler}>Новая игра</Button>
        <Button onClick={restartLevelHandler}>Сброс уровня</Button>
        <Button onClick={toggleMazeSolutionHandler}>
          {solutionMode ? 'Выключить подсказку' : 'Включить подсказку'}
        </Button>
        <Button onClick={openModalHandler}>Как играть?</Button>
        <Select
          defaultValue={options[0]}
          options={options}
          onChange={changeDifficultyHandler}
          placeholder="Выберите сложность"
        />
      </nav>
    </header>
  )
}
