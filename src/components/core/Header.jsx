import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header
      style={{
        padding: '1rem 1.5rem',
        borderBottom: '1px solid #e0e0e0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <div
        style={{
          fontWeight: 600,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          fontSize: '0.9rem',
        }}
      >
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          UX Portfolio Starter
        </Link>
      </div>

      <nav aria-label="Primary navigation">
        <ul
          style={{
            listStyle: 'none',
            display: 'flex',
            gap: '1rem',
            margin: 0,
            padding: 0,
          }}
        >
          <li>
            <a href="#work" style={{ textDecoration: 'none', fontSize: '0.9rem' }}>
              Work
            </a>
          </li>
          <li>
            <a href="#about" style={{ textDecoration: 'none', fontSize: '0.9rem' }}>
              About
            </a>
          </li>
          <li>
            <a href="#contact" style={{ textDecoration: 'none', fontSize: '0.9rem' }}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
