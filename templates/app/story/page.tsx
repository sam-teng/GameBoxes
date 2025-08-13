import { Header } from "@/components/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function StoryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-300 via-orange-400 to-orange-500">
      <Header />

      <div className="bg-white/10 backdrop-blur-sm min-h-screen py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white mb-8">劇情進度</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Card className="bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg">主線進度</CardTitle>
              </CardHeader>
              <CardContent>
                <Progress value={65} className="mb-2" />
                <p className="text-sm text-gray-600">第3章：神秘的訊息 (65%)</p>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg">支線完成度</CardTitle>
              </CardHeader>
              <CardContent>
                <Progress value={40} className="mb-2" />
                <p className="text-sm text-gray-600">已完成 8/20 個支線任務</p>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg">角色好感度</CardTitle>
              </CardHeader>
              <CardContent>
                <Progress value={75} className="mb-2" />
                <p className="text-sm text-gray-600">平均好感度：良好</p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl">故事時間軸</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div>
                    <h3 className="font-semibold">第1章：冒險的開始</h3>
                    <p className="text-sm text-gray-600">已完成 - 遇見了重要的夥伴</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div>
                    <h3 className="font-semibold">第2章：初次試煉</h3>
                    <p className="text-sm text-gray-600">已完成 - 證明了自己的實力</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <div>
                    <h3 className="font-semibold">第3章：神秘的訊息</h3>
                    <p className="text-sm text-gray-600">進行中 - 正在調查神秘事件</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                  <div>
                    <h3 className="font-semibold">第4章：真相大白</h3>
                    <p className="text-sm text-gray-600">未開始 - 即將揭開所有謎團</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
