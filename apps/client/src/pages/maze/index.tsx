/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react-hooks/exhaustive-deps */
import { KeyboardEvent, useEffect, useMemo } from 'react'

import { InstructionModalContent } from '@/entities/instruction'
import {
  MazeStatus,
  movePlayer,
  restartGame,
  selectIsSolutionMode,
  selectMaze,
  selectMazeDifficulty,
  selectMazeStatus,
  selectPlayerPosition,
  setMazeStatus,
  solve
} from '@/entities/maze'
import { useAppDispatch, useAppSelector } from '@/shared/hooks'
import { cn } from '@/shared/lib'
import ModalWindow from '@/shared/ui/ModalWindow/ModalWindow'

import styles from './index.module.css'

export default function MazePage() {
  const dispatch = useAppDispatch()
  const size = useAppSelector(selectMazeDifficulty)
  const playerPosition = useAppSelector(selectPlayerPosition)
  const maze = useAppSelector(selectMaze)
  const mazeStatus = useAppSelector(selectMazeStatus)
  const solutionMode = useAppSelector(selectIsSolutionMode)

  const solution = useMemo(() => {
    const s = new Set()
    const solutionPath = solve(maze, playerPosition[0], playerPosition[1])
    solutionPath.forEach((path) => {
      const [x, y] = path
      s.add(`${String(x)}-${String(y)}`)
    })
    return s
  }, [size, playerPosition[0], playerPosition[1], maze])

  useEffect(() => {
    const lastRowIndex = maze.length - 1
    const lastColIndex = maze[0].length - 1
    if (
      playerPosition[0] === lastRowIndex &&
      playerPosition[1] === lastColIndex
    ) {
      dispatch(setMazeStatus(MazeStatus.won))
    }
  }, [playerPosition[0], playerPosition[1]])

  const makeClassName = (i: number, j: number) => {
    const cellClassName = cn({
      [styles.wall_top]: maze[i][j][0] === 0,
      [styles.wall_right]: maze[i][j][1] === 0,
      [styles.wall_bottom]: maze[i][j][2] === 0,
      [styles.wall_left]: maze[i][j][3] === 0,
      [styles.destination]: i === maze.length - 1 && j === maze[0].length - 1,
      [styles.position]: i === playerPosition[0] && j === playerPosition[1],
      [styles.sol]:
        solutionMode &&
        solution.has(`${String(i)}-${String(j)}`) &&
        !(i === playerPosition[0] && j === playerPosition[1]) &&
        !(i === maze.length - 1 && j === maze[0].length - 1)
    })
    return cellClassName
  }

  const handleMove = (e: KeyboardEvent) => {
    dispatch(movePlayer(e.code))
  }

  const resetGameHandler = () => {
    dispatch(restartGame())
  }

  return (
    <div className={styles.root} onKeyDown={handleMove} tabIndex={-1}>
      <ModalWindow>
        <InstructionModalContent />
      </ModalWindow>
      <table className={styles.maze}>
        <tbody>
          {maze.map((row, i) => (
            <tr key={`row-${i}`}>
              {row.map((_, j) => (
                <td key={`cell-${i}-${j}`} className={makeClassName(i, j)}>
                  <div />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {mazeStatus === MazeStatus.won && (
        <div className={styles.info} onClick={resetGameHandler}>
          <p>you won (click here to play again)</p>
        </div>
      )}
    </div>
  )
}
