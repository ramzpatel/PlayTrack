export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-950 to-black text-white p-6 pb-28 max-w-lg mx-auto font-sans">
      
      {/* Header */}
      <header className="flex justify-between items-center mb-10 mt-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-500">
            PlayTrack
          </h1>
          <p className="text-xs text-zinc-500 font-medium mt-1 uppercase tracking-widest">Dashboard</p>
        </div>
        <div className="w-10 h-10 bg-gradient-to-tr from-zinc-800 to-zinc-700 rounded-full flex items-center justify-center font-bold shadow-lg border border-zinc-700/50">
          RP
        </div>
      </header>

      {/* Continue Playing */}
      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4 text-zinc-200">Continue Playing</h2>
        <div className="flex flex-col gap-4">
          
          {/* Card 1 */}
          <div className="bg-zinc-900/50 p-5 rounded-3xl border border-zinc-800/60 backdrop-blur-sm hover:border-zinc-700 transition-all">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-bold text-white">Sector7</h3>
                <p className="text-xs text-zinc-400 mt-1">Web • 3D Platformer</p>
              </div>
              <span className="text-xs font-bold bg-zinc-800 text-zinc-300 px-2 py-1 rounded-md">85%</span>
            </div>
            <div className="w-full bg-zinc-950 rounded-full h-1.5 overflow-hidden">
              <div className="bg-white h-1.5 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]" style={{ width: '85%' }}></div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-zinc-900/50 p-5 rounded-3xl border border-zinc-800/60 backdrop-blur-sm hover:border-zinc-700 transition-all">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-bold text-white">Cyberpunk 2077</h3>
                <p className="text-xs text-zinc-400 mt-1">ROG Ally • RPG</p>
              </div>
              <span className="text-xs font-bold bg-zinc-800 text-zinc-300 px-2 py-1 rounded-md">65%</span>
            </div>
            <div className="w-full bg-zinc-950 rounded-full h-1.5 overflow-hidden">
              <div className="bg-white h-1.5 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]" style={{ width: '65%' }}></div>
            </div>
          </div>

        </div>
      </section>

      {/* Upcoming Releases */}
      <section>
        <h2 className="text-lg font-bold mb-4 text-zinc-200">Upcoming Drops</h2>
        <div className="flex flex-col gap-3">
          
          <div className="bg-zinc-900/30 px-5 py-4 rounded-2xl flex justify-between items-center border border-zinc-800/40">
            <span className="font-semibold text-sm">GTA VI</span>
            <span className="text-xs font-bold bg-white text-black px-3 py-1.5 rounded-full">83 Days</span>
          </div>
          
          <div className="bg-zinc-900/30 px-5 py-4 rounded-2xl flex justify-between items-center border border-zinc-800/40">
            <span className="font-semibold text-sm">Death Stranding 2</span>
            <span className="text-xs font-bold bg-zinc-800 text-zinc-400 px-3 py-1.5 rounded-full">TBA 2025</span>
          </div>

        </div>
      </section>

    </main>
  );
}