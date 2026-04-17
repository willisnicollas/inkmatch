import React from 'react';

export const EmailSection = () => {
  return (
    <section className="py-32 bg-foreground text-background px-6">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter leading-none">
          Recevez le guide mondial<br />des styles de tatouage
        </h2>
        <p className="text-background/60 uppercase tracking-widest text-sm">
          Une exposition numérique curatée de la culture du tatouage directement dans votre boîte mail.
        </p>
        <form className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="VOTRE ADRESSE EMAIL"
            className="flex-1 bg-transparent border-b border-background/20 py-4 text-sm focus:outline-none focus:border-background transition-colors placeholder:text-background/30"
          />
          <button className="px-12 py-4 bg-background text-foreground text-xs font-bold uppercase tracking-widest hover:bg-background/80 transition-colors">
            S'inscrire
          </button>
        </form>
      </div>
    </section>
  );
};
