import { AudioTranscriptionList } from "@/components/audio-transcription-list"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="mb-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Audio Transcriptions
          </h1>
          <p className="text-balance text-lg text-muted-foreground">
            Browse and listen to audio recordings with synchronized transcripts
          </p>
        </div>

        <AudioTranscriptionList />
      </div>
    </main>
  )
}
