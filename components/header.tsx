'use client'
import Link from 'next/link';
import { usePathname } from "next/navigation";

const navItems: { label: string; path: string }[] = [
  { label: 'Home', path: '/' },
  { label: 'Blog', path: '/blog' },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <nav>
        <h1>
          <Link href="/">PORTFOLIO</Link>
        </h1>

        <ul>
          {navItems.map(({ label, path }) => (
            <li key={label}>
              <Link
                href={path}
                className={pathname === path || pathname.startsWith(`${path}/`) ? "is-current-page" : null}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header