import { PropsWithChildren } from 'react'

import { selectIsMenuOpen, setModal } from '@/entities/menu'
import { useAppDispatch, useAppSelector } from '@/shared/hooks'

import { Button } from '../Button/Button'

import styles from './ModalWindow.module.css'

function ModalWindow({ children }: PropsWithChildren) {
  const dispatch = useAppDispatch()
  const isOpen = useAppSelector(selectIsMenuOpen)

  const openModalHandler = () => {
    dispatch(setModal(!isOpen))
  }

  console.log(isOpen)

  return (
    <div
      className={
        !isOpen ? styles.modal_container_close : styles.modal_container_open
      }
    >
      <div className={styles.modal_window}>
        {children}
        <Button onClick={openModalHandler}>Всё понятно</Button>
      </div>
    </div>
  )
}

export default ModalWindow
