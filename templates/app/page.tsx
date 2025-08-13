import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { MainQuestSection } from "@/components/main-quest-section"
import { DialogueBox } from "@/components/dialogue-box"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300">
      <Header />
      <HeroSection />

      <div className="bg-white/10 backdrop-blur-sm min-h-screen py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <MainQuestSection />
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">對話互動</h2>
              <DialogueBox />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
