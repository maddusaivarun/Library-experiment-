import { useChat } from 'ai/react';
import { cn } from '@/lib/utils';
import { Send, Bot, User } from 'lucide-react';

export default function ChatPage() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/chat',
  });

  return (
    <div className="flex flex-col h-screen max-w-4xl mx-auto p-4">
      <div className="flex-1 overflow-y-auto space-y-4 mb-4 p-4 rounded-lg bg-slate-50 dark:bg-slate-900">
        {messages.length === 0 && (
          <div className="text-center text-slate-500 mt-20">
            <Bot className="w-12 h-12 mx-auto mb-4 opacity-20" />
            <p>Start a conversation with AI</p>
          </div>
        )}
        {messages.map(m => (
          <div key={m.id} className={cn("flex gap-3 max-w-[80%]", m.role === 'user' ? "ml-auto flex-row-reverse" : "")}>
            <div className={cn("p-2 rounded-full h-8 w-8 flex items-center justify-center shrink-0", m.role === 'user' ? "bg-blue-600 text-white" : "bg-slate-200 dark:bg-slate-700")}>
              {m.role === 'user' ? <User size={16} /> : <Bot size={16} />}
            </div>
            <div className={cn("p-3 rounded-2xl", m.role === 'user' ? "bg-blue-600 text-white rounded-tr-none" : "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-tl-none")}>
              {m.content}
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex gap-2 p-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm">
        <input
          className="flex-1 bg-transparent outline-none px-2 py-2"
          value={input}
          placeholder="Ask me anything..."
          onChange={handleInputChange}
        />
        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors">
          <Send size={20} />
        </button>
      </form>
    </div>
  );
}
