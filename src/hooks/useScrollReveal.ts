import { useEffect, useRef, useState } from 'react'

export function useScrollReveal() {
  const ref = useRef<HTMLElement | HTMLDivElement | null>(null)
  const [isRevealed, setIsRevealed] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsRevealed(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -40px 0px'
      }
    )

    const el = ref.current
    if (el) {
      observer.observe(el)
    }

    return () => {
      if (el) {
        observer.unobserve(el)
      }
      observer.disconnect()
    }
  }, [])

  return {
    ref,
    className: isRevealed ? 'korre-reveal is-visible' : 'korre-reveal'
  }
}
