import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Calendar } from 'lucide-react';
import { STYLISTS_LIST } from '../data/salonData';
import { useBooking } from '../context/BookingContext';
import { Stylist } from '../types';

export const Stylists: React.FC = () => {
  const { openBooking } = useBooking();
  const railRef = useRef<HTMLDivElement>(null);

  const handleBookWithStylist = (stylist: Stylist) => {
    openBooking(null, stylist);
  };

  return (
    <section id="stylists" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-10 bg-[#FAFAFA] text-zinc-900 relative z-10 border-b border-zinc-200">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-zinc-200 mb-8"
        >
          <div>
            <div className="font-sans text-xs uppercase tracking-widest text-[#9E6868] mb-3 flex items-center gap-2 font-bold">
              <span className="w-2 h-2 rounded-full bg-[#9E6868] animate-pulse" />
              <span>The Master Artisans</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-zinc-950 max-w-2xl leading-[1.1]">
              Meet Our Stylists
            </h2>
          </div>
          <p className="text-sm text-zinc-600 max-w-md font-normal leading-relaxed">
            The people behind every great look, from precision cuts to restorative skin and hair care.
          </p>
          <div className="flex shrink-0 items-center gap-2 self-end">
            <motion.button
              type="button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.92 }}
              aria-label="Scroll to previous stylists"
              title="Previous stylists"
              onClick={() => railRef.current?.scrollBy({ left: -360, behavior: 'smooth' })}
              className="grid size-11 place-items-center rounded-full border border-zinc-300 bg-white text-zinc-800 transition-colors hover:bg-zinc-100 hover:border-zinc-400 cursor-pointer shadow-xs"
            >
              <ArrowLeft className="size-5" />
            </motion.button>
            <motion.button
              type="button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.92 }}
              aria-label="Scroll to more stylists"
              title="More stylists"
              onClick={() => railRef.current?.scrollBy({ left: 360, behavior: 'smooth' })}
              className="grid size-11 place-items-center rounded-full border border-zinc-900 bg-zinc-900 text-white transition-colors hover:bg-black cursor-pointer shadow-xs"
            >
              <ArrowRight className="size-5" />
            </motion.button>
          </div>
        </motion.div>

        <div
          ref={railRef}
          aria-label="Stylist profiles"
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-6 pt-2"
        >
          {STYLISTS_LIST.map((stylist, idx) => (
            <motion.div
              key={stylist.id}
              initial={{ opacity: 0, y: 35, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              whileHover={{ y: -8, transition: { duration: 0.25, ease: 'easeOut' } }}
              transition={{ duration: 0.5, delay: (idx % 6) * 0.08 }}
              className="group relative flex w-[min(82vw,320px)] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-xs transition-all duration-300 hover:border-zinc-400 hover:shadow-xl sm:w-[320px]"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-zinc-100">
                <img
                  src={stylist.image}
                  alt={stylist.name}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop&q=80';
                  }}
                  className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              </div>

              <div className="flex flex-1 flex-col p-5 font-sans justify-between">
                <div>
                  <h3 className="mb-1 font-serif text-xl font-bold text-zinc-950 group-hover:text-black transition-colors">
                    {stylist.name}
                  </h3>
                  <p className="mb-3 text-xs font-semibold text-[#9E6868]">
                    {stylist.role}
                  </p>
                  <p className="min-h-20 text-sm leading-relaxed text-zinc-600 font-normal">{stylist.bio}</p>
                </div>

                <div className="mt-5 border-t border-zinc-100 pt-4">
                  <motion.button
                    id={`book-with-stylist-${stylist.id}`}
                    type="button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleBookWithStylist(stylist)}
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-zinc-900 py-3 text-xs font-semibold uppercase tracking-wider text-white transition-all hover:bg-black hover:shadow-md cursor-pointer"
                  >
                    <Calendar className="size-4" />
                    <span>Book with {stylist.name}</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
