import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Heart, MessageCircle, Gift } from "lucide-react"

interface CharacterCardProps {
  name: string
  role: string
  relationship: string
  affection: number
  status: "可對話" | "任務中" | "等待中" | "不可用"
  avatar: string
}

export function CharacterCard({ name, role, relationship, affection, status, avatar }: CharacterCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "可對話":
        return "bg-green-100 text-green-800"
      case "任務中":
        return "bg-blue-100 text-blue-800"
      case "等待中":
        return "bg-yellow-100 text-yellow-800"
      case "不可用":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getAffectionLevel = (affection: number) => {
    if (affection >= 80) return { level: "摯友", color: "text-pink-600" }
    if (affection >= 60) return { level: "好友", color: "text-blue-600" }
    if (affection >= 40) return { level: "普通", color: "text-green-600" }
    return { level: "陌生", color: "text-gray-600" }
  }

  const affectionInfo = getAffectionLevel(affection)

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <div className="text-center mb-4">
          <img
            src={avatar || "/placeholder.svg"}
            alt={name}
            className="w-20 h-20 rounded-full mx-auto mb-3 object-cover"
          />
          <h3 className="font-semibold text-lg">{name}</h3>
          <p className="text-sm text-gray-600">{role}</p>
          <Badge className={getStatusColor(status)} variant="secondary">
            {status}
          </Badge>
        </div>

        <div className="space-y-3">
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm font-medium">關係</span>
              <span className="text-sm text-gray-600">{relationship}</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm font-medium flex items-center">
                <Heart className="w-4 h-4 mr-1" />
                好感度
              </span>
              <span className={`text-sm font-medium ${affectionInfo.color}`}>{affectionInfo.level}</span>
            </div>
            <Progress value={affection} className="h-2" />
            <p className="text-xs text-gray-500 mt-1">{affection}/100</p>
          </div>

          <div className="flex space-x-2 pt-2">
            <Button size="sm" variant="outline" className="flex-1 bg-transparent" disabled={status !== "可對話"}>
              <MessageCircle className="w-4 h-4 mr-1" />
              對話
            </Button>
            <Button size="sm" variant="outline" disabled={status !== "可對話"}>
              <Gift className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
