import { useCallback } from 'react'

import { MazeCanvas } from '@/widgets/maze'

import styles from './index.module.css'

export default function MazePage() {
  const draw = useCallback(
    (ctx: CanvasRenderingContext2D | null, frameCount: number) => {
      if (!ctx) return
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
      ctx.fillStyle = '#000000'
      ctx.beginPath()
      ctx.arc(50, 100, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI)
      ctx.fill()
    },
    []
  )

  return (
    <div className={styles.root}>
      <MazeCanvas draw={draw} />
    </div>
  )
}
