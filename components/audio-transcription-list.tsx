"use client"

import { useState } from "react"
import { AudioTranscriptionItem } from "@/components/audio-transcription-item"

export interface AudioFile {
  id: string
  title: string
  speaker: string
  duration: string
  date: string
  audioUrl: string
  transcript: string
  description: string
}

const audioFiles: AudioFile[] = [
  {
    id: "1",
    title: "The Future of Artificial Intelligence",
    speaker: "Dr. Sarah Chen",
    duration: "12:34",
    date: "March 15, 2024",
    audioUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_DCs1b45rqyYp03XCgJ5238zj0RIo/BPq2FAASBMdJO6wvf7Be-r/public/1.mp3",
    description: "A deep dive into the evolving landscape of AI technology and its impact on society",
    transcript: `Welcome everyone to today's discussion on artificial intelligence. I'm Dr. Sarah Chen, and I've been researching AI for over fifteen years now.

The field of artificial intelligence has undergone remarkable transformation in recent years. What was once confined to academic laboratories has now become an integral part of our daily lives. From the moment we wake up and check our smartphones to the time we go to bed, AI systems are working behind the scenes to make our lives easier and more efficient.

One of the most significant developments has been in the area of natural language processing. The ability of machines to understand and generate human language has opened up countless possibilities. We're seeing applications in customer service, content creation, translation services, and even in healthcare where AI can help analyze medical records and assist in diagnosis.

However, with great power comes great responsibility. As AI becomes more sophisticated, we must address important questions about ethics, privacy, and the potential impact on employment. It's crucial that we develop these technologies thoughtfully, with consideration for their broader societal implications.

Looking ahead, I believe we're only scratching the surface of what's possible. The next decade will bring innovations we can barely imagine today. But success will require collaboration between technologists, policymakers, and the public to ensure that AI benefits everyone.`,
  },
  {
    id: "2",
    title: "Climate Change and Sustainable Solutions",
    speaker: "Prof. Michael Rodriguez",
    duration: "15:22",
    date: "March 10, 2024",
    audioUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_DCs1b45rqyYp03XCgJ5238zj0RIo/4dkr_GoIyHKbeAMy26AIao/public/2.mp3",
    description: "Exploring practical approaches to environmental sustainability and climate action",
    transcript: `Good afternoon. I'm Professor Michael Rodriguez, and today I want to talk about one of the most pressing issues of our time: climate change.

The evidence is overwhelming and undeniable. Global temperatures are rising, ice caps are melting, and we're seeing more frequent extreme weather events. But rather than dwelling on the problems, I want to focus on solutions.

Renewable energy has made incredible strides in the past decade. Solar and wind power are now cost-competitive with fossil fuels in many regions. Battery technology is improving rapidly, making it feasible to store renewable energy for use when the sun isn't shining or the wind isn't blowing.

Beyond energy, we need to rethink how we approach transportation, agriculture, and urban planning. Electric vehicles are becoming mainstream. Vertical farming and regenerative agriculture practices can reduce emissions while producing food more efficiently. Cities are redesigning infrastructure to be more walkable and bike-friendly.

Individual actions matter too. Reducing consumption, choosing sustainable products, and supporting companies with strong environmental policies all make a difference. But systemic change requires policy action and corporate accountability.

The challenge is enormous, but so is human ingenuity. If we act decisively and work together, we can create a sustainable future for generations to come. The time for action is now.`,
  },
  {
    id: "3",
    title: "The Art of Minimalist Design",
    speaker: "Emma Williams",
    duration: "9:47",
    date: "March 5, 2024",
    audioUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_DCs1b45rqyYp03XCgJ5238zj0RIo/BPq2FAASBMdJO6wvf7Be-r/public/1.mp3",
    description: "Understanding the principles and philosophy behind minimalist design",
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
    speaker: "Dr. James Park",
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
