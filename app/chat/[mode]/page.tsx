import { notFound } from 'next/navigation';
import { ChatLayout } from '../../../components/ChatLayout';
import { isChatMode } from '../../../data/chatModes';

interface ChatModePageProps {
  params: {
    mode: string;
  };
}

export default function ChatModePage({ params }: ChatModePageProps) {
  if (!isChatMode(params.mode)) {
    notFound();
  }

  return <ChatLayout mode={params.mode} />;
}
