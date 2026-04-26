import { notFound } from 'next/navigation';
import { ChatLayout } from '../../../components/ChatLayout';
import { isChatMode, modeOrder } from '../../../data/chatModes';

interface ChatModePageProps {
  params: {
    mode: string;
  };
}

export const dynamicParams = false;

export function generateStaticParams() {
  return modeOrder.map((mode) => ({ mode }));
}

export default function ChatModePage({ params }: ChatModePageProps) {
  if (!isChatMode(params.mode)) {
    notFound();
  }

  return <ChatLayout mode={params.mode} />;
}
