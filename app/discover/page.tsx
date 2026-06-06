export default function Discover() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-950 to-black text-white p-6 pb-28 max-w-lg mx-auto font-sans">
      
      {/* Header */}
      <header className="mb-8 mt-4">
        <h1 className="text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-500">
          Discover
        </h1>
        <p className="text-xs text-zinc-500 font-medium mt-1 uppercase tracking-widest">Search & Explore</p>
      </header>

      {/* Search Bar */}
      <div className="relative mb-10">
        <input 
          type="text" 
          placeholder="Search games, developers, genres..." 
          className="w-full bg-zinc-900/50 border border-zinc-800/60 rounded-2xl py-4 pl-12 pr-4 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all backdrop-blur-sm"
        />
        <svg className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>

      {/* Categories/Filters (Horizontal Scroll) */}
      <section className="mb-10">
        <h2 className="text-xs font-bold text-zinc-400 mb-4 uppercase tracking-widest">Browse Genres</h2>
        {/* scrollbar-hide is a utility we'll assume is standard, or it just gracefully degrades */}
        <div className="flex gap-3 overflow-x-auto pb-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {['Action RPG', 'Soulslike', 'Dark Fantasy', 'Indie', '3D Platformer', 'FPS'].map((genre) => (
            <button key={genre} className="whitespace-nowrap px-5 py-2.5 bg-zinc-900/40 border border-zinc-800/50 rounded-full text-sm font-medium hover:bg-zinc-100 hover:text-black transition-all">
              {genre}
            </button>
          ))}
        </div>
      </section>

      {/* Trending Grid */}
      <section>
        <h2 className="text-xs font-bold text-zinc-400 mb-4 uppercase tracking-widest">Trending Now</h2>
        <div className="grid grid-cols-2 gap-4">
          
          {/* Game Card 1 */}
          <div className="bg-zinc-900/30 rounded-3xl overflow-hidden border border-zinc-800/40 hover:border-zinc-500 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all cursor-pointer group">
            <div className="h-36 bg-gradient-to-br from-zinc-800 to-zinc-900 relative overflow-hidden">
              {/* Abstract dark placeholder for game art */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-500"></div>
              <div className="absolute bottom-2 right-2 bg-black/90 backdrop-blur-md border border-zinc-800 px-2 py-1 rounded-md text-[10px] font-bold text-white shadow-lg">
                96
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-sm truncate text-white">Elden Ring</h3>
              <p className="text-[10px] text-zinc-500 mt-1 uppercase tracking-wider">FromSoftware</p>
            </div>
          </div>

          {/* Game Card 2 */}
          <div className="bg-zinc-900/30 rounded-3xl overflow-hidden border border-zinc-800/40 hover:border-zinc-500 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all cursor-pointer group">
            <div className="h-36 bg-gradient-to-br from-zinc-900 to-black relative overflow-hidden flex items-center justify-center">
              <span className="text-[10px] text-zinc-700 font-mono tracking-widest uppercase rotate-[-15deg] opacity-50">Dark Deco</span>
              <div className="absolute bottom-2 right-2 bg-black/90 backdrop-blur-md border border-zinc-800 px-2 py-1 rounded-md text-[10px] font-bold text-white shadow-lg">
                TBA
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-sm truncate text-white">The Bearer</h3>
              <p className="text-[10px] text-zinc-500 mt-1 uppercase tracking-wider">Indie • Soulslike</p>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}