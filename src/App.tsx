import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar, Footer } from './components/Layout';
import Home from './pages/Home';
import StylesGrid from './pages/StylesGrid';
import StyleDetail from './pages/StyleDetail';
import ArtistsDirectory from './pages/ArtistsDirectory';
import ArtistProfile from './pages/ArtistProfile';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/styles" element={<StylesGrid />} />
            <Route path="/styles/:id" element={<StyleDetail />} />
            <Route path="/artists" element={<ArtistsDirectory />} />
            <Route path="/artists/:id" element={<ArtistProfile />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
