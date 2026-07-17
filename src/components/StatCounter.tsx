import React from 'react'
import { useCountUp } from '../hooks/useCountUp'

interface StatCounterProps {
  target: number
  suffix?: string
  prefix?: string
  className?: string
  style?: React.CSSProperties
}

/**
 * StatCounter — pure React stat counter component.
 * Uses the intersection observer count-up hook to animate the number smoothly
 * when it scrolls into view, with zero global scroll listeners or rAF loop overhead.
 */
export default function StatCounter({
  target,
  suffix = '',
  prefix = '',
  className,
  style
}: StatCounterProps) {
  const { ref, value } = useCountUp(target)

  return (
    <span ref={ref as any} className={className} style={style}>
      {prefix}
      {value.toLocaleString()}
      {suffix}
    </span>
  )
}
