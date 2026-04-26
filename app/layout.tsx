import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Framr Empty Chat Workspace',
  description: 'TSX + Tailwind empty chat interface ready for Vercel',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
