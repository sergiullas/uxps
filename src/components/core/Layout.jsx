import Header from './Header.jsx';
import Footer from './Footer.jsx';

export default function Layout({ children }) {
  return (
    <div className="app-root">
      <Header />
      <main id="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
}
