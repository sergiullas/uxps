import React from 'react';

export default function Footer() {
  return (
    <footer
      style={{
        padding: '1.5rem',
        borderTop: '1px solid #e0e0e0',
        marginTop: '2rem',
        fontSize: '0.8rem',
        color: '#666',
        textAlign: 'center',
      }}
    >
      <p style={{ margin: 0 }}>
        © {new Date().getFullYear()} UX Portfolio Starter. Built with React & Vite.
      </p>
    </footer>
  );
}
