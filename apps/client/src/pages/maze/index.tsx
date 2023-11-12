/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { KeyboardEvent, useEffect, useMemo, useState } from 'react'

import './maze.css'

import { InstructionModalContent } from '@/entities/instruction'
import { generateMaze, selectMazeDifficulty, solve } from '@/entities/maze'
import { useAppSelector } from '@/shared/hooks'
import ModalWindow from '@/shared/ui/ModalWindow/ModalWindow'

import styles from './index.module.css'

export default function MazePage() {
  const [gameId, setGameId] = useState(1)
  const [status, setStatus] = useState('playing')
  const size = useAppSelector(selectMazeDifficulty)

  const [cheatMode, setCheatMode] = useState(false)

  const [userPosition, setUserPosition] = useState([0, 0])

  const maze = useMemo(() => generateMaze(size, size), [size, gameId])

  const solution = useMemo(() => {
    const s = new Set()
    const solutionPath = solve(maze, userPosition[0], userPosition[1])
    solutionPath.forEach((path) => {
      const [x, y] = path
      s.add(`${String(x)}-${String(y)}`)
    })
    return s
  }, [size, userPosition[0], userPosition[1], gameId])

  useEffect(() => {
    const lastRowIndex = maze.length - 1
    const lastColIndex = maze[0].length - 1
    if (userPosition[0] === lastRowIndex && userPosition[1] === lastColIndex) {
      setStatus('won')
    }
  }, [userPosition[0], userPosition[1]])

  const makeClassName = (i: number, j: number) => {
    const rows = maze.length
    const cols = maze[0].length
    const arr = []
    if (maze[i][j][0] === 0) {
      arr.push('top_wall')
    }
    if (maze[i][j][1] === 0) {
      arr.push('right_wall')
    }
    if (maze[i][j][2] === 0) {
      arr.push('bottom_wall')
    }
    if (maze[i][j][3] === 0) {
      arr.push('left_wall')
    }
    if (i === rows - 1 && j === cols - 1) {
      arr.push('destination')
    }
    if (i === userPosition[0] && j === userPosition[1]) {
      arr.push('current_position')
    }
    if (cheatMode && solution.has(`${String(i)}-${String(j)}`)) {
      arr.push('sol')
    }
    return arr.join(' ')
  }

  const handleMove = (e: KeyboardEvent) => {
    e.preventDefault()
    if (status !== 'playing') {
      return
    }
    const key = e.code

    const [i, j] = userPosition
    if ((key === 'ArrowUp' || key === 'KeyW') && maze[i][j][0] === 1) {
      setUserPosition([i - 1, j])
    }
    if ((key === 'ArrowRight' || key === 'KeyD') && maze[i][j][1] === 1) {
      setUserPosition([i, j + 1])
    }
    if ((key === 'ArrowDown' || key === 'KeyS') && maze[i][j][2] === 1) {
      setUserPosition([i + 1, j])
    }
    if ((key === 'ArrowLeft' || key === 'KeyA') && maze[i][j][3] === 1) {
      setUserPosition([i, j - 1])
    }
  }

  const handleUpdateSettings = () => {
    setUserPosition([0, 0])
    setStatus('playing')
    setGameId(gameId + 1)
  }

  return (
    <div className={styles.root} onKeyDown={handleMove} tabIndex={-1}>
      <ModalWindow>
        <InstructionModalContent />
      </ModalWindow>
      <div className="setting">
        <button type="button" onClick={handleUpdateSettings}>
          Restart game with new settings
        </button>
      </div>
      <p>use WSAD or Arrow Keys to move</p>
      <div>
        <label htmlFor="cheatMode">Cheat mode</label>
        <input
          type="checkbox"
          name="cheatMode"
          onChange={(e) => setCheatMode(e.target.checked)}
        />
      </div>
      <table id="maze">
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
      {status !== 'playing' && (
        <div className="info" onClick={handleUpdateSettings}>
          <p>you won (click here to play again)</p>
        </div>
      )}
    </div>
  )
}
