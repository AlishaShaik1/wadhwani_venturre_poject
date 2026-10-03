import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.innovexalabs.live'),
  alternates: {
    canonical: '/',
  },
  title: 'Innovexa Ring — Smart Health Ring with Fall Detection, HR & SpO2',
  description: 'Innovexa is a next-generation smart ring featuring 24/7 continuous heart rate monitoring, medical-grade SpO2 sensing, AI-powered fall detection, and an intelligent companion on your finger.',
  icons: {
    icon: [
      { url: '/logo.png?v=2', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    shortcut: '/logo.png?v=2',
    apple: '/logo.png?v=2',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#F4F3EF] text-[#0A0A0A] antialiased">{children}</body>
    </html>
  );
}
