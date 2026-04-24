import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Users } from 'lucide-react';
import { TATTOO_STYLES } from '../constants';
import { EmailSection } from '../components/EmailSection';

const StyleDetail = () => {
  const { id } = useParams();
  const style = TATTOO_STYLES.find((s) => s.id === id);

  if (!style) {
    return (
      <div className="pt-40 text-center">
        <h1 className="text-2xl font-bold uppercase">Style non trouvé</h1>
        <Link to="/styles" className="text-muted-foreground hover:text-foreground mt-4 inline-block">Retour aux Styles</Link>
      </div>
    );
  }

  return (
    <div className="pt-20 pb-32">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-end px-6 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={style.imageUrl}
            alt={style.name}
            className="w-full h-full object-cover grayscale opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <Link to="/styles" className="inline-flex items-center text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowLeft size={14} className="mr-2" /> Retour aux Styles
          </Link>
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-6xl md:text-9xl font-bold uppercase tracking-tighter leading-none"
          >
            {style.name}
          </motion.h1>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 max-w-7xl mx-auto mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-7 space-y-16">
            <div className="space-y-6">
              <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">Description & Origines</h2>
              <p className="text-xl md:text-2xl leading-relaxed font-light">
                {style.description}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {style.origins}
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">Caractéristiques Visuelles</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {style.characteristics.map((trait) => (
                  <li key={trait} className="flex items-center text-sm uppercase tracking-widest border-l border-border pl-4">
                    {trait}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">Idéal pour quel type de personne</h2>
              <p className="text-lg italic text-muted-foreground">
                "{style.bestFor}"
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-12">
            <div className="bg-muted p-10 border border-border space-y-8">
              <h3 className="text-2xl font-bold uppercase tracking-tighter">Trouver les Artistes</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Prêt à passer sous l'aiguille ? Découvrez les artistes qui ont passé des années à perfectionner le style {style.name}.
              </p>
              <Link
                to={`/artists?style=${style.name}`}
                className="flex items-center justify-center w-full py-4 bg-foreground text-background text-xs font-bold uppercase tracking-widest hover:bg-muted-foreground transition-colors"
              >
                <Users size={16} className="mr-2" /> Voir les tatoueurs spécialisés
              </Link>
            </div>

            {/* Mini Gallery */}
            <div className="grid grid-cols-2 gap-4">
              {style.gallery.slice(0, 4).map((img, i) => (
                <div key={i} className="aspect-square bg-muted overflow-hidden">
                  <img src={img} alt={`${style.name} exemple ${i}`} className="w-full h-full object-cover grayscale hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Full Gallery */}
      {style.gallery.length > 0 && (
        <section className="mt-32 px-6 max-w-7xl mx-auto">
          <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground mb-12">Exposition Visuelle</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {style.gallery.map((img, i) => (
              <div key={i} className="aspect-[4/5] bg-muted overflow-hidden">
                <img src={img} alt={`${style.name} exposition ${i}`} className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
              </div>
            ))}
          </div>
        </section>
      )}

      <div className="mt-32">
        <EmailSection />
      </div>
    </div>
  );
};

export default StyleDetail;
