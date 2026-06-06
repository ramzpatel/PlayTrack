'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function Discover() {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [savingId, setSavingId] = useState<number | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setLoading(true);
    try {
      const res = await fetch('/api/games', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ searchQuery }),
      });
      const data = await res.json();
      setResults(data);
    } catch (error) {
      console.error("Search failed:", error);
    } finally {
      setLoading(false);
    }
  };

  const getImageUrl = (url?: string) => {
    if (!url) return null;
    return `https:${url.replace('t_thumb', 't_cover_big')}`;
  };

  // The Magic Function: Saves the game to Supabase
  const saveToLibrary = async (game: any) => {
    setSavingId(game.id);
    try {
      // 1. Get the current logged-in user
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        alert("Please log in first!");
        setSavingId(null);
        return;
      }

      // 2. Save the game details to the cache table
      await supabase.from('games').upsert({
        id: game.id,
        title: game.name,
        cover_url: getImageUrl(game.cover?.url),
      });

      // 3. Link the game to the user's specific library
      const { error } = await supabase.from('user_games').insert({
        user_id: user.id,
        game_id: game.id,
        status: 'backlog'
      });

      if (error) {
        alert("This game is already in your library!");
      } else {
        alert(`${game.name} added to your Backlog!`);
      }
    } catch (error) {
      console.error("Save failed:", error);
    } finally {
      setSavingId(null);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-950 to-black text-white p-6 pb-28 max-w-lg mx-auto font-sans">
      
      <header className="mb-8 mt-4">
        <h1 className="text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-500">
          Discover
        </h1>
        <p className="text-xs text-zinc-500 font-medium mt-1 uppercase tracking-widest">Search & Explore</p>
      </header>

      <form onSubmit={handleSearch} className="relative mb-10">
        <input 
          type="text" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for any game..." 
          className="w-full bg-zinc-900/50 border border-zinc-800/60 rounded-2xl py-4 pl-12 pr-4 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all backdrop-blur-sm shadow-xl"
        />
        <svg className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <button type="submit" className="hidden">Search</button>
      </form>

      <section>
        <h2 className="text-xs font-bold text-zinc-400 mb-4 uppercase tracking-widest">
          {results.length > 0 ? 'Search Results' : 'Search The Database'}
        </h2>
        
        {loading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white border-t-transparent"></div>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            {results.length > 0 ? (
              results.map((game) => (
                <div key={game.id} className="bg-zinc-900/30 rounded-3xl overflow-hidden border border-zinc-800/40 transition-all group flex flex-col">
                  <div className="h-48 bg-gradient-to-br from-zinc-800 to-zinc-900 relative overflow-hidden">
                    {game.cover?.url ? (
                      <img 
                        src={getImageUrl(game.cover.url) || ''} 
                        alt={game.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-[10px] text-zinc-600 uppercase font-bold tracking-widest">No Art</div>
                    )}
                  </div>
                  <div className="p-4 flex flex-col flex-grow justify-between gap-3">
                    <div>
                      <h3 className="font-bold text-sm truncate text-white">{game.name}</h3>
                      <p className="text-[10px] text-zinc-500 mt-1 uppercase tracking-wider truncate">
                        {game.platforms?.[0]?.name || 'Various Platforms'}
                      </p>
                    </div>
                    <button 
                      onClick={() => saveToLibrary(game)}
                      disabled={savingId === game.id}
                      className="w-full py-2 bg-white text-black text-xs font-bold rounded-xl hover:bg-zinc-200 transition-colors"
                    >
                      {savingId === game.id ? 'Saving...' : '+ Backlog'}
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-2 flex flex-col items-center justify-center py-12 text-center border border-dashed border-zinc-800/60 rounded-3xl bg-zinc-900/10">
                <p className="text-sm text-zinc-500 font-medium">Type a game name and press Enter to search millions of titles.</p>
              </div>
            )}
          </div>
        )}
      </section>

    </main>
  );
}