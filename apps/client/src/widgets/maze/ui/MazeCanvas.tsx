/* eslint-disable consistent-return */
import { ComponentPropsWithoutRef } from 'react'

import useCanvas from '../hooks/useCanvas'

import styles from './MazeCanvas.module.css'

type MazeCanvasProps = ComponentPropsWithoutRef<'canvas'> & {
  draw: any
}

export default function MazeCanvas({ ...props }: MazeCanvasProps) {
  const { draw, ...rest } = props
  const canvasRef = useCanvas(draw)

  return (
    <canvas
      width={500}
      height={500}
      className={styles.maze}
      ref={canvasRef}
      {...rest}
    />
  )
}
