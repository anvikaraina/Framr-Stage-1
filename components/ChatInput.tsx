'use client';

import { useState } from 'react';

interface ChatInputProps {
  onSend: (message: string) => void;
  placeholder: string;
  disabled?: boolean;
}

export function ChatInput({ onSend, placeholder, disabled = false }: ChatInputProps) {
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
      className="mx-auto w-full max-w-4xl rounded-2xl border border-slate-200 bg-white/95 p-3 shadow-lg shadow-slate-200/40 backdrop-blur"
    >
      <div className="flex items-end gap-3">
        <textarea
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder={placeholder}
          rows={1}
          className="max-h-36 min-h-[48px] flex-1 resize-none bg-transparent px-2 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none"
        />
        <button
          type="submit"
          disabled={disabled || !value.trim()}
          className="rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:bg-slate-300"
        >
          Send
        </button>
      </div>
    </form>
  );
}
