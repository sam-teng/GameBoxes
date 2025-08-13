export function HeroSection() {
  return (
    <section className="relative py-20 px-4">
      {/* Decorative dots */}
      <div className="absolute left-8 top-20 flex space-x-2">
        <div className="w-3 h-3 bg-white/100 rounded-full"></div>
        <div className="w-3 h-3 bg-white/90 rounded-full"></div>
        <div className="w-3 h-3 bg-white/80 rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative">
        {/* Flowing decorative elements */}
        <div className="absolute -top-10 left-1/4 w-32 h-8 bg-white/90 rounded-full transform -rotate-12"></div>
        <div className="absolute top-5 right-1/4 w-24 h-6 bg-white/60 rounded-full transform rotate-12"></div>
        <div className="absolute -bottom-5 left-1/3 w-28 h-7 bg-white/50 rounded-full transform -rotate-6"></div>
        <div className="absolute bottom-10 right-1/3 w-20 h-5 bg-white/70 rounded-full transform rotate-8"></div>

        {/* Main logo/title */}
        <div className="relative z-10">
          <div className="inline-block mb-8">
            <div className="relative">
              {/* Hat shape */}
              <div className="w-48 h-32 bg-gray-800 rounded-t-full mx-auto relative">
                <div className="absolute inset-x-4 top-4 h-20 bg-gray-700 rounded-t-full"></div>
                <div className="absolute inset-x-8 top-8 h-12 bg-gray-600 rounded-t-full"></div>
                {/* Hat band */}
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-gray-900 rounded-full"></div>
                {/* Text on hat */}
                <div className="absolute bottom-2 left-0 right-0 text-white text-xl font-script">Game Box</div>
              </div>
              {/* Hat brim */}
              <div className="w-64 h-6 bg-gray-800 rounded-full mx-auto -mt-2"></div>
            </div>
          </div>

          <h1 className="text-8xl font-black text-gray-800 mb-4 tracking-tight">這裡要放什麼</h1>

          <div className="text-2xl font-light text-gray-700 tracking-[0.5em] mb-8">2 0 2 5</div>
        </div>
      </div>

      {/* Timeline indicators */}
      <div className="flex justify-center space-x-8 mt-16">
        <div className="text-center">
          <div className="bg-white/90 rounded-full px-4 py-2 text-sm font-medium text-gray-800 mb-2">下滑玩遊戲</div>
          <div className="text-white/80 text-sm">已解鎖</div>
        </div>
      </div>
    </section>
  )
}
