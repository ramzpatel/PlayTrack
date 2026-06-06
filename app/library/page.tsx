'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function Library() {
  const [backlog, setBacklog] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLibrary();
  }, []);

  const fetchLibrary = async () => {
    try {
      // 1. Get the current logged-in user
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        setLoading(false);
        return;
      }

      // 2. Fetch all games linked to this user, including the game details
      const { data, error } = await supabase
        .from('user_games')
        .select(`
          status,
          games (
            id,
            title,
            cover_url
          )
        `)
        .eq('user_id', user.id);

      if (error) throw error;

      if (data) {
        // 3. Filter the games by their status to populate the correct sections
        setBacklog(data.filter(item => item.status === 'backlog'));
      }
    } catch (error) {
      console.error('Error fetching library:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-950 to-black text-white p-6 pb-28 max-w-lg mx-auto font-sans">
      
      {/* Header */}
      <header className="mb-8 mt-4 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-500">
            My Library
          </h1>
          <p className="text-xs text-zinc-500 font-medium mt-1 uppercase tracking-widest">
            {backlog.length} Games Tracked
          </p>
        </div>
        <button onClick={fetchLibrary} className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
        </button>
      </header>

      {/* The Backlog (Live Data) */}
      <section className="mb-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Backlog ({backlog.length})</h2>
        </div>
        
        {loading ? (
          <div className="flex justify-center py-6">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white border-t-transparent"></div>
          </div>
        ) : backlog.length > 0 ? (
          <div className="flex flex-col gap-3">
            {backlog.map((item, index) => (
              <div key={index} className="bg-zinc-900/30 p-4 rounded-2xl flex justify-between items-center border border-zinc-800/40 hover:bg-zinc-800/40 transition-colors cursor-pointer">
                <div className="flex items-center gap-4">
                  {item.games.cover_url ? (
                    <img src={item.games.cover_url} alt={item.games.title} className="w-12 h-16 object-cover rounded-lg" />
                  ) : (
                    <div className="w-12 h-16 bg-zinc-800 rounded-lg flex items-center justify-center text-[8px] uppercase font-bold text-zinc-500">No Art</div>
                  )}
                  <div>
                    <h3 className="font-bold text-sm text-white">{item.games.title}</h3>
                    <p className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1">Status: Backlog</p>
                  </div>
                </div>
                <button className="text-xs font-bold bg-white text-black px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors">Start</button>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-8 text-center border border-dashed border-zinc-800/60 rounded-3xl bg-zinc-900/10">
            <p className="text-sm text-zinc-500 font-medium">Your backlog is empty.</p>
            <p className="text-xs text-zinc-600 mt-1">Go discover some games!</p>
          </div>
        )}
      </section>

    </main>
  );
}