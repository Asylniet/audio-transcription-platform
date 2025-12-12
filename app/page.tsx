import { AudioTranscriptionList } from "@/components/audio-transcription-list"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { StatsCards } from "@/components/stats-cards"

export default function Home() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />

      <div className="flex flex-1 flex-col lg:pl-64">
        <Header />

        <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8">
              <h1 className="mb-2 text-3xl font-semibold tracking-tight text-foreground">Transcriptions</h1>
              <p className="text-muted-foreground">Manage and review your audio transcriptions</p>
            </div>

            <StatsCards />

            <div className="mt-8">
              <AudioTranscriptionList />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
