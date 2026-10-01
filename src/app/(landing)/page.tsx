import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ArrowRight, Bot, Sparkles, Shield, Zap } from 'lucide-react';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50">
      <nav className="flex items-center justify-between p-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 font-bold text-xl">
          <Bot className="text-blue-600" />
          <span>AI.Core</span>
        </div>
        <div className="flex gap-4">
          <Link href="/chat" className="text-sm font-medium hover:text-blue-600 transition-colors">Login</Link>
          <Link href="/chat" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-all">
            Get Started
          </Link>
        </div>
      </nav>

      <section className="px-6 py-24 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-medium mb-6">
          <Sparkles size={14} />
          <span>Next Gen AI Experience</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-gradient-to-b from-slate-900 to-slate-500 dark:from-white dark:to-slate-400 bg-clip-text text-transparent">
          The future of intelligence <br /> is here.
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto">
          Empower your workflow with our production-ready AI suite. Fast, secure, and incredibly capable.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/chat" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all flex items-center justify-center gap-2 group">
            Start Chatting <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Button variant="outline" className="px-8 py-4 rounded-xl font-semibold border-slate-200 dark:border-slate-800">
            View Documentation
          </Button>
        </div>
      </section>

      <section className="px-6 py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { icon: <Zap className="text-blue-600" />, title: "Ultra Fast", desc: "Real-time streaming responses with minimal latency." },
            { icon: <Shield className="text-blue-600" />, title: "Secure", desc: "Enterprise-grade encryption and data privacy." },
            { icon: <Bot className="text-blue-600" />, title: "Advanced AI", desc: "Powered by the latest GPT-4o architecture." },
          ].map((feat, i) => (
            <div key={i} className="p-8 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
              <div className="mb-4">{feat.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feat.title}</h3>
              <p className="text-slate-600 dark:text-slate-400">{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
