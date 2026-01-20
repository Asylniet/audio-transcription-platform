"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, Play, Pause, Volume2 } from "lucide-react"
import { cn } from "@/lib/utils"
import type { AudioFile } from "@/components/audio-transcription-list"

interface AudioTranscriptionItemProps {
  audio: AudioFile
  isExpanded: boolean
  onToggle: () => void
}

export function AudioTranscriptionItem({ audio, isExpanded, onToggle }: AudioTranscriptionItemProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const audioRef = useRef<HTMLAudioElement>(null)

  // Reset playing state when collapsing
  useEffect(() => {
    if (!isExpanded && isPlaying) {
      setIsPlaying(false)
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.currentTime = 0
      }
    }
  }, [isExpanded, isPlaying])

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime)
    }
  }

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration)
    }
  }

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = Number.parseFloat(e.target.value)
    if (audioRef.current) {
      audioRef.current.currentTime = newTime
      setCurrentTime(newTime)
    }
  }

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00"
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md">
      <button onClick={onToggle} className="w-full px-6 py-5 text-left transition-colors hover:bg-muted/50">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0 flex-1">
            <h3 className="mb-1 text-lg font-medium text-foreground">{audio.title}</h3>
            <p className="mb-2 text-sm text-muted-foreground">{audio.description}</p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Volume2 className="h-3 w-3" />
                {audio.speaker}
              </span>
              <span>{audio.duration}</span>
              <span>{audio.date}</span>
            </div>
          </div>
          <ChevronDown
            className={cn(
              "h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300",
              isExpanded && "rotate-180",
            )}
          />
        </div>
      </button>

      <div
        className={cn(
          "grid transition-all duration-300 ease-in-out",
          isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <div className="border-t border-border bg-muted/20 px-6 py-5">
            {/* Audio Player */}
            <div className="mb-6 rounded-lg bg-card p-4 shadow-sm">
              <div className="mb-3 flex items-center gap-3">
                <Button onClick={togglePlayPause} size="icon" className="h-10 w-10 shrink-0 rounded-full">
                  {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-0.5" />}
                </Button>

                <div className="min-w-0 flex-1">
                  <input
                    type="range"
                    min="0"
                    max={duration || 0}
                    value={currentTime}
                    onChange={handleSeek}
                    className="h-2 w-full cursor-pointer appearance-none rounded-full bg-secondary accent-primary"
                    style={{
                      background: `linear-gradient(to right, hsl(var(--primary)) 0%, hsl(var(--primary)) ${(currentTime / duration) * 100}%, hsl(var(--secondary)) ${(currentTime / duration) * 100}%, hsl(var(--secondary)) 100%)`,
                    }}
                  />
                  <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                    <span>{formatTime(currentTime)}</span>
                    <span>{formatTime(duration)}</span>
                  </div>
                </div>
              </div>

              <audio
                ref={audioRef}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onEnded={() => setIsPlaying(false)}
                src={audio.audioUrl}
                preload="metadata"
              />
            </div>

            {/* Transcript */}
            <div className="rounded-lg bg-card p-5 shadow-sm">
              <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">Транскрипция</h4>
              <div className="space-y-3 text-sm leading-relaxed text-foreground">
                {audio.transcript.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="text-pretty">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
