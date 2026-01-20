"use client"

import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Upload, FileAudio, Link2, Mic, Youtube, Clock, Zap, Languages, CheckCircle2 } from "lucide-react"
import { useState } from "react"

export default function UploadPage() {
  const [isDragging, setIsDragging] = useState(false)

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
                <Upload className="h-6 w-6 text-background" />
              </div>
              <div>
                <h1 className="text-2xl font-semibold">Upload Audio</h1>
                <p className="text-muted-foreground">Upload audio files for automatic transcription</p>
              </div>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {/* Main Upload Area */}
            <div className="lg:col-span-2 space-y-6">
              {/* Drag and Drop Zone */}
              <Card>
                <CardContent className="p-6">
                  <div
                    className={`relative rounded-lg border-2 border-dashed p-12 text-center transition-colors ${
                      isDragging ? "border-foreground bg-muted" : "border-border hover:border-muted-foreground"
                    }`}
                    onDragOver={(e) => {
                      e.preventDefault()
                      setIsDragging(true)
                    }}
                    onDragLeave={() => setIsDragging(false)}
                    onDrop={(e) => {
                      e.preventDefault()
                      setIsDragging(false)
                    }}
                  >
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                      <Upload className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <h3 className="mb-2 text-lg font-medium">Drag and drop your audio files</h3>
                    <p className="mb-4 text-sm text-muted-foreground">
                      or click to browse from your computer
                    </p>
                    <Button>
                      <FileAudio className="mr-2 h-4 w-4" />
                      Select Files
                    </Button>
                    <p className="mt-4 text-xs text-muted-foreground">
                      Supported formats: MP3, WAV, M4A, FLAC, OGG, WMA (Max 500MB)
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Alternative Upload Methods */}
              <div className="grid gap-4 sm:grid-cols-3">
                <Card className="cursor-pointer transition-colors hover:bg-muted/50">
                  <CardContent className="flex flex-col items-center p-6 text-center">
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                      <Link2 className="h-6 w-6" />
                    </div>
                    <h4 className="font-medium">Import from URL</h4>
                    <p className="mt-1 text-xs text-muted-foreground">Paste a link to audio</p>
                  </CardContent>
                </Card>

                <Card className="cursor-pointer transition-colors hover:bg-muted/50">
                  <CardContent className="flex flex-col items-center p-6 text-center">
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                      <Youtube className="h-6 w-6" />
                    </div>
                    <h4 className="font-medium">YouTube Video</h4>
                    <p className="mt-1 text-xs text-muted-foreground">Extract audio from video</p>
                  </CardContent>
                </Card>

                <Card className="cursor-pointer transition-colors hover:bg-muted/50">
                  <CardContent className="flex flex-col items-center p-6 text-center">
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                      <Mic className="h-6 w-6" />
                    </div>
                    <h4 className="font-medium">Record Audio</h4>
                    <p className="mt-1 text-xs text-muted-foreground">Use your microphone</p>
                  </CardContent>
                </Card>
              </div>

              {/* URL Input */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Import from URL</CardTitle>
                  <CardDescription>Paste a direct link to an audio file or YouTube video</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    <Input placeholder="https://example.com/audio.mp3" className="flex-1" />
                    <Button>Import</Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar Info */}
            <div className="space-y-6">
              {/* Features */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Transcription Features</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted">
                      <Zap className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-medium">AI-Powered</h4>
                      <p className="text-sm text-muted-foreground">
                        Advanced speech recognition with 98% accuracy
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted">
                      <Languages className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-medium">50+ Languages</h4>
                      <p className="text-sm text-muted-foreground">
                        Automatic language detection and translation
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted">
                      <Clock className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-medium">Fast Processing</h4>
                      <p className="text-sm text-muted-foreground">
                        Transcribe 1 hour of audio in under 5 minutes
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Usage Stats */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Your Usage</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Hours transcribed</span>
                      <span className="font-medium">12.5 / 50 hrs</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-muted">
                      <div className="h-full w-[25%] rounded-full bg-foreground" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between border-t border-border pt-4">
                    <span className="text-sm text-muted-foreground">Plan</span>
                    <span className="text-sm font-medium">Professional</span>
                  </div>
                  <Button variant="outline" className="w-full bg-transparent">
                    Upgrade Plan
                  </Button>
                </CardContent>
              </Card>

              {/* Tips */}
              <Card className="bg-muted/50">
                <CardContent className="p-4">
                  <h4 className="mb-2 font-medium flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    Pro Tips
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>Use high-quality audio for best results</li>
                    <li>Minimize background noise</li>
                    <li>Speak clearly and at a moderate pace</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
