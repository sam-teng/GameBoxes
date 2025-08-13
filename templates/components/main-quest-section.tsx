import { QuestCard } from "@/components/quest-card"

export function MainQuestSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-6">主線任務</h2>
      <div className="space-y-4">
        <QuestCard
          title="尋找失蹤的學者"
          description="調查神秘失蹤案件，追蹤最後的線索。這個任務將帶領你深入探索未知的領域。"
          status="進行中"
          progress={75}
          chapter="第3章"
          priority="高"
        />
        <QuestCard
          title="解開古老的謎題"
          description="破解古代文獻中隱藏的秘密，揭開這個世界的真相。"
          status="待開始"
          progress={0}
          chapter="第4章"
          priority="中"
        />
      </div>
    </div>
  )
}
