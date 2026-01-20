"use client"

import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  Archive, 
  FileAudio, 
  Search, 
  RotateCcw, 
  Trash2, 
  MoreHorizontal,
  FolderArchive,
  AlertCircle
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useSearchParams } from "next/navigation"
import { Suspense } from "react"
import Loading from "./loading"

const archivedItems = [
  {
    id: 1,
    title: "Q3 Marketing Strategy Discussion",
    duration: "1:02:15",
    archivedDate: "Dec 28, 2025",
    originalDate: "Oct 15, 2025",
    size: "48.2 MB",
  },
  {
    id: 2,
    title: "Product Launch Preparation",
    duration: "45:30",
    archivedDate: "Dec 20, 2025",
    originalDate: "Sep 22, 2025",
    size: "35.1 MB",
  },
  {
    id: 3,
    title: "Annual Review - Engineering Team",
    duration: "1:30:00",
    archivedDate: "Dec 15, 2025",
    originalDate: "Aug 30, 2025",
    size: "72.8 MB",
  },
  {
    id: 4,
    title: "Customer Feedback Session - Beta Users",
    duration: "52:18",
    archivedDate: "Dec 10, 2025",
    originalDate: "Jul 18, 2025",
    size: "40.5 MB",
  },
  {
    id: 5,
    title: "Interview - Senior Developer Candidate",
    duration: "38:45",
    archivedDate: "Dec 5, 2025",
    originalDate: "Jun 25, 2025",
    size: "29.8 MB",
  },
  {
    id: 6,
    title: "Webinar Recording - AI Best Practices",
    duration: "1:15:22",
    archivedDate: "Nov 28, 2025",
    originalDate: "May 12, 2025",
    size: "58.3 MB",
  },
]

export default function ArchivePage() {
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
                <Archive className="h-6 w-6 text-background" />
              </div>
              <div>
                <h1 className="text-2xl font-semibold">Archive</h1>
                <p className="text-muted-foreground">Manage your archived transcriptions</p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mb-6 grid gap-4 sm:grid-cols-3">
            <Card>
              <CardContent className="flex items-center gap-4 p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                  <FolderArchive className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-2xl font-semibold">6</p>
                  <p className="text-sm text-muted-foreground">Archived files</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center gap-4 p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                  <FileAudio className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-2xl font-semibold">284.7 MB</p>
                  <p className="text-sm text-muted-foreground">Storage used</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center gap-4 p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                  <AlertCircle className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-2xl font-semibold">90 days</p>
                  <p className="text-sm text-muted-foreground">Auto-delete policy</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Search and Actions */}
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search archived files..." className="pl-10" />
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                <RotateCcw className="h-4 w-4" />
                Restore All
              </Button>
              <Button variant="outline" size="sm" className="gap-2 text-destructive hover:text-destructive bg-transparent">
                <Trash2 className="h-4 w-4" />
                Empty Archive
              </Button>
            </div>
          </div>

          {/* Archive List */}
          <div className="space-y-3">
            {archivedItems.map((item) => (
              <Card key={item.id} className="transition-colors hover:bg-muted/50">
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-muted">
                    <FileAudio className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="truncate font-medium">{item.title}</h3>
                    <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
                      <span>{item.duration}</span>
                      <span className="h-1 w-1 rounded-full bg-muted-foreground" />
                      <span>{item.size}</span>
                      <span className="h-1 w-1 rounded-full bg-muted-foreground" />
                      <span>Archived {item.archivedDate}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                      <RotateCcw className="h-4 w-4" />
                      Restore
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-9 w-9">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <RotateCcw className="mr-2 h-4 w-4" />
                          Restore
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive">
                          <Trash2 className="mr-2 h-4 w-4" />
                          Delete permanently
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Info Banner */}
          <Card className="mt-6 bg-muted/50">
            <CardContent className="flex items-start gap-3 p-4">
              <AlertCircle className="h-5 w-5 shrink-0 text-muted-foreground" />
              <div className="text-sm">
                <p className="font-medium">Archive retention policy</p>
                <p className="text-muted-foreground">
                  Files in the archive will be automatically deleted after 90 days. Restore files to keep them permanently or upgrade your plan for extended archive storage.
                </p>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}

export function Loading() {
  return null
}
