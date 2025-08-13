import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { QuestCard } from "@/components/quest-card"
import { CharacterCard } from "@/components/character-card"
import { DialogueBox } from "@/components/dialogue-box"

export function GameDashboard() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Story Progress Overview */}
        <Card className="mb-8 bg-white/95 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-gray-800">劇情進度總覽</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold mb-2">主線進度</h3>
                <Progress value={65} className="mb-2" />
                <p className="text-sm text-gray-600">第3章：神秘的訊息 (65%)</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">支線完成度</h3>
                <Progress value={40} className="mb-2" />
                <p className="text-sm text-gray-600">已完成 8/20 個支線任務</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">角色好感度</h3>
                <Progress value={75} className="mb-2" />
                <p className="text-sm text-gray-600">平均好感度：良好</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Main Quests Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">主線任務</h2>
            <div className="space-y-4">
              <QuestCard
                title="尋找失蹤的學者"
                description="調查神秘失蹤案件，追蹤最後的線索"
                status="進行中"
                progress={75}
                chapter="第3章"
                priority="高"
              />
              <QuestCard
                title="解開古老的謎題"
                description="破解古代文獻中隱藏的秘密"
                status="待開始"
                progress={0}
                chapter="第4章"
                priority="中"
              />
            </div>
          </div>

          {/* Side Quests Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">支線任務</h2>
            <div className="space-y-4">
              <QuestCard
                title="幫助村民找回丟失的物品"
                description="協助村民尋找被盜的珍貴物品"
                status="可接取"
                progress={0}
                chapter="支線"
                priority="低"
              />
              <QuestCard
                title="收集稀有材料"
                description="為煉金術師收集特殊的煉金材料"
                status="進行中"
                progress={60}
                chapter="支線"
                priority="中"
              />
            </div>
          </div>
        </div>

        {/* Characters Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">角色管理</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

        {/* Dialogue System */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">對話系統</h2>
          <DialogueBox />
        </div>
      </div>
    </div>
  )
}
