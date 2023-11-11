import React from 'react'
import styles from './modal_window.module.css'
import { Button } from '@/shared/ui/Button/Button.tsx'
import { useAppDispatch, useAppSelector } from '@/shared/hooks'
import { setModal } from '@/entities/menu/model/menuSlice'

const ModalWindow = () => {
  const dispatch = useAppDispatch()
  const isOpen = useAppSelector((state) => state.menu.isOpen)
  return (
    <div
      className={
        isOpen ? styles.modal_container_close : styles.modal_container_open
      }
    >
      <div className={styles.modal_window}>
        <h3>Здравствуй, дорогой Игрок!</h3>
        <Button onClick={() => dispatch(setModal(!isOpen))}>Всё понятно</Button>
      </div>
    </div>
  )
}

export default ModalWindow
