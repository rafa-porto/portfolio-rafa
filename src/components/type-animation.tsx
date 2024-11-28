"use client"

import { useEffect, useState } from 'react'

interface TypeAnimationProps {
  strings: string[]
  typeSpeed?: number
  className?: string
  onComplete?: () => void
}

export function TypeAnimation({ 
  strings, 
  typeSpeed = 50, 
  className = "", 
  onComplete 
}: TypeAnimationProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentStringIndex, setCurrentStringIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)

  useEffect(() => {
    if (currentStringIndex >= strings.length) {
      onComplete?.()
      return
    }

    const currentString = strings[currentStringIndex]

    if (currentCharIndex < currentString.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + currentString[currentCharIndex])
        setCurrentCharIndex(prev => prev + 1)
      }, typeSpeed)

      return () => clearTimeout(timer)
    } else {
      setCurrentStringIndex(prev => prev + 1)
      setCurrentCharIndex(0)
    }
  }, [currentStringIndex, currentCharIndex, strings, typeSpeed, onComplete])

  return <span className={className}>{displayText}</span>
} 