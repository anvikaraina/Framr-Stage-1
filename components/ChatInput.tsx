'use client';

import { useState } from 'react';

interface ChatInputProps {
  onSend: (message: string) => void;
  placeholder: string;
  disabled?: boolean;
  emptyState?: boolean;
}

export function ChatInput({ onSend, placeholder, disabled = false, emptyState = false }: ChatInputProps) {
  const [value, setValue] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = value.trim();
    if (!trimmed || disabled) return;

    onSend(trimmed);
    setValue('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`w-full rounded-[2rem] border border-slate-200 bg-white shadow-sm ${
        emptyState ? 'p-6' : 'mx-auto max-w-4xl p-3'
      }`}
    >
      <textarea
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder={placeholder}
        rows={emptyState ? 4 : 1}
        className={`w-full resize-none bg-transparent text-slate-700 placeholder:text-slate-500 focus:outline-none ${
          emptyState ? 'min-h-[120px] text-4xl' : 'max-h-36 min-h-[48px] px-2 py-3 text-sm'
        }`}
      />

      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-3 text-slate-400">
          <span className="text-3xl">⊕</span>
          <span className="text-2xl">▣</span>
          <span className="text-2xl">◍</span>
          <span className="mx-1 h-8 w-px bg-slate-200" />
          <span className="rounded-full border border-slate-200 px-4 py-2 text-xl text-slate-700">⚡ Core model active ⌄</span>
        </div>

        <button
          type="submit"
          disabled={disabled || !value.trim()}
          className="h-14 w-14 rounded-full bg-slate-900 text-2xl text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:bg-slate-300"
        >
          ↑
        </button>
      </div>
    </form>
  );
}
