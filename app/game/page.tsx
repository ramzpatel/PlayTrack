import Link from 'next/link';

export default function GameDetail() {
  return (
    <main className="min-h-screen bg-black text-white pb-28 font-sans">
      
      {/* Hero Image Area */}
      <div className="relative h-80 bg-gradient-to-br from-zinc-700 to-zinc-900">
        
        {/* Back Button */}
        <Link href="/discover" className="absolute top-12 left-6 w-10 h-10 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10 z-10 hover:bg-black/60 transition-all">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
        
        {/* Gradient Overlay for seamless blend into the black background */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
      </div>

      <div className="px-6 -mt-20 relative z-10 max-w-lg mx-auto">
        
        {/* Game Title & Studio */}
        <h1 className="text-4xl font-extrabold tracking-tight mb-1 text-white shadow-black drop-shadow-md">Elden Ring</h1>
        <p className="text-xs text-zinc-400 font-bold tracking-widest uppercase">FromSoftware • Bandai Namco</p>
        
        {/* Action Buttons (The core of PlayTrack) */}
        <div className="grid grid-cols-3 gap-3 mt-8 mb-10">
          
          <button className="flex flex-col items-center justify-center py-4 bg-white text-black rounded-2xl font-bold text-sm hover:bg-zinc-200 transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
            Played
          </button>
          
          <button className="flex flex-col items-center justify-center py-4 bg-zinc-900/80 backdrop-blur-md border border-zinc-800 rounded-2xl font-bold text-sm text-white hover:bg-zinc-800 transition-all">
            <svg className="w-6 h-6 mb-1 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Playing
          </button>
          
          <button className="flex flex-col items-center justify-center py-4 bg-zinc-900/80 backdrop-blur-md border border-zinc-800 rounded-2xl font-bold text-sm text-white hover:bg-zinc-800 transition-all">
            <svg className="w-6 h-6 mb-1 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Wishlist
          </button>

        </div>

        {/* Game Info Grid */}
        <div className="grid grid-cols-2 gap-3 mb-10">
          
          <div className="bg-zinc-900/40 p-4 rounded-2xl border border-zinc-800/50">
            <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold mb-1.5">Release Date</p>
            <p className="text-sm font-semibold text-zinc-200">Feb 25, 2022</p>
          </div>
          
          <div className="bg-zinc-900/40 p-4 rounded-2xl border border-zinc-800/50 flex justify-between items-center">
            <div>
              <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold mb-1.5">Metacritic</p>
              <p className="text-sm font-semibold text-zinc-200">Must Play</p>
            </div>
            <div className="w-10 h-10 bg-green-500 text-black font-extrabold text-sm flex items-center justify-center rounded-xl shadow-[0_0_15px_rgba(34,197,94,0.3)]">
              96
            </div>
          </div>
          
          <div className="bg-zinc-900/40 p-4 rounded-2xl border border-zinc-800/50 col-span-2">
            <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold mb-2.5">Platforms</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 bg-zinc-800/80 rounded-lg text-xs font-semibold text-zinc-300">PC</span>
              <span className="px-3 py-1.5 bg-zinc-800/80 rounded-lg text-xs font-semibold text-zinc-300">PS5</span>
              <span className="px-3 py-1.5 bg-zinc-800/80 rounded-lg text-xs font-semibold text-zinc-300">Xbox Series X</span>
            </div>
          </div>
          
        </div>

        {/* Description Section */}
        <div>
          <h2 className="text-sm font-bold mb-3 uppercase tracking-widest text-zinc-400">About</h2>
          <p className="text-sm text-zinc-300 leading-relaxed">
            Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between. A vast world where open fields with a variety of situations and huge dungeons with complex and three-dimensional designs are seamlessly connected.
          </p>
        </div>

      </div>
    </main>
  );
}