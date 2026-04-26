'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { modeOrder, type ChatMode } from '../data/chatModes';

const modeLabel: Record<ChatMode, string> = {
  general: 'General Chat',
  coding: 'Coding Chat',
  math: 'Math Chat',
};

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden h-full w-80 shrink-0 border-r border-slate-200/80 bg-slate-50 px-5 py-6 md:flex md:flex-col">
      <div>
        <p className="text-3xl font-semibold tracking-tight text-slate-900">Framr</p>
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">AI Workspace</p>
      </div>

      <button className="mt-10 rounded-xl bg-slate-200 px-4 py-3 text-left text-[27px] leading-none text-slate-900 transition hover:bg-slate-300">
        <span className="mr-2">+</span>
        <span className="align-middle text-2xl font-medium">New Chat</span>
      </button>

      <div className="mt-10">
        <p className="mb-4 text-lg font-semibold uppercase tracking-[0.14em] text-slate-400">Recent Activity</p>
        <div className="space-y-2 text-2xl text-slate-700">
          <div className="rounded-xl px-3 py-2">↺ History</div>
          <div className="rounded-xl px-3 py-2">▭ Library</div>
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-slate-300 bg-slate-100 p-4">
        <p className="text-2xl text-slate-600">Project: Design System</p>
        <div className="mt-3 h-2 rounded-full bg-slate-300">
          <div className="h-2 w-2/3 rounded-full bg-slate-900" />
        </div>
      </div>

      <nav className="mt-8 space-y-2">
        {modeOrder.map((mode) => {
          const href = `/chat/${mode}`;
          const active = pathname === href;

          return (
            <Link
              key={mode}
              href={href}
              className={`block rounded-xl border px-4 py-3 text-lg transition ${
                active
                  ? 'border-slate-900 bg-slate-900 text-white'
                  : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-100'
              }`}
            >
              {modeLabel[mode]}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto space-y-5 border-t border-slate-200 pt-6">
        <button className="w-full rounded-xl bg-slate-900 px-4 py-3 text-left text-xl font-medium text-white">Upgrade to Pro ↗</button>
        <div className="space-y-4 text-2xl text-slate-700">
          <p>⚙ Settings</p>
          <p>◉ Account</p>
        </div>
      </div>
    </aside>
  );
}
