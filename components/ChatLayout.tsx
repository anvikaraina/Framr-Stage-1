import { Sidebar } from './Sidebar';
import { ChatWindow } from './ChatWindow';
import type { ChatMode } from '../data/chatModes';

interface ChatLayoutProps {
  mode: ChatMode;
}

export function ChatLayout({ mode }: ChatLayoutProps) {
  return (
    <div className="flex h-screen w-full bg-slate-50">
      <Sidebar />
      <ChatWindow mode={mode} />
    </div>
  );
}
