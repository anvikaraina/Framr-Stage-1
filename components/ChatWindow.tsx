'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { ChatInput } from './ChatInput';
import { MessageBubble } from './MessageBubble';
import type { ChatMessage, ChatMode } from '../data/chatModes';
import { modeConfig } from '../data/chatModes';

interface ChatWindowProps {
  mode: ChatMode;
}

export function ChatWindow({ mode }: ChatWindowProps) {
  const config = modeConfig[mode];
  const [messages, setMessages] = useState<ChatMessage[]>(config.initialMessages);
  const [isTyping, setIsTyping] = useState(false);
  const [responseIndex, setResponseIndex] = useState(0);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setMessages(config.initialMessages);
    setIsTyping(false);
    setResponseIndex(0);
  }, [config]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const placeholder = useMemo(() => `Ask in ${config.title.toLowerCase()}...`, [config.title]);

  const handleSend = (content: string) => {
    setMessages((prev) => [
      ...prev,
      {
        id: `u-${Date.now()}`,
        role: 'user',
        content,
      },
    ]);

    setIsTyping(true);

    window.setTimeout(() => {
      const nextResponse = config.mockResponses[responseIndex % config.mockResponses.length];
      setMessages((prev) => [
        ...prev,
        {
          ...nextResponse,
          id: `${nextResponse.id}-${Date.now()}`,
        },
      ]);
      setResponseIndex((prev) => prev + 1);
      setIsTyping(false);
    }, 900 + Math.random() * 500);
  };

  return (
    <div className="relative flex h-full flex-1 flex-col">
      <header className="border-b border-slate-200 bg-white/75 px-6 py-5 backdrop-blur">
        <h2 className="text-xl font-semibold tracking-tight text-slate-900">{config.title}</h2>
        <p className="mt-1 text-sm text-slate-500">{config.subtitle}</p>
      </header>

      <main className="flex-1 overflow-y-auto px-4 pb-32 pt-6 md:px-8">
        <div className="mx-auto flex w-full max-w-4xl flex-col gap-4">
          {messages.length <= 1 && (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white/70 p-5">
              <p className="text-xs font-medium uppercase tracking-wider text-slate-500">Try one of these</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {config.quickPrompts.map((prompt) => (
                  <button
                    key={prompt}
                    type="button"
                    onClick={() => handleSend(prompt)}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-600 transition hover:border-slate-400 hover:text-slate-900"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>
          )}

          {messages.map((message) => (
            <MessageBubble key={message.id} message={message} />
          ))}

          {isTyping && (
            <div className="w-fit rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-500 shadow-sm">
              <span className="inline-flex items-center gap-1">
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 [animation-delay:-0.3s]" />
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 [animation-delay:-0.15s]" />
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400" />
              </span>
            </div>
          )}
          <div ref={bottomRef} />
        </div>
      </main>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-50 via-slate-50/85 to-transparent px-4 pb-6 pt-16 md:px-8">
        <div className="pointer-events-auto">
          <ChatInput onSend={handleSend} placeholder={placeholder} disabled={isTyping} />
        </div>
      </div>
    </div>
  );
}
