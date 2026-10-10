import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Pause, ChevronLeft, ChevronRight, Check, ArrowUpRight, Camera, Star } from 'lucide-react';
import { SALON_INFO, hair7, hair8, hair9, hair1, hair5 } from '../data/salonData';

export const About: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const studioSlides = [
    {
      image: hair7,
      title: 'Keratin & Cysteine Hair Transformation',
      zone: 'Zone 01 · Hair Transformation',
      desc: 'Real client before & after: Transforming frizzy hair into silky, mirror-shine layered waves.'
    },
    {
      image: hair8,
      title: 'Kids & Juniors Precision Haircuts',
      zone: 'Zone 02 · Kids & Juniors',
      desc: 'Fun styling experience and trendy modern fades for young champions at our salon wall.'
    },
    {
      image: hair9,
      title: 'Men’s Modern Fade & Beard Grooming',
      zone: 'Zone 03 · Men’s Bay',
      desc: 'Sharp flat-top fade cuts, textured styling, and precision grooming tailored to your look.'
    },
    {
      image: hair1,
      title: 'Central Salon Studio & Kids Car Chair',
      zone: 'Zone 04 · Studio Interior',
      desc: 'Panoramic air-conditioned styling bays, fish spa tank, and custom red sports car kids chair.'
    },
    {
      image: hair5,
      title: 'Zero-Gravity Full Body Massage Lounge',
      zone: 'Zone 05 · Wellness Spa',
      desc: 'Electronic multi-point acupressure massage chair for full-body stress relief and relaxation.'
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % studioSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, studioSlides.length]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % studioSlides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + studioSlides.length) % studioSlides.length);
  };

  const stats = [
    {
      num: '09+',
      label: 'Years in Business',
      desc: 'Established 2017 in Kavoor'
    },
    {
      num: '4.7',
      hasStar: true,
      label: 'Google Rating',
      desc: 'Based on 301 verified reviews'
    },
    {
      num: '5,000+',
      label: 'Clients Served',
      desc: 'Across Mangalore & Udupi'
    },
    {
      num: '100%',
      label: 'Formaldehyde Free',
      desc: 'Safe & certified formulations'
    }
  ];

  const highlights = [
    'Formaldehyde-Free & Premium Imported Keratin & Cysteine Formulations',
    'Dedicated Air Conditioned Comfort with Private Bridal & Skin Suites',
    'Customized Scalp, Hair Texture, and Skin Consultation Before Every Service',
    '100% Hospital-Grade Sanitized & Autoclaved Tools for Each Guest'
  ];

  const active = studioSlides[currentSlide];

  return (
    <section id="about" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-10 bg-white text-zinc-900 relative z-10 border-b border-zinc-200">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-zinc-200 mb-16"
        >
          <div>
            <div className="font-sans text-xs uppercase tracking-widest text-[#9E6868] mb-3 flex items-center gap-2 font-bold">
              <span className="w-2 h-2 rounded-full bg-[#9E6868] animate-pulse" />
              <span>Our Legacy & Philosophy</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-zinc-950 max-w-2xl leading-[1.1]">
              Crafting Timeless Hair & Skin Artistry in Kavoor
            </h2>
          </div>
          <p className="text-sm text-zinc-600 max-w-md font-normal leading-relaxed">
            9 years of unwavering commitment to personalized styling, scientific bond repair therapy, and luxury unisex beauty care in Mangalore.
          </p>
        </motion.div>

        {/* Two-Column About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch mb-16">
          {/* Left Column: Salon Story */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 flex flex-col justify-between p-8 sm:p-10 rounded-[28px] bg-[#FAFAFA] border border-zinc-200 hover:border-zinc-300 transition-colors shadow-xs"
          >
            <div>
              <span className="font-sans text-xs uppercase tracking-wider text-zinc-500 font-semibold block mb-4">
                Since 2017 · Mangalore
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-zinc-950 mb-5 leading-snug">
                The Hair Spray Standard
              </h3>
              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed mb-4">
                Located near Union Bank in the vibrant heart of Kavoor, Mangalore, <strong>Hair Spray Unisex Salon</strong> was founded with a singular purpose: to deliver salon-grade hair science and luxury skincare without compromise.
              </p>
              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed mb-8">
                We specialize in tackling coastal humidity with advanced <strong>Keratin Cysteine</strong> and <strong>Cysteine Bond therapies</strong> that protect your natural hair fiber while creating mirror-like gloss and effortless daily movement.
              </p>
            </div>

            {/* Highlights List */}
            <div className="space-y-3.5 pt-6 border-t border-zinc-200">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-zinc-100 border border-zinc-200 text-[#9E6868] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                    <Check className="w-3 h-3 text-[#9E6868]" strokeWidth={2.5} />
                  </span>
                  <span className="text-xs sm:text-sm text-zinc-800 font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Interactive Virtual Studio Tour Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 rounded-[28px] bg-[#FAFAFA] border border-zinc-200 p-4 sm:p-5 flex flex-col justify-between hover:border-zinc-300 transition-colors shadow-xs"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-video bg-zinc-950 group">
              <AnimatePresence mode="wait">
                <motion.img
                  key={active.image}
                  src={active.image}
                  alt={active.title}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  onError={(e) => {
                    e.currentTarget.src = hair1;
                  }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Ambient gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/30 pointer-events-none" />

              {/* Top Station Tag & Auto-play indicator */}
              <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between text-xs z-10">
                <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white font-sans text-[11px] font-semibold flex items-center gap-1.5 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{active.zone}</span>
                </span>

                <button
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white font-sans text-[11px] font-medium flex items-center gap-1 hover:bg-black/80 transition-colors cursor-pointer"
                  title={isAutoPlaying ? 'Pause Auto-Tour' : 'Resume Auto-Tour'}
                >
                  {isAutoPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3 fill-white" />}
                  <span>{isAutoPlaying ? 'Auto Tour' : 'Paused'}</span>
                </button>
              </div>

              {/* Previous / Next Chevron Navigation */}
              <button
                onClick={handlePrev}
                aria-label="Previous Studio Zone"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all cursor-pointer opacity-80 hover:opacity-100 z-10"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next Studio Zone"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all cursor-pointer opacity-80 hover:opacity-100 z-10"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              {/* Bottom Information Overlay */}
              <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-black/75 backdrop-blur-md border border-white/15 text-white z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                <div>
                  <h4 className="font-serif text-sm sm:text-base font-bold text-white mb-0.5">
                    {active.title}
                  </h4>
                  <p className="font-sans text-[11px] text-white/80 line-clamp-1">
                    {active.desc}
                  </p>
                </div>

                {/* Step indicator dots */}
                <div className="flex items-center gap-1.5 shrink-0">
                  {studioSlides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-1.5 rounded-full transition-all cursor-pointer ${
                        currentSlide === idx ? 'w-5 bg-white' : 'w-1.5 bg-white/40 hover:bg-white/70'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-4 px-2 flex items-center justify-between text-xs text-zinc-600 font-sans font-medium">
              <span>Interactive 5-Zone Studio Experience</span>
              <span className="text-[#9E6868] font-bold">Kavoor Junction, Mangalore</span>
            </div>
          </motion.div>
        </div>

        {/* Precision Architectural Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 border border-zinc-200 rounded-[24px] bg-white divide-y md:divide-y-0 md:divide-x divide-zinc-200 overflow-hidden shadow-xs"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4, backgroundColor: 'rgba(250, 250, 250, 1)' }}
              transition={{ duration: 0.2 }}
              className="p-6 sm:p-8 flex flex-col justify-between bg-white transition-all duration-300 cursor-default group"
            >
              <span className="font-sans text-xs text-stone-400 mb-3 font-bold group-hover:text-[#9E6868] transition-colors">0{idx + 1}</span>
              <div>
                <span className="text-3xl sm:text-4xl font-serif font-bold text-zinc-950 flex items-center gap-1 mb-1 group-hover:scale-105 origin-left transition-transform duration-300">
                  <span>{stat.num}</span>
                  {stat.hasStar && <Star className="w-6 h-6 fill-amber-400 text-amber-400 inline" />}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-zinc-800 block">
                  {stat.label}
                </span>
                <span className="text-[11px] text-zinc-500 mt-1 block">
                  {stat.desc}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
