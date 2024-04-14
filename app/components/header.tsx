import Link from "next/link";

export function Header() {
  return <header className="navbar navbar-sticky navbar-glass">
    <div className="navbar-start">
      <Link className="navbar-item link" href="/">
        <label className="btn btn-ghost flex cursor-pointer px-2 space-x-3" tabIndex={0}>
          <img src="/logo192.png" alt="avatar" className="h-8" />
          <p className="text-lg">Hanmin Kim</p>
        </label>
      </Link>
    </div>
    <div className="navbar-end">
      <Link className="navbar-item" href="/">Home</Link>
      <Link className="navbar-item" href="/experience">Experience</Link>
      <Link className="navbar-item" href="/projects">Projects</Link>
      <Link className="navbar-item" href="/docs">Docs</Link>
      <Link className="navbar-item" href="/blog">Blog</Link>
    </div>
  </header>;
}