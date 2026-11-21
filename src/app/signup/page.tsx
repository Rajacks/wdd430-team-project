'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { User, Mail, Lock, ArrowRight } from 'lucide-react';

export default function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(false);

    if (password.length < 6) {
      setMessage('Password must be at least 6 characters.');
      return;
    }

    setMessage('Account created successfully! (Backend integration coming soon)');
    setIsSuccess(true);
  };

  return (
    <div className="landing-page login-page bg-[#F8F7F3] w-full">
      {/* Header wrapper to ensure it stretches */}
      <div className="w-full">
        <Header />
      </div>
      
      <main className="login-main w-full">
        <div className="max-w-5xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-gray-100">
          
          {/* Left Side: Custom Branding Panel */}
          <div className="md:w-5/12 bg-[#172B4D] p-10 flex flex-col justify-between text-white relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C4A46B] rounded-full opacity-10 blur-3xl -mr-20 -mt-20"></div>
            <div className="relative z-10">
              <span className="text-5xl mb-6 block">✦</span>
              <h2 className="text-3xl font-bold leading-tight mb-4">Join the circle.</h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Create your StudyPal account and start connecting with classmates who share your academic goals.
              </p>
            </div>
            
            <div className="relative z-10 mt-12 pt-6 border-t border-white/10">
              <p className="text-xs text-slate-400">Already have an account?</p>
              <Link href="/login" className="inline-flex items-center gap-2 text-[#C4A46B] font-bold mt-2 hover:text-white transition">
                Sign in here <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Side: Custom Form */}
          <div className="md:w-7/12 p-10 bg-white">
            <div className="mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-[#8A6D3B]">Create Account</span>
              <h1 className="text-2xl font-bold text-[#172B4D] mt-2">Get started with StudyPal</h1>
            </div>

            {message && (
              <div className={`mb-6 p-4 rounded-xl text-sm font-medium border ${
                isSuccess ? 'bg-green-50 border-green-200 text-green-800' : 'bg-red-50 border-red-200 text-red-800'
              }`}>
                {message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-[#172B4D] mb-2">Full Name</label>
                <div className="relative">
                  <User className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#C4A46B] focus:bg-white outline-none transition"
                    placeholder="Emmanuel Ndogo"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#172B4D] mb-2">Email Address</label>
                <div className="relative">
                  <Mail className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#C4A46B] focus:bg-white outline-none transition"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#172B4D] mb-2">Password</label>
                <div className="relative">
                  <Lock className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#C4A46B] focus:bg-white outline-none transition"
                    placeholder="••••••••"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-2 ml-1">Must be at least 6 characters.</p>
              </div>

              <button
                type="submit"
                className="w-full bg-[#C4A46B] text-[#172B4D] font-bold py-3 px-4 rounded-xl hover:bg-[#d4b57e] transition shadow-md mt-4"
              >
                Create Account
              </button>
            </form>
          </div>
        </div>
      </main>

      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}