import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Styles', path: '/styles' },
    { name: 'Tatoueurs', path: '/artists' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold tracking-tighter uppercase">
          InkMatch
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm uppercase tracking-widest hover:text-muted-foreground transition-colors ${
                location.pathname === link.path ? 'text-foreground' : 'text-muted-foreground'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <button className="p-2 hover:bg-muted rounded-full transition-colors">
            <Search size={20} />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-20 left-0 w-full bg-background border-b border-border p-6 space-y-6"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block text-xl uppercase tracking-widest"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <h3 className="text-xl font-bold tracking-tighter uppercase">InkMatch</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Le guide artistique mondial de la culture du tatouage. Explorez les styles et trouvez les maîtres du métier.
          </p>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest mb-6">Explorer</h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li><Link to="/styles" className="hover:text-foreground transition-colors">Styles de Tatouage</Link></li>
            <li><Link to="/artists" className="hover:text-foreground transition-colors">Annuaire des Artistes</Link></li>
            <li><Link to="/" className="hover:text-foreground transition-colors">Maîtres en Vedette</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest mb-6">Société</h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li><a href="#" className="hover:text-foreground transition-colors">À propos</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Confidentialité</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest mb-6">Newsletter</h4>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="VOTRE EMAIL"
              className="w-full bg-muted border border-border px-4 py-3 text-sm focus:outline-none focus:border-white transition-colors"
            />
            <button className="w-full bg-foreground text-background py-3 text-xs font-bold uppercase tracking-widest hover:bg-muted-foreground transition-colors">
              S'abonner
            </button>
          </form>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center text-[10px] text-muted-foreground uppercase tracking-widest">
        <p>© 2026 InkMatch. Tous droits réservés.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-foreground">Instagram</a>
          <a href="#" className="hover:text-foreground">TikTok</a>
          <a href="#" className="hover:text-foreground">Twitter</a>
        </div>
      </div>
    </footer>
  );
};
