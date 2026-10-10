import React from 'react';
import { motion } from 'motion/react';
import { Calendar, ArrowUpRight, UserCheck } from 'lucide-react';
import { STYLISTS_LIST } from '../data/salonData';
import { useBooking } from '../context/BookingContext';
import { Stylist } from '../types';

export const Stylists: React.FC = () => {
  const { openBooking } = useBooking();

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
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-zinc-200 mb-12"
        >
          <div>
            <div className="font-sans text-xs uppercase tracking-widest text-[#9E6868] mb-3 flex items-center gap-2 font-bold">
              <span className="w-2 h-2 rounded-full bg-[#9E6868] animate-pulse" />
              <span>Certified Master Artisans</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-zinc-950 max-w-2xl leading-[1.1]">
              Meet Our Stylists & Therapists
            </h2>
          </div>
          <div className="flex flex-col sm:items-end gap-2">
            <p className="text-sm text-zinc-600 max-w-md font-normal leading-relaxed sm:text-right">
              Certified specialists with years of hands-on expertise in precision cutting, texture rejuvenation, and restorative skincare.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-zinc-200 text-xs text-zinc-700 font-medium shadow-2xs">
              <UserCheck className="w-3.5 h-3.5 text-[#9E6868]" />
              <span>6 Specialists Available for Direct Booking</span>
            </div>
          </div>
        </motion.div>

        {/* Responsive Grid Layout - Clean software dev structure without box scroll */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {STYLISTS_LIST.map((stylist, idx) => (
            <motion.div
              key={stylist.id}
              initial={{ opacity: 0, y: 35, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.25, ease: 'easeOut' } }}
              transition={{ duration: 0.45, delay: (idx % 6) * 0.08 }}
              className="group relative flex flex-col overflow-hidden rounded-[24px] border border-zinc-200 bg-white shadow-xs transition-all duration-300 hover:border-zinc-400 hover:shadow-xl"
            >
              {/* Stylist Portrait */}
              <div className="relative aspect-[4/4.5] overflow-hidden bg-zinc-100">
                <img
                  src={stylist.image}
                  alt={stylist.name}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop&q=80';
                  }}
                  className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Available Badge */}
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-white/40 text-[10px] font-sans font-semibold text-zinc-900 shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Available
                  </span>
                </div>
              </div>

              {/* Stylist Details */}
              <div className="flex flex-1 flex-col p-6 font-sans justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-serif text-2xl font-bold text-zinc-950 group-hover:text-black transition-colors">
                      {stylist.name}
                    </h3>
                  </div>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#9E6868]">
                    {stylist.role}
                  </p>
                  <p className="text-sm leading-relaxed text-zinc-600 font-normal">
                    {stylist.bio}
                  </p>
                </div>

                <div className="mt-6 border-t border-zinc-100 pt-5">
                  <motion.button
                    id={`book-with-stylist-${stylist.id}`}
                    type="button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleBookWithStylist(stylist)}
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-zinc-900 py-3 px-4 text-xs font-semibold uppercase tracking-wider text-white transition-all hover:bg-black hover:shadow-md cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book with {stylist.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 ml-0.5 opacity-70 group-hover:opacity-100" />
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

