"use client"

import { useState } from 'react'
import { TypeAnimation } from './type-animation'

export function TerminalCommands() {
  const [isFirstCommandComplete, setIsFirstCommandComplete] = useState(false)

  return (
    <>
      <div className="flex items-start gap-2">
        <div className="flex gap-2">
          <span className="text-primary">~/portfolio</span>
          <span className="text-muted-foreground">$</span>
        </div>
        <TypeAnimation
          strings={[
            'whoami\n\nRafael Porto\n\nDesenvolvedor full-stack em formação,\napaixonado por tecnologia.'
          ]}
          typeSpeed={40}
          className="whitespace-pre-line"
          onComplete={() => setIsFirstCommandComplete(true)}
        />
      </div>

      {isFirstCommandComplete && (
        <div className="flex items-center gap-2">
          <span className="text-primary">~/portfolio</span>
          <span className="text-muted-foreground">$</span>
          <span className="w-2 h-4 bg-primary animate-pulse" />
        </div>
      )}
    </>
  )
} 