'use client'

import { useEffect, useState } from 'react'
import { HeaderWrapperProps } from './types/headerWrapper'
import { AlignJustify, X } from 'lucide-react'

export const HeaderWrapper = ({ children }: HeaderWrapperProps) => {
  const [isMobile, setIsMobile] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(!isMobile)

  useEffect(() => {
    const hasMobileWidth = window.innerWidth < 768
    setIsMobile(hasMobileWidth)
    setIsSidebarOpen(!hasMobileWidth)
  }, [])

  if (isMobile && !isSidebarOpen) {
    return (
      <button onClick={() => setIsSidebarOpen(true)} className="pl-4 pt-4">
        <AlignJustify className="h-10 w-10" />
      </button>
    )
  }

  if (!isMobile) {
    return <>{children}</>
  }

  if (isSidebarOpen) {
    return (
      <div className="h-screen w-screen bg-light-yellow">
        <button
          onClick={() => setIsSidebarOpen(false)}
          className="self-start pl-4 pt-4"
        >
          <X className="h-10 w-10" />
        </button>
        {children}
      </div>
    )
  }
}
