'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleAuth = async (type: 'login' | 'signup') => {
    setLoading(true);
    setMessage('');
    
    try {
      if (type === 'signup') {
        const { error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;
        setMessage('Check your email for the confirmation link!');
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        router.push('/'); // Redirect to dashboard on success
      }
    } catch (error: any) {
      setMessage(error.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-black flex flex-col justify-center items-center p-6 font-sans relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-zinc-800/30 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="w-full max-w-sm relative z-10">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold tracking-tight text-white mb-2">PlayTrack</h1>
          <p className="text-sm text-zinc-500 uppercase tracking-widest font-semibold">Your Gaming Vault</p>
        </div>

        <div className="bg-zinc-900/60 backdrop-blur-xl p-8 rounded-3xl border border-zinc-800/80 shadow-2xl">
          
          <div className="flex flex-col gap-4 mb-8">
            <div>
              <label className="text-[10px] text-zinc-400 uppercase tracking-widest font-bold mb-2 block">Email</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-black/50 border border-zinc-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all"
                placeholder="gamer@domain.com"
              />
            </div>
            
            <div>
              <label className="text-[10px] text-zinc-400 uppercase tracking-widest font-bold mb-2 block">Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-black/50 border border-zinc-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all"
                placeholder="••••••••"
              />
            </div>
          </div>

          {message && <p className="text-xs text-center text-zinc-300 bg-zinc-800/50 p-3 rounded-lg mb-6 border border-zinc-700/50">{message}</p>}

          <div className="flex flex-col gap-3">
            <button 
              onClick={() => handleAuth('login')}
              disabled={loading}
              className="w-full bg-white text-black font-bold py-3.5 rounded-xl text-sm hover:bg-zinc-200 transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)]"
            >
              {loading ? 'Authenticating...' : 'Sign In'}
            </button>
            <button 
              onClick={() => handleAuth('signup')}
              disabled={loading}
              className="w-full bg-transparent border border-zinc-700 text-zinc-300 font-bold py-3.5 rounded-xl text-sm hover:bg-zinc-800 hover:text-white transition-all"
            >
              Create Account
            </button>
          </div>
          
        </div>
      </div>
    </main>
  );
}