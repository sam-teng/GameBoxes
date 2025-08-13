"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface DialogueOption {
  id: number
  text: string
  consequence?: string
}

interface DialogueState {
  speaker: string
  avatar: string
  text: string
  options: DialogueOption[]
}

export function DialogueBox() {
  const [currentDialogue, setCurrentDialogue] = useState<DialogueState>({
    speaker: "艾莉亞",
    avatar: "/placeholder.svg?height=60&width=60",
    text: "你好！我聽說你在尋找失蹤的學者。我可能有一些線索可以幫助你。",
    options: [
      { id: 1, text: "請告訴我你知道的一切。", consequence: "獲得重要線索" },
      { id: 2, text: "你為什麼要幫助我？", consequence: "增加好感度" },
      { id: 3, text: "我現在沒時間聊天。", consequence: "減少好感度" },
    ],
  })

  const [selectedOption, setSelectedOption] = useState<number | null>(null)

  const handleOptionSelect = (optionId: number) => {
    setSelectedOption(optionId)
    // 這裡可以添加邏輯來處理對話選擇的後果
    setTimeout(() => {
      // 模擬對話繼續
      setCurrentDialogue({
        speaker: "艾莉亞",
        avatar: "/placeholder.svg?height=60&width=60",
        text: "謝謝你的回應。讓我們繼續我們的對話...",
        options: [
          { id: 4, text: "繼續對話", consequence: "推進劇情" },
          { id: 5, text: "結束對話", consequence: "返回遊戲" },
        ],
      })
      setSelectedOption(null)
    }, 1500)
  }

  return (
    <Card className="max-w-4xl mx-auto bg-white/95 backdrop-blur-sm">
      <CardContent className="p-6">
        <div className="flex items-start space-x-4 mb-6">
          <Avatar className="w-16 h-16">
            <AvatarImage src={currentDialogue.avatar || "/placeholder.svg"} alt={currentDialogue.speaker} />
            <AvatarFallback>{currentDialogue.speaker[0]}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h3 className="font-semibold text-lg mb-2">{currentDialogue.speaker}</h3>
            <div className="bg-gray-50 rounded-lg p-4 relative">
              <div className="absolute -left-2 top-4 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-gray-50"></div>
              <p className="text-gray-800 leading-relaxed">{currentDialogue.text}</p>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="font-medium text-gray-700">選擇你的回應：</h4>
          {currentDialogue.options.map((option) => (
            <Button
              key={option.id}
              variant={selectedOption === option.id ? "default" : "outline"}
              className="w-full justify-start text-left h-auto p-4 bg-orange-50 hover:bg-orange-100 border-orange-200"
              onClick={() => handleOptionSelect(option.id)}
              disabled={selectedOption !== null}
            >
              <div>
                <div className="font-medium">{option.text}</div>
                {option.consequence && <div className="text-sm text-gray-600 mt-1">結果：{option.consequence}</div>}
              </div>
            </Button>
          ))}
        </div>

        {selectedOption && (
          <div className="mt-4 p-3 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800">處理中...</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
