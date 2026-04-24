import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { Filter, Star, MapPin } from 'lucide-react';
import { ARTISTS, TATTOO_STYLES, COUNTRIES } from '../constants';

const ArtistsDirectory = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const styleFilter = searchParams.get('style') || '';
  const countryFilter = searchParams.get('country') || '';

  const filteredArtists = ARTISTS.filter((artist) => {
    const matchesStyle = styleFilter ? artist.styles.includes(styleFilter) : true;
    const matchesCountry = countryFilter ? artist.country === countryFilter : true;
    return matchesStyle && matchesCountry;
  });

  const countries = COUNTRIES;

  return (
    <div className="pt-32 pb-32 px-6 max-w-7xl mx-auto">
      <header className="mb-20">
        <h1 className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground mb-4">Annuaire</h1>
        <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter">Artistes Tatoueurs</h2>
      </header>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-8 mb-16 pb-8 border-b border-border">
        <div className="flex items-center space-x-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">
          <Filter size={16} />
          <span>Filtrer par :</span>
        </div>
        
        <select
          value={styleFilter}
          onChange={(e) => setSearchParams({ style: e.target.value, country: countryFilter })}
          className="bg-transparent border-none text-xs font-bold uppercase tracking-widest focus:ring-0 cursor-pointer hover:text-foreground transition-colors"
        >
          <option value="">Tous les Styles</option>
          {TATTOO_STYLES.map(s => <option key={s.id} value={s.name}>{s.name}</option>)}
        </select>

        <select
          value={countryFilter}
          onChange={(e) => setSearchParams({ style: styleFilter, country: e.target.value })}
          className="bg-transparent border-none text-xs font-bold uppercase tracking-widest focus:ring-0 cursor-pointer hover:text-foreground transition-colors"
        >
          <option value="">Tous les Pays</option>
          {countries.map(c => <option key={c} value={c}>{c}</option>)}
        </select>

        <button
          onClick={() => setSearchParams({})}
          className="text-[10px] uppercase tracking-widest text-muted-foreground hover:text-foreground ml-auto"
        >
          Réinitialiser
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-12">
        {filteredArtists.length > 0 ? (
          filteredArtists.map((artist, index) => (
            <motion.div
              key={artist.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={`/artists/${artist.id}`} className="group block space-y-6">
                <div className="aspect-[4/5] bg-muted overflow-hidden relative">
                  <img
                    src={artist.imageUrl}
                    alt={artist.name}
                    className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm px-3 py-1 flex items-center space-x-1">
                    <Star size={12} className="fill-foreground" />
                    <span className="text-[10px] font-bold">{artist.rating}</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-bold uppercase tracking-tighter">{artist.name}</h3>
                    <span className="text-[10px] text-muted-foreground uppercase tracking-widest flex items-center">
                      <MapPin size={10} className="mr-1" /> {artist.city}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest">{artist.studioName}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {artist.styles.map(style => (
                      <span key={style} className="text-[9px] border border-border px-2 py-1 uppercase tracking-widest">
                        {style}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))
        ) : (
          <div className="col-span-full py-20 text-center text-muted-foreground uppercase tracking-widest text-sm">
            Aucun artiste trouvé pour ces critères.
          </div>
        )}
      </div>
    </div>
  );
};

export default ArtistsDirectory;
