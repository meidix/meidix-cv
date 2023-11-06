"use client"

import { useState, useEffect } from "react"

export default function TypeWriter({
  text,
  delay,
  startingDelay,
}: {
  text: string
  delay: number
  startingDelay: number
}) {
  const [currentText, setCurrentText] = useState(" ")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [textComplete, setTextComplete] = useState(false)

  useEffect(() => {
    if (currentIndex === text.length) {
      const timeout = setTimeout(() => setTextComplete(true), startingDelay)
      return () => clearTimeout(timeout)
    } else if (currentIndex === 0) {
      const timeout = setTimeout(() => setTextComplete(false), startingDelay)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, startingDelay])

  useEffect(() => {
    if (currentIndex < text.length && !textComplete) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex])
        setCurrentIndex(prevIndex => prevIndex + 1)
      }, delay)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, delay, text, textComplete])

  useEffect(() => {
    if (textComplete && currentIndex != 0) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText.slice(0, -1))
        setCurrentIndex(prevIndex => prevIndex - 1)
      }, delay)

      return () => clearTimeout(timeout)
    }
  }, [textComplete, currentIndex, delay, text])

  return (
    <div className="w-full text-9xl font-bold font-mono text-center">
      {currentText}
    </div>
  )
}
