import { MoveDown, MoveUp, MoveLeft, MoveRight } from "lucide-react";

function Instruction() {
  return (
    <div>
      <header>Как играть?</header>
      <div>
        <p>1. Вы играете за родителя в левой верхней части лабиринта</p>
        <p>2. Для победы Вам нужно пройти в правую нижнюю часть лабиринта и встретиться с ребенком</p>
        <p>3. Для передвижения используйте клавиши {<><MoveUp /><MoveDown /><MoveLeft /><MoveRight /></>}</p>
        <p>4. Если Вы хотите поменять лабиринт нажмите кнопку Reset</p>
        <h1>Приятной игры!</h1>
      </div>
      <footer>
        <button type="button">Закрыть</button>
      </footer>
    </div>
  );
}

export default Instruction
