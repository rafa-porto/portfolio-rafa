"use client"

import { ReactTyped } from 'react-typed'
import { motion } from "framer-motion"
import { useState } from 'react'

interface TypeAnimationProps {
  strings: string[]
  className?: string
  typeSpeed?: number
  startDelay?: number
  onComplete?: () => void
}

export function TypeAnimation({ 
  strings, 
  className, 
  typeSpeed = 50,
  startDelay = 500,
  onComplete,
}: TypeAnimationProps) {
  const [isComplete, setIsComplete] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={className}
    >
      <ReactTyped
        strings={strings}
        typeSpeed={typeSpeed}
        startDelay={startDelay}
        showCursor={true}
        cursorChar="|"
        loop={false}
        onComplete={() => setIsComplete(true)}
        stopped={isComplete}
      />
    </motion.div>
  )
} 