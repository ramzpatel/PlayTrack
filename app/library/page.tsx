export default function Library() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-950 to-black text-white p-6 pb-28 max-w-lg mx-auto font-sans">
      
      {/* Header */}
      <header className="mb-8 mt-4 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-500">
            My Library
          </h1>
          <p className="text-xs text-zinc-500 font-medium mt-1 uppercase tracking-widest">123 Games Tracked</p>
        </div>
        <div className="flex gap-2">
          <button className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" /></svg>
          </button>
        </div>
      </header>

      {/* Currently Playing (Horizontal Scroll) */}
      <section className="mb-10">
        <h2 className="text-xs font-bold text-zinc-400 mb-4 uppercase tracking-widest">Currently Playing (2)</h2>
        <div className="flex gap-4 overflow-x-auto pb-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          
          {/* Active Card 1 */}
          <div className="min-w-[240px] bg-zinc-900/40 p-4 rounded-3xl border border-zinc-800/60">
            <h3 className="font-bold text-white mb-1">Cyberpunk 2077</h3>
            <p className="text-[10px] text-zinc-500 uppercase tracking-widest mb-4">65% • ROG Ally</p>
            <div className="w-full bg-zinc-950 rounded-full h-1.5 mb-2">
              <div className="bg-white h-1.5 rounded-full" style={{ width: '65%' }}></div>
            </div>
            <p className="text-[10px] text-right text-zinc-400 font-bold">42 hrs</p>
          </div>

          {/* Active Card 2 */}
          <div className="min-w-[240px] bg-zinc-900/40 p-4 rounded-3xl border border-zinc-800/60">
            <h3 className="font-bold text-white mb-1">Sector7</h3>
            <p className="text-[10px] text-zinc-500 uppercase tracking-widest mb-4">85% • Web</p>
            <div className="w-full bg-zinc-950 rounded-full h-1.5 mb-2">
              <div className="bg-white h-1.5 rounded-full" style={{ width: '85%' }}></div>
            </div>
            <p className="text-[10px] text-right text-zinc-400 font-bold">12 hrs</p>
          </div>

        </div>
      </section>

      {/* The Backlog */}
      <section className="mb-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Backlog (41)</h2>
          <span className="text-[10px] text-zinc-500 font-medium">Est. 1,240 hrs</span>
        </div>
        <div className="flex flex-col gap-3">
          
          <div className="bg-zinc-900/30 p-4 rounded-2xl flex justify-between items-center border border-zinc-800/40 hover:bg-zinc-800/40 transition-colors cursor-pointer">
            <div>
              <h3 className="font-bold text-sm text-white">The Witcher 4</h3>
              <p className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1">PC</p>
            </div>
            <button className="text-xs font-bold bg-white text-black px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors">Start</button>
          </div>

          <div className="bg-zinc-900/30 p-4 rounded-2xl flex justify-between items-center border border-zinc-800/40 hover:bg-zinc-800/40 transition-colors cursor-pointer">
            <div>
              <h3 className="font-bold text-sm text-white">Hollow Knight: Silksong</h3>
              <p className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1">Nintendo Switch</p>
            </div>
            <button className="text-xs font-bold bg-white text-black px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors">Start</button>
          </div>

        </div>
      </section>

      {/* Completed Grid */}
      <section>
        <h2 className="text-xs font-bold text-zinc-400 mb-4 uppercase tracking-widest">Completed (80)</h2>
        <div className="grid grid-cols-2 gap-3">
          
          <div className="bg-zinc-900/20 border border-zinc-800/40 p-4 rounded-2xl flex flex-col items-center justify-center text-center opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
            <h3 className="font-bold text-sm text-white mb-1">Elden Ring</h3>
            <div className="flex text-yellow-500 text-xs gap-0.5 mt-1">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
          </div>

          <div className="bg-zinc-900/20 border border-zinc-800/40 p-4 rounded-2xl flex flex-col items-center justify-center text-center opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
            <h3 className="font-bold text-sm text-white mb-1">God of War</h3>
            <div className="flex text-yellow-500 text-xs gap-0.5 mt-1">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
          </div>

          <div className="bg-zinc-900/20 border border-zinc-800/40 p-4 rounded-2xl flex flex-col items-center justify-center text-center opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
            <h3 className="font-bold text-sm text-white mb-1">Red Dead 2</h3>
            <div className="flex text-yellow-500 text-xs gap-0.5 mt-1">
              <span>★</span><span>★</span><span>★</span><span>★</span><span className="text-zinc-600">★</span>
            </div>
          </div>

          <div className="bg-zinc-900/20 border border-zinc-800/40 p-4 rounded-2xl flex flex-col items-center justify-center text-center opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
            <h3 className="font-bold text-sm text-white mb-1">Starfield</h3>
            <div className="flex text-yellow-500 text-xs gap-0.5 mt-1">
              <span>★</span><span>★</span><span>★</span><span className="text-zinc-600">★</span><span className="text-zinc-600">★</span>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}