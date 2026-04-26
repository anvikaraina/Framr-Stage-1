import type { ChatMessage } from '../data/chatModes';

interface MessageBubbleProps {
  message: ChatMessage;
}

export function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.role === 'user';

  return (
    <div className={`flex w-full ${isUser ? 'justify-end' : 'justify-start'} animate-[fadeIn_0.24s_ease-out]`}>
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm md:max-w-[70%] ${
          isUser ? 'bg-slate-900 text-white' : 'border border-slate-200 bg-white text-slate-800'
        }`}
      >
        {message.kind === 'code' ? (
          <div className="overflow-x-auto rounded-xl border border-slate-200 bg-slate-950/95 p-3 text-slate-100">
            <p className="mb-2 text-[10px] uppercase tracking-widest text-slate-400">{message.language ?? 'code'}</p>
            <pre className="text-xs leading-5">
              <code>{message.content}</code>
            </pre>
          </div>
        ) : (
          <p className="whitespace-pre-line">{message.content}</p>
        )}
      </div>
    </div>
  );
}
