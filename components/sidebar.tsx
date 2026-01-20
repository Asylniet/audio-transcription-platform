"use client"

import { Home, FileAudio, Settings, Upload, Clock, Archive, Menu } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: "Главная", href: "/", icon: Home },
    { name: "Транскрипции", href: "/transcriptions", icon: FileAudio },
    { name: "Загрузить", href: "/upload", icon: Upload },
    { name: "Недавние", href: "/recent", icon: Clock },
    { name: "Архив", href: "/archive", icon: Archive },
    { name: "Настройки", href: "/settings", icon: Settings },
  ]

  return (
    <>
      {/* Mobile menu button */}
      <div className="fixed left-4 top-4 z-50 lg:hidden">
        <Button variant="outline" size="icon" onClick={() => setIsOpen(!isOpen)} className="bg-background">
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      {/* Mobile backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 transform border-r border-border bg-card transition-transform duration-200 ease-in-out lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex h-16 items-center border-b border-border px-6">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground">
                <FileAudio className="h-5 w-5 text-background" />
              </div>
              <span className="text-lg font-semibold">AudioScribe</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1 px-3 py-4">
            {navigation.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-muted text-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  {item.name}
                </Link>
              )
            })}
          </nav>

          {/* Storage info */}
          <div className="border-t border-border p-4">
            <div className="rounded-lg bg-muted p-3">
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Хранилище</span>
                <span className="font-medium">2.4 ГБ / 10 ГБ</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-background">
                <div className="h-full w-[24%] rounded-full bg-foreground" />
              </div>
              <p className="mt-2 text-xs text-muted-foreground">Использовано 24% хранилища</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
