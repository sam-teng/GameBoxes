import { Header } from "@/components/header"
import { QuestCard } from "@/components/quest-card"

export default function SideQuestsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-300 via-orange-400 to-orange-500">
      <Header />

      <div className="bg-white/10 backdrop-blur-sm min-h-screen py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white mb-8">支線任務</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <QuestCard
              title="幫助村民找回丟失的物品"
              description="協助村民尋找被盜的珍貴物品，調查可疑的線索"
              status="可接取"
              progress={0}
              chapter="支線"
              priority="低"
            />
            <QuestCard
              title="收集稀有材料"
              description="為煉金術師收集特殊的煉金材料，探索危險的區域"
              status="進行中"
              progress={60}
              chapter="支線"
              priority="中"
            />
            <QuestCard
              title="解救被困的商人"
              description="營救被盜賊團困住的商人，獲得豐厚的報酬"
              status="可接取"
              progress={0}
              chapter="支線"
              priority="中"
            />
            <QuestCard
              title="古老遺跡探索"
              description="探索神秘的古代遺跡，尋找失落的寶藏"
              status="已完成"
              progress={100}
              chapter="支線"
              priority="高"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
