import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed bottom-0 w-full border-t border-zinc-800 bg-black/80 backdrop-blur-md pb-safe z-50">
      <div className="flex justify-around items-center h-16 max-w-md mx-auto px-6">
        
        {/* Home Button */}
        <Link href="/" className="flex flex-col items-center justify-center w-full text-zinc-400 hover:text-white transition-colors">
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <span className="text-[10px] font-medium tracking-wide">Home</span>
        </Link>

        {/* Discover Button */}
        <Link href="/discover" className="flex flex-col items-center justify-center w-full text-zinc-400 hover:text-white transition-colors">
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <span className="text-[10px] font-medium tracking-wide">Discover</span>
        </Link>

        {/* Library Button */}
        <Link href="/library" className="flex flex-col items-center justify-center w-full text-zinc-400 hover:text-white transition-colors">
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
          </svg>
          <span className="text-[10px] font-medium tracking-wide">Library</span>
        </Link>

        {/* Stats Button */}
        <Link href="/stats" className="flex flex-col items-center justify-center w-full text-zinc-400 hover:text-white transition-colors">
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="text-[10px] font-medium tracking-wide">Stats</span>
        </Link>

      </div>
    </nav>
  );
}