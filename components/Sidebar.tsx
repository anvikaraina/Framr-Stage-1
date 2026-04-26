'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { modeOrder, type ChatMode, modeConfig } from '../data/chatModes';

const modeLabel: Record<ChatMode, string> = {
  general: 'General',
  coding: 'Coding',
  math: 'Math',
};

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden h-full w-72 shrink-0 border-r border-slate-200 bg-white/90 p-6 md:flex md:flex-col">
      <div className="mb-8">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">Framr</p>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">AI Workspace</h1>
      </div>

      <nav className="space-y-2">
        {modeOrder.map((mode) => {
          const href = `/chat/${mode}`;
          const active = pathname === href;

          return (
            <Link
              key={mode}
              href={href}
              className={`block rounded-2xl border px-4 py-3 transition-all ${
                active
                  ? 'border-slate-900 bg-slate-900 text-white shadow-sm'
                  : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-100'
              }`}
            >
              <p className="text-sm font-medium">{modeLabel[mode]} Chat</p>
              <p className={`mt-1 text-xs ${active ? 'text-slate-300' : 'text-slate-500'}`}>
                {modeConfig[mode].subtitle}
              </p>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto rounded-2xl border border-slate-200 bg-slate-50 p-4">
        <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Frontend Demo</p>
        <p className="mt-2 text-sm text-slate-600">Mock responses only. No API calls or backend integration.</p>
      </div>
    </aside>
  );
}
