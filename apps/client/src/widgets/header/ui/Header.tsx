import Select, { SingleValue } from 'react-select'

import { MazeDifficulty, setMazeDifficulty } from '@/entities/maze'
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

  const openModalHandler = () => {
    dispatch(setModal(!isOpen))
  }

  const changeDifficultyHandler = (
    e: SingleValue<{ value: MazeDifficulty; label: string }>
  ) => {
    if (e?.value) dispatch(setMazeDifficulty(e.value))
  }

  return (
    <header className={styles.header}>
      <nav className={styles.header__content}>
        <Button>Начать игру</Button>
        <Button>Сброс уровня</Button>
        <Button onClick={openModalHandler}>Как играть?</Button>
        <Select
          options={options}
          onChange={changeDifficultyHandler}
          placeholder="Выберите сложность"
        />
      </nav>
    </header>
  )
}
