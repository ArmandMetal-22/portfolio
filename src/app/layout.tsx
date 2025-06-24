'use client';

import './styles/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="nav-bar">
          <nav className="flex gap-4 justify-center nav-bar">
            <a href="#home" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#education" className="nav-link">Education</a>
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#misc" className="nav-link">Misc</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
        </header>
        <main className="pt-24">{children}</main>
      </body>
    </html>
  );
}
