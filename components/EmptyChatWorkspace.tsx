export function EmptyChatWorkspace() {
  const quickActions = [
    { title: 'Write a report', subtitle: 'Market analysis template', icon: '✦' },
    { title: 'Refactor code', subtitle: 'Optimize Python script', icon: '⌘' },
    { title: 'Analyze data', subtitle: 'Upload CSV or JSON', icon: '✣' },
    { title: 'Brainstorm ideas', subtitle: 'Logo concepts & styles', icon: '◔' },
  ];

  return (
    <div className="flex h-screen bg-[#f7f7f8]">
      <aside className="hidden w-80 shrink-0 border-r border-slate-200 px-5 py-5 md:flex md:flex-col">
        <div className="flex items-center gap-3">
          <div className="grid h-12 w-12 place-content-center rounded-xl border bg-white">⬡</div>
          <div>
            <p className="text-3xl font-semibold leading-none">Framr</p>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">AI Workspace</p>
          </div>
        </div>

        <button className="mt-10 w-full rounded-xl bg-slate-200 px-4 py-3 text-left text-lg font-medium text-slate-900">
          + <span className="ml-2">New Chat</span>
        </button>

        <div className="mt-10">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-400">Recent Activity</p>
          <p className="mt-7 text-2xl text-slate-700">↺ <span className="ml-3">History</span></p>
          <p className="mt-6 text-2xl text-slate-700">▭ <span className="ml-3">Library</span></p>
        </div>

        <div className="mt-9 rounded-2xl border border-slate-300 bg-[#f8f8f9] p-4">
          <p className="text-xl text-slate-600">Project: Design System</p>
          <div className="mt-3 h-2 rounded-full bg-slate-200">
            <div className="h-full w-2/3 rounded-full bg-slate-900" />
          </div>
        </div>

        <div className="mt-auto border-t border-slate-200 pt-6">
          <button className="w-full rounded-xl bg-slate-900 px-4 py-3 text-left text-lg font-medium text-white">Upgrade to Pro ↗</button>
          <p className="mt-5 text-lg text-slate-700">⚙ <span className="ml-2">Settings</span></p>
          <p className="mt-4 text-lg text-slate-700">◉ <span className="ml-2">Account</span></p>
        </div>
      </aside>

      <main className="flex flex-1 flex-col items-center px-4 pb-8 pt-10 md:px-10">
        <div className="rounded-full border border-slate-300 bg-white p-1 text-sm md:text-xl">
          <button className="rounded-full bg-slate-900 px-6 py-2 text-white">Core</button>
          <button className="px-6 py-2 text-slate-500">Extended</button>
          <button className="px-6 py-2 text-slate-500">Research</button>
        </div>

        <h1 className="mt-20 text-center text-4xl font-semibold tracking-tight md:mt-32 md:text-7xl">How can I help you today?</h1>
        <p className="mt-6 max-w-4xl text-center text-lg text-slate-400 md:text-4xl">
          Experience the next generation of creative reasoning and professional workflow.
        </p>

        <div className="mt-12 w-full max-w-5xl rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-7">
          <p className="text-2xl text-slate-500 md:text-4xl">Ask anything...</p>
          <div className="mt-10 flex items-center justify-between">
            <div className="flex items-center gap-3 text-slate-400 md:text-3xl">
              <span>⊕</span>
              <span>▣</span>
              <span>◍</span>
              <span className="mx-1 h-8 w-px bg-slate-200" />
              <span className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-700 md:text-xl">⚡ Core model active ⌄</span>
            </div>
            <button className="h-12 w-12 rounded-full bg-slate-900 text-xl text-white md:h-14 md:w-14 md:text-2xl">↑</button>
          </div>
        </div>

        <div className="mt-6 grid w-full max-w-5xl gap-3 md:grid-cols-4 md:gap-4">
          {quickActions.map((action) => (
            <button key={action.title} className="rounded-3xl border border-slate-200 bg-white p-5 text-left transition hover:bg-slate-100">
              <p className="text-slate-400">{action.icon}</p>
              <p className="mt-4 text-2xl font-medium text-slate-900">{action.title}</p>
              <p className="text-base text-slate-400">{action.subtitle}</p>
            </button>
          ))}
        </div>

        <p className="mt-auto pt-16 text-center text-[10px] uppercase tracking-[0.2em] text-slate-400 md:text-sm">
          Privacy &nbsp; Safety &nbsp; Knowledge Base &nbsp; <span className="text-emerald-500">●</span> Systems Operational
        </p>
      </main>
    </div>
  );
}
