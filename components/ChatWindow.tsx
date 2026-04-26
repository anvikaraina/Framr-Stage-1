'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { ChatInput } from './ChatInput';
import { MessageBubble } from './MessageBubble';
import type { ChatMessage, ChatMode } from '../data/chatModes';
import { modeConfig } from '../data/chatModes';

interface ChatWindowProps {
  mode: ChatMode;
}

const topTabs = ['Core', 'Extended', 'Research'] as const;

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

  const placeholder = useMemo(() => (messages.length ? `Ask in ${config.title.toLowerCase()}...` : 'Ask anything...'), [config.title, messages.length]);

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

  const isEmptyState = messages.length === 0 && !isTyping;

  return (
    <div className="relative flex h-full flex-1 flex-col bg-slate-50">
      {isEmptyState ? (
        <main className="flex flex-1 flex-col items-center px-8 pb-8 pt-10">
          <div className="rounded-full border border-slate-300 bg-white p-1 text-2xl text-slate-600">
            {topTabs.map((tab, index) => (
              <button
                key={tab}
                className={`rounded-full px-6 py-2 ${index === 0 ? 'bg-slate-900 text-white' : 'text-slate-500'}`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="mt-32 text-center">
            <h2 className="text-7xl font-semibold tracking-tight text-slate-900">How can I help you today?</h2>
            <p className="mx-auto mt-6 max-w-4xl text-5xl leading-tight text-slate-400">
              Experience the next generation of creative reasoning and professional workflow.
            </p>
          </div>

          <div className="mt-16 w-full max-w-6xl">
            <ChatInput onSend={handleSend} placeholder={placeholder} disabled={isTyping} emptyState />
          </div>

          <div className="mt-7 grid w-full max-w-6xl grid-cols-4 gap-4">
            {[
              ['Write a report', 'Market analysis template'],
              ['Refactor code', 'Optimize Python script'],
              ['Analyze data', 'Upload CSV or JSON'],
              ['Brainstorm ideas', 'Logo concepts & styles'],
            ].map(([title, subtitle]) => (
              <button key={title} className="rounded-3xl border border-slate-200 bg-white p-5 text-left transition hover:bg-slate-100">
                <p className="text-sm text-slate-400">✦</p>
                <p className="mt-4 text-3xl font-medium text-slate-900">{title}</p>
                <p className="mt-1 text-2xl text-slate-400">{subtitle}</p>
              </button>
            ))}
          </div>

          <div className="mt-auto pt-20 text-xl uppercase tracking-[0.2em] text-slate-400">Privacy &nbsp; Safety &nbsp; Knowledge Base &nbsp; ● Systems Operational</div>
        </main>
      ) : (
        <>
          <header className="border-b border-slate-200 bg-white/75 px-6 py-5 backdrop-blur">
            <h2 className="text-xl font-semibold tracking-tight text-slate-900">{config.title}</h2>
            <p className="mt-1 text-sm text-slate-500">{config.subtitle}</p>
          </header>

          <main className="flex-1 overflow-y-auto px-4 pb-32 pt-6 md:px-8">
            <div className="mx-auto flex w-full max-w-4xl flex-col gap-4">
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
        </>
      )}
    </div>
  );
}
