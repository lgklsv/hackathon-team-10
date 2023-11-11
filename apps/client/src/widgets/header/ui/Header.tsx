import { Button } from '@/shared/ui'

import styles from './Header.module.css'
import SelectDifficulty from "@/shared/ui/Select/SelectDifficulty.tsx";
import {useAppDispatch, useAppSelector} from "@/shared/hooks";
import {setModal} from "@/app/layouts/menuSlice.ts";

export default function Header() {
  const dispatch = useAppDispatch()
  const isOpen = useAppSelector(state => state.menuSlice.isOpen)

  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
       <div className={styles.game_buttons}>
         <Button>Начать игру</Button>
         <Button>Сброс уровня</Button>
         <Button onClick={()=>{
           dispatch(setModal(!isOpen))
         }}>Как играть?</Button>
         <SelectDifficulty/>
       </div>
        <Button>Логин</Button>
      </div>
    </header>
  )
}
