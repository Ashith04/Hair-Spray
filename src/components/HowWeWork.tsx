import React from 'react';
import { motion } from 'motion/react';
import { CalendarCheck, MessageSquare, Scissors, Award, Check } from 'lucide-react';
import { useBooking } from '../context/BookingContext';

export const HowWeWork: React.FC = () => {
  const { openBooking } = useBooking();

  const steps = [
    {
      stepNumber: '01',
      title: 'Book Online',
      subtitle: 'Pick Treatment & Date',
      description: 'Select your preferred treatment, master stylist, and convenient date with instant WhatsApp confirmation.',
      icon: CalendarCheck,
      highlight: 'Instant Confirmation'
    },
    {
      stepNumber: '02',
      title: 'Consult',
      subtitle: 'Personalized Diagnosis',
      description: 'Receive a 1-on-1 hair texture, porosity & skin analysis to customize products specifically to your face profile.',
      icon: MessageSquare,
      highlight: '100% Customized'
    },
    {
      stepNumber: '03',
      title: 'Style & Treat',
      subtitle: 'Master Care in AC Comfort',
      description: 'Relax in our air-conditioned lounge while certified specialists execute your precision cut, keratin therapy, or facial.',
      icon: Scissors,
      highlight: 'Sterile Tools'
    },
    {
      stepNumber: '04',
      title: 'Reveal',
      subtitle: 'Flawless Glow & Advice',
      description: 'Enjoy your mirror-shine transformation with customized home maintenance tips and long-lasting confidence.',
      icon: Award,
      highlight: 'Flawless Finish'
    }
  ];

  return (
    <section id="how-we-work" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-10 bg-white text-zinc-900 relative z-10 border-b border-zinc-200">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-zinc-200 mb-14"
        >
          <div>
            <div className="font-sans text-xs uppercase tracking-widest text-[#9E6868] mb-3 flex items-center gap-2 font-bold">
              <span className="w-2 h-2 rounded-full bg-[#9E6868] animate-pulse" />
              <span>Methodology & Process</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-zinc-950 max-w-2xl leading-[1.1]">
              The 4-Step Curated Journey
            </h2>
          </div>
          <p className="text-sm text-zinc-600 max-w-md font-normal leading-relaxed">
            Every session at Hair Spray is executed with precision, from texture diagnosis to the final mirror reveal.
          </p>
        </motion.div>

        {/* 4-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.stepNumber}
                initial={{ opacity: 0, y: 35, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.15 }}
                whileHover={{ y: -8, transition: { duration: 0.25, ease: 'easeOut' } }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className="p-8 rounded-[24px] bg-[#FAFAFA] border border-zinc-200 hover:border-zinc-400 hover:shadow-xl flex flex-col justify-between group transition-all duration-300 shadow-xs cursor-default"
              >
                <div>
                  {/* Top Row: Step Number & Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-900 group-hover:scale-115 group-hover:rotate-6 transition-all duration-300 shadow-2xs">
                      <Icon className="w-5 h-5 text-[#9E6868]" />
                    </div>

                    <span className="font-serif text-3xl font-light text-stone-300 group-hover:text-zinc-950 group-hover:scale-110 transition-all duration-300">
                      {step.stepNumber}
                    </span>
                  </div>

                  {/* Step Title & Subtitle */}
                  <h3 className="text-xl font-serif font-bold text-zinc-950 mb-1 group-hover:text-black transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs font-sans text-[#9E6868] mb-4 font-semibold">
                    {step.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Highlight tag */}
                <div className="pt-4 border-t border-zinc-200 flex items-center gap-2 text-xs font-sans text-zinc-700 font-medium">
                  <Check className="w-3.5 h-3.5 text-[#9E6868]" />
                  <span>{step.highlight}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Action Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-14 text-center"
        >
          <motion.button
            id="how-it-works-book-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => openBooking()}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-zinc-900 text-white hover:bg-black text-xs font-sans uppercase tracking-wider font-semibold hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-md"
          >
            <CalendarCheck className="w-4 h-4" />
            <span>Begin Your Transformation</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
