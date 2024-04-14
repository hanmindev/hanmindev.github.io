import Link from "next/link";
import Logo from "../../public/logo512.png";
import Image from "next/image";

export function Header() {
  return <header className="navbar navbar-sticky navbar-glass">
    <div className="navbar-start">
      <Link className="navbar-item link" href="/">
        <label className="btn btn-ghost flex cursor-pointer px-1 space-x-0 sm:space-x-3 sm:px-2" tabIndex={0}>
          <Image src={Logo} alt="avatar" className="h-8 w-8 min-w-8" />
          <p className="text-lg overflow-clip max-w-0 sm:max-w-fit">Hanmin Kim</p>
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