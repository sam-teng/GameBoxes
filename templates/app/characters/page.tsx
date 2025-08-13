import { Header } from "@/components/header"
import { CharacterCard } from "@/components/character-card"

export default function CharactersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-300 via-orange-400 to-orange-500">
      <Header />

      <div className="bg-white/10 backdrop-blur-sm min-h-screen py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white mb-8">角色管理</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CharacterCard
              name="艾莉亞"
              role="法師"
              relationship="夥伴"
              affection={85}
              status="可對話"
              avatar="/placeholder.svg?height=80&width=80"
            />
            <CharacterCard
              name="馬庫斯"
              role="戰士"
              relationship="朋友"
              affection={70}
              status="任務中"
              avatar="/placeholder.svg?height=80&width=80"
            />
            <CharacterCard
              name="莉娜"
              role="盜賊"
              relationship="盟友"
              affection={55}
              status="可對話"
              avatar="/placeholder.svg?height=80&width=80"
            />
            <CharacterCard
              name="老賢者"
              role="導師"
              relationship="師父"
              affection={90}
              status="等待中"
              avatar="/placeholder.svg?height=80&width=80"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
