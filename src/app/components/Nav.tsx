import Link from "next/link";

export default function Nav() {
  return (
    <>
      <div className="nav-signature">
        <h1 className="nav-font">ALICIA GUSTAFSSON</h1>
      </div>
      <nav className="nav">
        <ul>
          <li className="nav-list">
            <Link href="/">Om</Link>
          </li>
          <li className="nav-list">
            <Link href="/portfolio">Arbete</Link>
          </li>
          <li className="nav-list">
            <Link href="/contact">Kontakt</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
