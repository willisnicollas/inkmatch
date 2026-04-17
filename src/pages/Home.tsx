import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { TATTOO_STYLES, ARTISTS } from '../constants';
import { EmailSection } from '../components/EmailSection';

const Home = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1590247813693-5541d1c609fd?auto=format&fit=crop&q=80&w=1920"
            alt="Art du Tatouage"
            className="w-full h-full object-cover opacity-40 grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-8xl font-bold tracking-tighter uppercase mb-8 leading-[0.9]"
          >
            Explorez l’art du tatouage.<br />Trouvez les artistes qui le maîtrisent.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <Link
              to="/styles"
              className="px-10 py-4 bg-foreground text-background text-sm font-bold uppercase tracking-widest hover:bg-muted-foreground transition-all w-full md:w-auto"
            >
              Explorer les styles
            </Link>
            <Link
              to="/artists"
              className="px-10 py-4 border border-foreground text-foreground text-sm font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-all w-full md:w-auto"
            >
              Trouver un tatoueur
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Styles Grid Section */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground mb-4">01 / Styles</h2>
            <h3 className="text-4xl font-bold uppercase tracking-tighter">Catégories Artistiques</h3>
          </div>
          <Link to="/styles" className="hidden md:flex items-center text-xs font-bold uppercase tracking-widest hover:text-muted-foreground transition-colors">
            Voir tous les styles <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border">
          {TATTOO_STYLES.slice(0, 6).map((style) => (
            <Link
              key={style.id}
              to={`/styles/${style.id}`}
              className="group relative aspect-[4/5] bg-background overflow-hidden"
            >
              <img
                src={style.imageUrl}
                alt={style.name}
                className="w-full h-full object-cover grayscale opacity-50 group-hover:scale-105 group-hover:opacity-80 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-background/80 to-transparent">
                <h4 className="text-2xl font-bold uppercase tracking-tighter mb-2">{style.name}</h4>
                <p className="text-xs text-muted-foreground uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Explorer le style
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 bg-muted px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground mb-16 text-center">02 / Processus</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
            {[
              { step: '01', title: 'Comprendre l’Art', desc: 'Plongez dans notre guide complet des styles de tatouage, leur histoire et leurs traits visuels.' },
              { step: '02', title: 'Trouver votre Maître', desc: 'Parcourez notre annuaire mondial d’artistes classés par leurs styles de prédilection.' },
              { step: '03', title: 'Connecter & Créer', desc: 'Contactez l’artiste directement pour commencer votre voyage vers une pièce unique.' }
            ].map((item) => (
              <div key={item.step} className="space-y-6">
                <span className="text-6xl font-bold tracking-tighter opacity-10">{item.step}</span>
                <h4 className="text-xl font-bold uppercase tracking-tighter">{item.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Artists */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground mb-4">03 / Maîtres</h2>
            <h3 className="text-4xl font-bold uppercase tracking-tighter">Artistes en Vedette</h3>
          </div>
          <Link to="/artists" className="hidden md:flex items-center text-xs font-bold uppercase tracking-widest hover:text-muted-foreground transition-colors">
            Annuaire <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ARTISTS.slice(0, 4).map((artist) => (
            <Link key={artist.id} to={`/artists/${artist.id}`} className="group">
              <div className="aspect-square bg-muted mb-6 overflow-hidden">
                <img
                  src={artist.imageUrl}
                  alt={artist.name}
                  className="w-full h-full object-cover grayscale group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h4 className="text-lg font-bold uppercase tracking-tighter">{artist.name}</h4>
              <p className="text-xs text-muted-foreground uppercase tracking-widest mt-1">{artist.city}, {artist.country}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {artist.styles.slice(0, 2).map(style => (
                  <span key={style} className="text-[10px] border border-border px-2 py-1 uppercase tracking-widest">
                    {style}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <EmailSection />
    </div>
  );
};

export default Home;
