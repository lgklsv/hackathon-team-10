/* eslint-disable consistent-return */
import { useEffect, useRef } from 'react'

const useCanvas = (draw: any) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext('2d')
    let frameCount = 0
    let animationFrameId: number

    const render = () => {
      frameCount += 1
      draw(context, frameCount)
      animationFrameId = window.requestAnimationFrame(render)
    }
    render()

    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [draw])

  return canvasRef
}

export default useCanvas
