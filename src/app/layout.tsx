// app/layout.tsx
import Link from 'next/link';
import './globals.css'; // Ensure Tailwind is imported

export const metadata = {
  title: 'Armand Portfolio',
  description: 'A simple portfolio site',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <header className="nav-bar p-4 shadow">
          <nav className="nav-bar flex gap-4">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/about" className="nav-link">About</Link>
          </nav>
        </header>
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
