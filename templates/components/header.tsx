import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">T4</span>
            </div>
            <span className="text-lg font-semibold text-gray-900">Game Box</span>
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-gray-900 font-medium">
              主線任務
            </Link>
            <Link href="/side-quests" className="text-gray-700 hover:text-gray-900 font-medium">
              支線任務
            </Link>
            <Link href="/characters" className="text-gray-700 hover:text-gray-900 font-medium">
              角色
            </Link>
            <Link href="/story" className="text-gray-700 hover:text-gray-900 font-medium">
              劇情進度
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
          
          </div>
        </div>
      </div>
    </header>
  )
}
