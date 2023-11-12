import React from 'react'

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

import styles from './MobileMenu.module.css'

const options = [
  { value: MazeDifficulty.easy, label: 'Легко' },
  { value: MazeDifficulty.medium, label: 'Средне' },
  { value: MazeDifficulty.hard, label: 'Тяжело' }
]

function MobileMenu() {
  const dispatch = useAppDispatch()
  const isOpen = useAppSelector(selectIsMenuOpen)
  const solutionMode = useAppSelector(selectIsSolutionMode)
  const status = useAppSelector(selectMazeStatus)
  const [openMenu, setOpenMenu] = React.useState(false)

  const openModalHandler = () => {
    dispatch(setModal(!isOpen))
    setOpenMenu(false)
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
    setOpenMenu(false)
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
    <>
      <div className={styles.open_menu}>
        <Button
          onClick={restartGameHandler}
          variant={status === MazeStatus.playing ? 'default' : 'secondary'}
        >
          {status === MazeStatus.playing ? 'Завершить' : 'Новая игра'}
        </Button>
        <Select
          className={styles.select}
          defaultValue={options[0]}
          options={options}
          onChange={changeDifficultyHandler}
          placeholder="Выберите сложность"
        />
        <Button
          onClick={() => {
            setOpenMenu(!openMenu)
          }}
        >
          {!openMenu ? 'Открыть меню' : 'Закрыть меню'}
        </Button>
      </div>
      <header className={openMenu ? styles.header_open : styles.header_close}>
        <nav className={styles.header__content}>
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
        </nav>
      </header>
    </>
  )
}

export default MobileMenu
