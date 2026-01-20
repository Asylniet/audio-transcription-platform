"use client"

import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { AudioTranscriptionList } from "@/components/audio-transcription-list"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FileAudio, Filter, Grid, List, Search } from "lucide-react"
import { useState } from "react"
import { useSearchParams } from "next/navigation"
import Loading from "./loading"

export default function TranscriptionsPage() {
  const [viewMode, setViewMode] = useState<"list" | "grid">("list")
  const searchParams = useSearchParams()

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <div className="lg:pl-64">
        <Header />
        <main className="p-6">
          {/* Page Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-foreground">
                <FileAudio className="h-6 w-6 text-background" />
              </div>
              <div>
                <h1 className="text-2xl font-semibold">Все транскрипции</h1>
                <p className="text-muted-foreground">Просматривайте и управляйте всеми вашими аудио транскрипциями</p>
              </div>
            </div>
          </div>

          {/* Filters and Search */}
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Поиск транскрипций..." className="pl-10" />
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                <Filter className="h-4 w-4" />
                Фильтр
              </Button>
              <div className="flex items-center rounded-lg border border-border p-1">
                <Button
                  variant={viewMode === "list" ? "secondary" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="h-8 w-8 p-0"
                >
                  <List className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "grid" ? "secondary" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="h-8 w-8 p-0"
                >
                  <Grid className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Transcription Categories */}
          <div className="mb-6 flex flex-wrap gap-2">
            {["Все", "Подкасты", "Интервью", "Встречи", "Голосовые заметки", "Лекции"].map((category, index) => (
              <Button
                key={category}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Transcriptions List */}
          <AudioTranscriptionList />
        </main>
      </div>
    </div>
  )
}
