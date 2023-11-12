import { MoveDown, MoveLeft, MoveRight, MoveUp } from 'lucide-react'
import styles from './instruction.module.css'

export default function InstructionModalContent() {
  return (
    <div className={styles.instruction}>
      <h1>Здравствуй, дорогой Игрок!</h1>
      <h2>Как играть?</h2>
      <div className={styles.list}>
        <p>1. Вы играете за родителя в левой верхней части лабиринта</p>
        <p>
          2. Для победы Вам нужно пройти в правую нижнюю часть лабиринта и
          встретиться с ребенком
        </p>
        <p>
          3. Для передвижения используйте клавиши <MoveUp />
          <MoveDown />
          <MoveLeft />
          <MoveRight />
        </p>
        <p>4. Если Вы хотите поменять лабиринт нажмите кнопку Reset</p>
      </div>
      <h2>Приятной игры!</h2>
    </div>
  )
}
