import Select, { SingleValue } from 'react-select'

import {
  MazeDifficulty,
  MazeStatus,
  restartGame,
  restartLevel,
  selectIsSolutionMode,
  selectMazeStatus,
  setGameRestarting,
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
  const status = useAppSelector(selectMazeStatus)

  const openModalHandler = () => {
    dispatch(setModal(!isOpen))
  }

  const restartGameHandler = () => {
    if (status === MazeStatus.playing) {
      dispatch(setGameRestarting())
    } else {
      dispatch(restartGame())
    }
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
        <Button
          onClick={restartGameHandler}
          variant={status === MazeStatus.playing ? 'default' : 'secondary'}
        >
          {status === MazeStatus.playing ? 'Завершить' : 'Новая игра'}{' '}
        </Button>
        <Button
          onClick={restartLevelHandler}
          disabled={status !== MazeStatus.playing}
        >
          Сброс уровня
        </Button>
        <Button
          className={styles.header__hint}
          onClick={toggleMazeSolutionHandler}
          disabled={status !== MazeStatus.playing}
        >
          {solutionMode && status === MazeStatus.playing
            ? 'Выключить подсказку'
            : 'Включить подсказку'}
        </Button>
        <Button onClick={openModalHandler}>Как играть?</Button>
        <Select
          className={styles.header__select}
          defaultValue={options[0]}
          options={options}
          onChange={changeDifficultyHandler}
          placeholder="Выберите сложность"
        />
      </nav>
    </header>
  )
}
