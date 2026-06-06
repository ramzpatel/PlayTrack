export default function Home() {
  return (
    <main className="min-h-screen p-8 max-w-5xl mx-auto font-sans">
      
      {/* Header */}
      <header className="flex justify-between items-center mb-12 mt-8">
        <h1 className="text-4xl font-bold tracking-tight">PlayTrack</h1>
        <div className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center font-bold">
          RP
        </div>
      </header>

      {/* Continue Playing Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-zinc-100">Continue Playing</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Card 1 */}
          <div className="bg-zinc-900 p-6 rounded-3xl border border-zinc-800 flex flex-col justify-between hover:bg-zinc-800 transition-colors cursor-pointer">
            <div>
              <h3 className="text-xl font-bold mb-1">Sector7</h3>
              <p className="text-sm text-zinc-400 mb-4">Web • 3D Platformer</p>
            </div>
            <div className="w-full bg-zinc-950 rounded-full h-2 mt-4">
              <div className="bg-white h-2 rounded-full" style={{ width: '85%' }}></div>
            </div>
            <p className="text-xs text-right mt-2 text-zinc-500">85% Complete</p>
          </div>

          {/* Card 2 */}
          <div className="bg-zinc-900 p-6 rounded-3xl border border-zinc-800 flex flex-col justify-between hover:bg-zinc-800 transition-colors cursor-pointer">
            <div>
              <h3 className="text-xl font-bold mb-1">Cyberpunk 2077</h3>
              <p className="text-sm text-zinc-400 mb-4">ROG Ally • RPG</p>
            </div>
            <div className="w-full bg-zinc-950 rounded-full h-2 mt-4">
              <div className="bg-white h-2 rounded-full" style={{ width: '65%' }}></div>
            </div>
            <p className="text-xs text-right mt-2 text-zinc-500">65% Complete</p>
          </div>

        </div>
      </section>

      {/* Upcoming Releases Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-zinc-100">Upcoming</h2>
        <div className="flex flex-col gap-3">
          
          <div className="bg-zinc-900 px-6 py-4 rounded-2xl flex justify-between items-center border border-zinc-800 hover:border-zinc-600 transition-colors">
            <span className="font-medium">GTA VI</span>
            <span className="text-sm bg-zinc-800 px-3 py-1 rounded-full text-zinc-300">83 Days</span>
          </div>
          
          <div className="bg-zinc-900 px-6 py-4 rounded-2xl flex justify-between items-center border border-zinc-800 hover:border-zinc-600 transition-colors">
            <span className="font-medium">Death Stranding 2</span>
            <span className="text-sm bg-zinc-800 px-3 py-1 rounded-full text-zinc-300">TBA 2025</span>
          </div>

        </div>
      </section>

    </main>
  );
}