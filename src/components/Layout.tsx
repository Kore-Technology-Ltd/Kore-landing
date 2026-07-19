import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation()

  useEffect(() => {
    ;(window as any).KORRE_DISABLE_AUTO_INIT = true
    const timer = setTimeout(async () => {
      await import('@/script.js')
      if ((window as any).Korre?.init) {
        ;(window as any).Korre.init()
      }
    }, 200)
    return () => clearTimeout(timer)
  }, [])

  const isLegalPage =
    location.pathname === '/terms' || location.pathname === '/privacy'

  if (isLegalPage) {
    return <>{children}</>
  }

  return (
    <div className="page-viewport">
      <div className="page-content">{children}</div>
    </div>
  )
}
