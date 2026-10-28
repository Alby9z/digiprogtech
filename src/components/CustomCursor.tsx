
'use client'

import { useEffect, useRef } from 'react'

type TrailPoint = {
  x: number
  y: number
  time: number
}

export default function CustomCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const media = window.matchMedia(
      '(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)'
    )

    if (!media.matches) return

    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')

    if (!canvas || !ctx) return

    let frameId = 0
    let lastX: number | null = null
    let lastY: number | null = null
    let points: TrailPoint[] = []
    let active = false

    const LIFETIME = 620
    const MAX_POINTS = 100
    const MAX_WIDTH = 23

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)

      canvas.width = Math.round(window.innerWidth * dpr)
      canvas.height = Math.round(window.innerHeight * dpr)
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const drawTrail = (now: number) => {
      frameId = 0

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

      points = points.filter(
        (point) => now - point.time < LIFETIME
      )

      if (points.length < 2) {
        if (points.length === 1 && active) {
          frameId = requestAnimationFrame(drawTrail)
        }
        return
      }

      // Les points sont rangés de la queue vers la souris.
      // La traînée devient plus épaisse et plus bleue à son extrémité.
      for (let i = 1; i < points.length; i++) {
        const previous = points[i - 1]
        const current = points[i]

        const progress = i / (points.length - 1)
        const age = (now - current.time) / LIFETIME
        const freshness = Math.max(0, 1 - age)

        const width = 0.5 + Math.pow(progress, 1.8) * MAX_WIDTH
        const opacity = freshness * (0.08 + progress * 0.46)

        if (opacity <= 0.005) continue

        // Halo extérieur : brume diffuse.
        ctx.beginPath()
        ctx.moveTo(previous.x, previous.y)
        ctx.lineTo(current.x, current.y)
        ctx.lineCap = 'round'
        ctx.lineJoin = 'round'
        ctx.lineWidth = width * 1.8
        ctx.strokeStyle = `rgba(37, 99, 235, ${opacity * 0.18})`
        ctx.shadowBlur = 20
        ctx.shadowColor = `rgba(37, 99, 235, ${opacity * 0.5})`
        ctx.stroke()

        // Corps de la traînée : bleu électrique près du curseur,
        // bleu plus pâle et transparent en remontant vers la queue.
        ctx.beginPath()
        ctx.moveTo(previous.x, previous.y)
        ctx.lineTo(current.x, current.y)
        ctx.lineWidth = width
        ctx.strokeStyle = `rgba(37, 99, 235, ${opacity * 0.8})`
        ctx.shadowBlur = 12
        ctx.shadowColor = `rgba(56, 189, 248, ${opacity})`
        ctx.stroke()

        // Reflet cyan subtil au centre.
        ctx.beginPath()
        ctx.moveTo(previous.x, previous.y)
        ctx.lineTo(current.x, current.y)
        ctx.lineWidth = Math.max(0.5, width * 0.32)
        ctx.strokeStyle = `rgba(125, 211, 252, ${opacity * 0.4})`
        ctx.shadowBlur = 5
        ctx.shadowColor = `rgba(125, 211, 252, ${opacity})`
        ctx.stroke()
      }

      ctx.shadowBlur = 0

      // Continue jusqu'à la disparition complète de la traînée.
      if (points.length > 0) {
        frameId = requestAnimationFrame(drawTrail)
      }
    }

    const startAnimation = () => {
      if (!frameId) {
        frameId = requestAnimationFrame(drawTrail)
      }
    }

    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType === 'touch') return

      const x = event.clientX
      const y = event.clientY
      const now = performance.now()

      if (lastX === null || lastY === null) {
        lastX = x
        lastY = y

        points.push({ x, y, time: now })
        startAnimation()
        return
      }

      const distance = Math.hypot(x - lastX, y - lastY)

      // Interpolation pour que la traînée reste continue,
      // même lorsque la souris se déplace rapidement.
      const steps = Math.min(Math.ceil(distance / 3), 30)

      for (let i = 1; i <= steps; i++) {
        const t = i / steps

        points.push({
          x: lastX + (x - lastX) * t,
          y: lastY + (y - lastY) * t,
          time: now,
        })
      }

      lastX = x
      lastY = y

      if (points.length > MAX_POINTS) {
        points.splice(0, points.length - MAX_POINTS)
      }

      startAnimation()
    }

    const onPointerLeave = () => {
      active = false
      lastX = null
      lastY = null
    }

    const onPointerEnter = (event: PointerEvent) => {
      if (event.pointerType === 'touch') return

      active = true
      lastX = event.clientX
      lastY = event.clientY

      points.push({
        x: event.clientX,
        y: event.clientY,
        time: performance.now(),
      })
    }

    const onVisibilityChange = () => {
      if (document.hidden) {
        points = []
        lastX = null
        lastY = null

        if (frameId) {
          cancelAnimationFrame(frameId)
          frameId = 0
        }

        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
      }
    }

    resizeCanvas()

    window.addEventListener('resize', resizeCanvas)
    window.addEventListener('pointermove', onPointerMove, {
      passive: true,
    })
    window.addEventListener('blur', onPointerLeave)
    document.addEventListener('visibilitychange', onVisibilityChange)

    document.documentElement.addEventListener(
      'pointerleave',
      onPointerLeave
    )
    document.documentElement.addEventListener(
      'pointerenter',
      onPointerEnter
    )

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('blur', onPointerLeave)
      document.removeEventListener('visibilitychange', onVisibilityChange)

      document.documentElement.removeEventListener(
        'pointerleave',
        onPointerLeave
      )
      document.documentElement.removeEventListener(
        'pointerenter',
        onPointerEnter
      )

      if (frameId) cancelAnimationFrame(frameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="custom-cursor-system"
      aria-hidden="true"
    />
  )
}
