import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Star, Instagram, Globe, MessageSquare, MapPin } from 'lucide-react';
import { ARTISTS } from '../constants';

const ArtistProfile = () => {
  const { id } = useParams();
  const artist = ARTISTS.find((a) => a.id === id);

  if (!artist) {
    return (
      <div className="pt-40 text-center">
        <h1 className="text-2xl font-bold uppercase">Artiste non trouvé</h1>
        <Link to="/artists" className="text-muted-foreground hover:text-foreground mt-4 inline-block">Retour à l'annuaire</Link>
      </div>
    );
  }

  return (
    <div className="pt-20 pb-32">
      <div className="px-6 max-w-7xl mx-auto">
        <Link to="/artists" className="inline-flex items-center text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground mb-12 transition-colors">
          <ArrowLeft size={14} className="mr-2" /> Retour à l'annuaire
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Left Column: Info */}
          <div className="lg:col-span-5 space-y-12">
            <div className="aspect-[4/5] bg-muted overflow-hidden">
              <img
                src={artist.imageUrl}
                alt={artist.name}
                className="w-full h-full object-cover grayscale"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < Math.floor(artist.rating) ? 'fill-foreground' : 'text-muted'}
                    />
                  ))}
                  <span className="text-sm font-bold ml-2">{artist.rating}</span>
                </div>
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  {artist.reviews.length} Avis
                </span>
              </div>

              <div className="flex flex-wrap gap-6 pt-4 border-t border-border">
                {artist.socials.instagram && (
                  <a href="#" className="flex items-center text-xs uppercase tracking-widest hover:text-muted-foreground transition-colors">
                    <Instagram size={16} className="mr-2" /> Instagram
                  </a>
                )}
                {artist.socials.website && (
                  <a href="#" className="flex items-center text-xs uppercase tracking-widest hover:text-muted-foreground transition-colors">
                    <Globe size={16} className="mr-2" /> Site Web
                  </a>
                )}
              </div>

              <button className="w-full py-5 bg-foreground text-background text-xs font-bold uppercase tracking-widest hover:bg-muted-foreground transition-colors flex items-center justify-center">
                <MessageSquare size={16} className="mr-2" /> Contacter l'Artiste
              </button>
            </div>
          </div>

          {/* Right Column: Details & Gallery */}
          <div className="lg:col-span-7 space-y-20">
            <header className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-bold uppercase tracking-tighter leading-none">
                {artist.name}
              </h1>
              <div className="flex items-center text-sm uppercase tracking-[0.2em] text-muted-foreground">
                <MapPin size={14} className="mr-2" /> {artist.studioName ? `${artist.studioName} — ` : ''}{artist.city}, {artist.country}
              </div>
              <div className="flex flex-wrap gap-2 pt-4">
                {artist.styles.map(style => (
                  <Link
                    key={style}
                    to={`/styles/${style.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-[10px] border border-border px-3 py-1.5 uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors"
                  >
                    {style}
                  </Link>
                ))}
              </div>
            </header>

            <div className="space-y-8">
              <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">Biographie</h2>
              <p className="text-xl leading-relaxed font-light text-muted-foreground">
                {artist.bio}
              </p>
            </div>

            <div className="space-y-12">
              <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">Exposition Portfolio</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {artist.gallery.map((img, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    className="aspect-square bg-muted overflow-hidden"
                  >
                    <img src={img} alt={`Portfolio ${i}`} className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div className="space-y-12 pt-20 border-t border-border">
              <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">Avis Clients</h2>
              <div className="space-y-12">
                {artist.reviews.length > 0 ? (
                  artist.reviews.map((review) => (
                    <div key={review.id} className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-bold uppercase tracking-widest">{review.userName}</span>
                        <span className="text-[10px] text-muted-foreground uppercase tracking-widest">{review.date}</span>
                      </div>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={12} className={i < review.rating ? 'fill-foreground' : 'text-muted'} />
                        ))}
                      </div>
                      <p className="text-muted-foreground italic leading-relaxed">"{review.comment}"</p>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-muted-foreground uppercase tracking-widest italic">Aucun avis pour le moment.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistProfile;
