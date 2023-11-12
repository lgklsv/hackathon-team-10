import { MoveDown, MoveLeft, MoveRight, MoveUp } from 'lucide-react'

import styles from './instruction.module.css'

export default function InstructionModalContent() {
  return (
    <div className={styles.instruction}>
      <h1>Здравствуй, дорогой Игрок!</h1>
      <h2>Как играть?</h2>
      <div className={styles.list}>
        <ol>
          <li> Вы играете за родителя в левой верхней части лабиринта</li>
          <li>
            Для победы Вам нужно пройти в правую нижнюю часть лабиринта и
            встретиться с ребенком
          </li>
          <li>
            <div className={styles.controls}>
              Для передвижения используйте клавиши <MoveUp />
              <MoveDown />
              <MoveLeft />
              <MoveRight />
            </div>
          </li>
          <li>
            Если Вы хотите поменять лабиринт нажмите кнопку завершить и затем
            новая игра
          </li>
        </ol>
      </div>
      <h2>Приятной игры!</h2>
    </div>
  )
}
