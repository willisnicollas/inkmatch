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
      <section className="relative min-h-[90vh] flex items-center justify-center py-20">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-br from-neutral-800 to-neutral-950 opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-8xl font-bold tracking-tighter uppercase mb-16 leading-tight"
          >
            Explorez l’art du tatouage.<br />Trouvez les artistes qui le maîtrisent.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6 pb-12"
          >
            <Link
              to="/styles"
              className="px-10 py-5 border-2 border-white bg-transparent text-white text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all w-full md:w-auto"
            >
              Explorer les styles
            </Link>
            <Link
              to="/artists"
              className="px-10 py-5 border-2 border-white text-white text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all w-full md:w-auto"
            >
              Trouver un tatoueur
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-32 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground mb-8">Présentation</h2>
        <p className="text-2xl md:text-4xl font-medium leading-relaxed tracking-tight">
          InkMatch est l'annuaire mondial de l'encre.<br />
          Nous rassemblons les styles de tatouage existants ainsi que les artistes mondialement connus afin de vous offrir une expérience de découverte sans précédent.<br />
          Que vous cherchiez l'histoire derrière le style ou l'artiste pour votre prochain projet, vous êtes au bon endroit.
        </p>
      </section>

      {/* How It Works */}
      <section className="py-32 bg-muted px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground mb-16 text-center">Processus & Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
            {[
              { step: '01', title: 'Comprendre l’Art', desc: 'Plongez dans notre guide complet des styles de tatouage, leur histoire et leurs traits visuels.' },
              { step: '02', title: 'Trouver votre Artiste', desc: 'Parcourez notre annuaire mondial d’artistes classés par leurs styles de prédilection.' },
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

      <EmailSection />
    </div>
  );
};

export default Home;
