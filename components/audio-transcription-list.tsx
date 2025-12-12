"use client"

import { useState } from "react"
import { AudioTranscriptionItem } from "@/components/audio-transcription-item"

export interface AudioFile {
  id: string
  title: string
  duration: string
  date: string
  audioUrl: string
  transcript: string
  description: string
}

const audioFiles: AudioFile[] = [
  {
    id: "1",
    title: "Клиент в сумме за 50 тысяч",
    duration: "00:14",
    date: "12.12.2025",
    audioUrl: "/1.mp3",
    description: "Еще один клиент от друга",
    transcript: `аа короче бізде бір клиент бар менің досым ғой баяғы айрат деген он короче в сумме сейчас за 50 тысяч продает наш функционал короче ол бізге 15 мың и за разработку деді да 50 мың теңге алады бізге қосу үшін деп ші`,
  },
  {
    id: "2",
    title: "Подключение трех магазинов",
    duration: "00:06",
    date: "11.12.2025",
    audioUrl: "/2.mp3",
    description: "Подключение 3 магазинов с пользой",
    transcript: `сүйтіп бізге короче 3 магазин қосты кажется есть  походу  хоть какая-то польза в этом`,
  },
  {
    id: "3",
    title: "Заказ на разработку сайта по ТЗ",
    duration: "9:47",
    date: "11.12.2025",
    audioUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_DCs1b45rqyYp03XCgJ5238zj0RIo/BPq2FAASBMdJO6wvf7Be-r/public/1.mp3",
    description: "О поступлении заказа на разработку сайта",
    transcript: `Hello, I'm Emma Williams, a designer and minimalism advocate. Today I want to share my thoughts on minimalist design and why I believe it's more relevant than ever.

Minimalism isn't about having less for the sake of having less. It's about intentionality. It's about removing the unnecessary so that the necessary can speak. In design, this means stripping away decorative elements that don't serve a functional purpose.

The minimalist approach has roots in various cultural traditions, from Japanese aesthetics to Scandinavian design. What these traditions share is a respect for simplicity, functionality, and the inherent beauty of materials and forms.

In our current era of information overload and constant stimulation, minimalist design provides a sense of calm and clarity. White space isn't empty space—it's breathing room for the eye and mind. Clean typography, limited color palettes, and thoughtful composition guide the viewer's attention to what truly matters.

But minimalism isn't a one-size-fits-all solution. The key is finding the right balance for your specific context and audience. Sometimes bold and complex designs are exactly what's needed. The goal is always to communicate effectively and create meaningful experiences.

Whether in graphic design, product design, or interior spaces, minimalist principles can help us create work that's timeless, elegant, and human-centered. It's not about following a trend—it's about thoughtful decision-making in everything we create.`,
  },
  {
    id: "4",
    title: "Understanding Quantum Computing",
    duration: "18:15",
    date: "February 28, 2024",
    audioUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_DCs1b45rqyYp03XCgJ5238zj0RIo/4dkr_GoIyHKbeAMy26AIao/public/2.mp3",
    description: "An accessible introduction to quantum computing and its potential applications",
    transcript: `Hi everyone, I'm Dr. James Park, and I specialize in quantum computing. I know quantum physics can sound intimidating, but I want to make this as accessible as possible.

Classical computers, the ones we use every day, process information in bits—ones and zeros. They're incredibly powerful, but they have limitations. Quantum computers work differently. They use quantum bits, or qubits, which can exist in multiple states simultaneously thanks to a property called superposition.

Think of it like this: if a classical bit is like a coin that's either heads or tails, a qubit is like a coin spinning in the air—it's both heads and tails until it lands. This allows quantum computers to process vast amounts of possibilities at once.

Another key principle is entanglement, where qubits become connected in ways that have no classical equivalent. When qubits are entangled, measuring one instantly affects the others, regardless of distance. Einstein famously called this "spooky action at a distance."

So what can we actually do with quantum computers? They have the potential to revolutionize cryptography, drug discovery, financial modeling, and optimization problems. For example, they could help us design new materials, simulate molecular interactions, or solve complex logistical challenges.

We're still in the early stages. Current quantum computers are noisy and require extremely cold temperatures to operate. But progress is accelerating. Within the next decade, we may see quantum computers tackling problems that would take classical computers millennia to solve.

The quantum revolution is coming, and it's going to change computing as we know it.`,
  },
]

export function AudioTranscriptionList() {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <div className="space-y-4">
      {audioFiles.map((audio) => (
        <AudioTranscriptionItem
          key={audio.id}
          audio={audio}
          isExpanded={expandedId === audio.id}
          onToggle={() => toggleExpand(audio.id)}
        />
      ))}
    </div>
  )
}
