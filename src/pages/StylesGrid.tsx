import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { TATTOO_STYLES } from '../constants';

const StylesGrid = () => {
  return (
    <div className="pt-32 pb-32 px-6 max-w-7xl mx-auto">
      <header className="mb-20">
        <h1 className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground mb-4">Encyclopédie</h1>
        <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter">Styles de Tatouage</h2>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
        {TATTOO_STYLES.map((style, index) => (
          <motion.div
            key={style.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <Link
              to={`/styles/${style.id}`}
              className="group block relative aspect-square bg-background overflow-hidden"
            >
              <img
                src={style.imageUrl}
                alt={style.name}
                className="w-full h-full object-cover grayscale opacity-40 group-hover:scale-105 group-hover:opacity-70 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 p-10 flex flex-col justify-between">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-3xl font-bold uppercase tracking-tighter mb-2">{style.name}</h3>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    Explorer la définition
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StylesGrid;
