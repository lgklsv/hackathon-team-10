import Select from 'react-select'

import { selectIsMenuOpen, setModal } from '@/entities/menu'
import { useAppDispatch, useAppSelector } from '@/shared/hooks'
import { Button } from '@/shared/ui'

import styles from './Header.module.css'

const options = [
  { value: 'easy', label: 'Легко' },
  { value: 'medium', label: 'Средне' },
  { value: 'hard', label: 'Тяжело' }
]

export default function Header() {
  const dispatch = useAppDispatch()
  const isOpen = useAppSelector(selectIsMenuOpen)

  const openModalHandler = () => {
    dispatch(setModal(!isOpen))
  }

  return (
    <header className={styles.header}>
      <nav className={styles.header__content}>
        <Button>Начать игру</Button>
        <Button>Сброс уровня</Button>
        <Button onClick={openModalHandler}>Как играть?</Button>
        <Select options={options} placeholder="Выберите сложность" />
      </nav>
    </header>
  )
}
