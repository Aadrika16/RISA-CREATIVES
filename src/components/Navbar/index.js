import "./index.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
        <span className="logo-icon">✦</span>
        <span>RISA CREATIVES</span>
      </div>

      <nav>
        <a href="/">Services</a>
        <a href="/">Process</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
      </nav>

      <div className="nav-right">
        <button className="theme-btn">☾</button>

        <button className="start-btn">
          Get Started →
        </button>
      </div>
    </header>
  );
}