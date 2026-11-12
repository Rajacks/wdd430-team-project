import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <Link href="/" className="brand"><span className="brand-mark">S</span><span>StudyPal</span></Link>
      <p>Made for curious minds. © 2025 StudyPal</p>
    </footer>
  );
}
