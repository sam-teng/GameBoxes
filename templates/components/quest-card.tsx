import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

interface QuestCardProps {
  title: string
  description: string
  status: "進行中" | "已完成" | "待開始" | "可接取"
  progress: number
  chapter: string
  priority: "高" | "中" | "低"
}

export function QuestCard({ title, description, status, progress, chapter, priority }: QuestCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "進行中":
        return "bg-blue-100 text-blue-800"
      case "已完成":
        return "bg-green-100 text-green-800"
      case "待開始":
        return "bg-gray-100 text-gray-800"
      case "可接取":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "高":
        return "bg-red-100 text-red-800"
      case "中":
        return "bg-orange-100 text-orange-800"
      case "低":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-semibold">{title}</CardTitle>
          <div className="flex space-x-2">
            <Badge className={getStatusColor(status)}>{status}</Badge>
            <Badge className={getPriorityColor(priority)}>{priority}</Badge>
          </div>
        </div>
        <Badge variant="outline" className="w-fit">
          {chapter}
        </Badge>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">{description}</p>
        {progress > 0 && (
          <div className="mb-4">
            <div className="flex justify-between text-sm mb-1">
              <span>進度</span>
              <span>{progress}%</span>
            </div>
            <Progress value={progress} />
          </div>
        )}
        <div className="flex space-x-2">
          {status === "可接取" && (
            <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
              接取任務
            </Button>
          )}
          {status === "進行中" && (
            <Button size="sm" variant="outline">
              查看詳情
            </Button>
          )}
          {status === "待開始" && (
            <Button size="sm" variant="outline" disabled>
              尚未解鎖
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
