import './globals.css'; // <-- Updated: Changed path to reference globals.css in the same directory
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Tailwind classes are now available globally */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}