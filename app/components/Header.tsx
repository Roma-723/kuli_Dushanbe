import Link from 'next/link';
import './Header.css';

export default function Header() {
  return (
    <>
      <div className="accent-bar"></div>
      <header className="header">
        <div className="header-content">
          <div className="brand">
            <img src="/image.png" alt="Logo" className="logo" />
            <span className="brand-name">Brend</span>
          </div>
          <nav className="nav">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/about" className="nav-link">About</Link>
            <Link href="/gallery" className="nav-link">Gallery</Link>
            <Link href="/attractions " className="nav-link">Attractions </Link>
            <Link href="/contact" className="nav-link">Contact</Link>
          </nav>
        </div>
      </header>
    </>
  );
}
