"use client"

import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, Play, MoreHorizontal, FileAudio, Calendar, Download, Share2, Trash2 } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const recentItems = [
  {
    id: 1,
    title: "Ежедневный стендап - 15 января",
    duration: "15:32",
    date: "Сегодня, 9:30",
    status: "completed",
    type: "Встреча",
  },
  {
    id: 2,
    title: "Обзор продукта",
    duration: "45:18",
    date: "Сегодня, 14:15",
    status: "completed",
    type: "Встреча",
  },
  {
    id: 3,
    title: "Интервью с клиентом - Сара",
    duration: "32:45",
    date: "Вчера, 11:00",
    status: "completed",
    type: "Интервью",
  },
  {
    id: 4,
    title: "Еженедельный подкаст по планированию",
    duration: "58:22",
    date: "Вчера, 16:30",
    status: "processing",
    type: "Подкаст",
  },
  {
    id: 5,
    title: "Голосовая заметка - Идеи",
    duration: "3:45",
    date: "2 дня назад",
    status: "completed",
    type: "Голосовая заметка",
  },
  {
    id: 6,
    title: "Звонок по продажам - Acme Corp",
    duration: "28:10",
    date: "2 дня назад",
    status: "completed",
    type: "Звонок",
  },
  {
    id: 7,
    title: "Лекция - Основы машинного обучения",
    duration: "1:15:30",
    date: "3 дня назад",
    status: "completed",
    type: "Лекция",
  },
  {
    id: 8,
    title: "Подкаст Эпизод 42 - Технологические тренды",
    duration: "52:18",
    date: "4 дня назад",
    status: "completed",
    type: "Подкаст",
  },
]

export default function RecentPage() {
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
                <Clock className="h-6 w-6 text-background" />
              </div>
              <div>
                <h1 className="text-2xl font-semibold">Недавняя активность</h1>
                <p className="text-muted-foreground">Ваши недавно транскрибированные и открытые файлы</p>
              </div>
            </div>
          </div>

          {/* Today Section */}
          <div className="mb-8">
            <h2 className="mb-4 flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <Calendar className="h-4 w-4" />
              Сегодня
            </h2>
            <div className="space-y-3">
              {recentItems
                .filter((item) => item.date.includes("Сегодня"))
                .map((item) => (
                  <Card key={item.id} className="transition-colors hover:bg-muted/50">
                    <CardContent className="flex items-center gap-4 p-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-muted">
                        <FileAudio className="h-6 w-6 text-muted-foreground" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="truncate font-medium">{item.title}</h3>
                          {item.status === "processing" && (
                            <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
                              Обработка
                            </span>
                          )}
                        </div>
                        <div className="mt-1 flex items-center gap-3 text-sm text-muted-foreground">
                          <span>{item.duration}</span>
                          <span className="h-1 w-1 rounded-full bg-muted-foreground" />
                          <span>{item.type}</span>
                          <span className="h-1 w-1 rounded-full bg-muted-foreground" />
                          <span>{item.date}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon" className="h-9 w-9">
                          <Play className="h-4 w-4" />
                        </Button>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-9 w-9">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Download className="mr-2 h-4 w-4" />
                              Скачать
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Share2 className="mr-2 h-4 w-4" />
                              Поделиться
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-destructive">
                              <Trash2 className="mr-2 h-4 w-4" />
                              Удалить
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>

          {/* Yesterday Section */}
          <div className="mb-8">
            <h2 className="mb-4 flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <Calendar className="h-4 w-4" />
              Вчера
            </h2>
            <div className="space-y-3">
              {recentItems
                .filter((item) => item.date.includes("Вчера"))
                .map((item) => (
                  <Card key={item.id} className="transition-colors hover:bg-muted/50">
                    <CardContent className="flex items-center gap-4 p-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-muted">
                        <FileAudio className="h-6 w-6 text-muted-foreground" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="truncate font-medium">{item.title}</h3>
                          {item.status === "processing" && (
                            <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
                              Обработка
                            </span>
                          )}
                        </div>
                        <div className="mt-1 flex items-center gap-3 text-sm text-muted-foreground">
                          <span>{item.duration}</span>
                          <span className="h-1 w-1 rounded-full bg-muted-foreground" />
                          <span>{item.type}</span>
                          <span className="h-1 w-1 rounded-full bg-muted-foreground" />
                          <span>{item.date}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon" className="h-9 w-9">
                          <Play className="h-4 w-4" />
                        </Button>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-9 w-9">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Download className="mr-2 h-4 w-4" />
                              Скачать
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Share2 className="mr-2 h-4 w-4" />
                              Поделиться
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-destructive">
                              <Trash2 className="mr-2 h-4 w-4" />
                              Удалить
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>

          {/* Earlier Section */}
          <div>
            <h2 className="mb-4 flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <Calendar className="h-4 w-4" />
              Ранее на этой неделе
            </h2>
            <div className="space-y-3">
              {recentItems
                .filter((item) => item.date.includes("дня назад"))
                .map((item) => (
                  <Card key={item.id} className="transition-colors hover:bg-muted/50">
                    <CardContent className="flex items-center gap-4 p-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-muted">
                        <FileAudio className="h-6 w-6 text-muted-foreground" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="truncate font-medium">{item.title}</h3>
                        </div>
                        <div className="mt-1 flex items-center gap-3 text-sm text-muted-foreground">
                          <span>{item.duration}</span>
                          <span className="h-1 w-1 rounded-full bg-muted-foreground" />
                          <span>{item.type}</span>
                          <span className="h-1 w-1 rounded-full bg-muted-foreground" />
                          <span>{item.date}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon" className="h-9 w-9">
                          <Play className="h-4 w-4" />
                        </Button>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-9 w-9">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Download className="mr-2 h-4 w-4" />
                              Скачать
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Share2 className="mr-2 h-4 w-4" />
                              Поделиться
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-destructive">
                              <Trash2 className="mr-2 h-4 w-4" />
                              Удалить
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
