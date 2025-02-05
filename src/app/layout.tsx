import type { Metadata } from 'next';
import { Geist, Geist_Mono, Nunito_Sans, Rubik } from 'next/font/google';
import './globals.css';

const rubik = Rubik({
  variable: '--font-rubik-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'WatchIt',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rubik.variable} antialiased bg-zinc-950 text-zinc-50 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
