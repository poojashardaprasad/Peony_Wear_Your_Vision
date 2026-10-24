import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HOME_IMAGES } from '../assets/assets';
import { ROUTES, APP } from '../constants';
import { homeSteps, polaroids, faqs, stats, deliveryFeatures, storyHighlights } from '../data/home';
import { 
  SectionHeading, 
  PrimaryButton, 
  PolaroidCard, 
  FAQItem, 
  IconRenderer 
} from '../components';

export const Home = () => {
  const navigate = useNavigate();

  const handleStartDesigning = () => {
    navigate(ROUTES.PROFILE);
  };

  return (
    <div className="bg-brand-cream flex flex-col min-h-screen" id="home-page-container">
      
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden py-12 md:py-20 lg:py-28 bg-gradient-to-br from-brand-cream via-brand-soft-pink/40 to-brand-cream" id="hero-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Hero Text Box */}
            <div className="lg:col-span-7 flex flex-col items-start gap-6 lg:pr-6">
              <span className="inline-flex items-center gap-2 text-[10px] font-mono font-bold tracking-[0.35em] text-brand-pink uppercase bg-brand-soft-pink/50 border border-brand-border-pink rounded-full px-4 py-2 shadow-xs">
                <IconRenderer name="sparkles" className="text-brand-pink animate-pulse" size={12} />
                <span>Create your outfit in under 3 minutes</span>
              </span>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-brand-deep leading-[1.1] font-sans">
                Wear Your <br className="hidden md:inline" />
                <span className="relative inline-block text-brand-burgundy font-sans italic font-bold">
                  Vision.
                  <span className="absolute left-0 bottom-1 w-full h-[3px] bg-brand-pink/30 rounded" />
                </span>
              </h1>

              <p className="text-sm sm:text-base text-brand-deep/75 max-w-xl leading-relaxed font-sans font-medium">
                Peony is an artisan customization platform where you create the garments of your dreams. Design every detail—from custom silhouettes to premium organic fabrics—and have them stitched perfectly to your personal measurements.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
                <PrimaryButton 
                  onClick={handleStartDesigning} 
                  iconName="arrow-right"
                  id="hero-primary-cta"
                >
                  Start Customizing
                </PrimaryButton>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center px-8 py-3.5 text-xs font-bold tracking-widest uppercase text-brand-burgundy hover:text-brand-deep transition-colors duration-300 rounded-full hover:bg-brand-soft-pink"
                  id="hero-secondary-cta"
                >
                  Learn how it works
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-brand-border-pink w-full">
                {stats.map((stat) => (
                  <div key={stat.id} className="flex flex-col gap-1">
                    <span className="text-2xl font-bold text-brand-deep font-sans tracking-tight">
                      {stat.value}{stat.suffix}
                    </span>
                    <span className="text-[10px] text-brand-pink font-bold tracking-wide uppercase">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Hero Image Frame */}
            <div className="lg:col-span-5 relative" id="hero-image-showcase">
              {/* Decorative Background Element */}
              <div className="absolute -inset-4 bg-brand-soft-pink/40 rounded-[40px] -rotate-1 scale-98 -z-10" />
              
              <div className="relative overflow-hidden rounded-[36px] bg-brand-soft-pink/10 aspect-[4/5] shadow-xl border border-brand-border-pink">
                <img 
                  src={HOME_IMAGES.hero} 
                  alt="High fashion tailored premium outfit" 
                  className="w-full h-full object-cover object-center scale-102 hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Floating micro-badge */}
              <div className="absolute -bottom-4 -left-4 bg-brand-cream p-4 rounded-2xl shadow-lg border border-brand-border-pink flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-soft-pink flex items-center justify-center text-brand-pink">
                  <IconRenderer name="check-circle" size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-brand-deep">Direct Delivery</h4>
                  <span className="text-[9px] text-brand-pink font-bold uppercase tracking-widest">Guaranteed Fit</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. How It Works Section */}
      <section className="py-20 md:py-28 bg-brand-cream border-y border-brand-border-pink" id="how-it-works">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading 
            title="The Customization Roadmap" 
            subtitle="Four curated steps to craft your ultimate garment. Zero guesswork, pure customization."
            number="Roadmap"
            className="mb-16"
          />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {homeSteps.map((step) => (
              <div 
                key={step.id} 
                className={`group flex flex-col bg-white rounded-3xl p-6 border transition-all duration-300 ${
                  step.variant === 'gradient' 
                    ? 'border-brand-burgundy bg-gradient-to-br from-brand-pink to-brand-burgundy text-white shadow-md' 
                    : 'border-brand-border-pink hover:border-brand-burgundy hover:shadow-lg'
                }`}
              >
                {/* Visual Image Header */}
                <div className="relative aspect-square overflow-hidden rounded-2xl mb-6 bg-brand-soft-pink shadow-inner">
                  <img 
                    src={step.image} 
                    alt={step.alt} 
                    className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Text Context */}
                <div className="flex flex-col flex-grow gap-2">
                  <span className={`text-xs font-mono font-bold tracking-wider ${
                    step.variant === 'gradient' ? 'text-brand-cream' : 'text-brand-pink'
                  }`}>
                    STEP {step.id}
                  </span>
                  
                  <h3 className={`text-sm font-bold tracking-wide ${
                    step.variant === 'gradient' ? 'text-white' : 'text-brand-deep'
                  }`}>
                    {step.title}
                  </h3>
                  
                  <p className={`text-xs leading-relaxed font-sans ${
                    step.variant === 'gradient' ? 'text-brand-cream/80' : 'text-brand-deep/70'
                  }`}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <PrimaryButton onClick={handleStartDesigning}>
              Start Creating Now
            </PrimaryButton>
          </div>
        </div>
      </section>

      {/* 3. Inspiration Gallery Section */}
      <section className="py-20 md:py-28 bg-brand-soft-pink/30 overflow-hidden" id="inspiration">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading 
            title="Design Room Inspiration" 
            subtitle="Browse real polaroids from our client designs, featuring curated fabric combos and customized waist lines."
            number="Gallery"
            className="mb-16"
          />

          {/* Polaroids Scatter Pile */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 lg:gap-8 max-w-5xl mx-auto py-6">
            {polaroids.map((pol) => (
              <PolaroidCard 
                key={pol.id}
                id={pol.id}
                image={pol.image}
                alt={pol.alt}
                date={pol.date}
                rotation={pol.rotation}
                isFeatured={pol.isFeatured}
              />
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <span className="text-xs text-brand-pink font-semibold italic tracking-wide">
              Every garment is custom drawn and hand-made to individual measurement files.
            </span>
          </div>
        </div>
      </section>

      {/* 4. Brand Story Section */}
      <section className="py-20 md:py-28 bg-brand-cream" id="brand-story">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Image Showcase */}
            <div className="lg:col-span-5 relative" id="production-visual-frame">
              <div className="absolute -inset-4 bg-brand-soft-pink/40 rounded-[40px] rotate-1 scale-98 -z-10" />
              <div className="relative overflow-hidden rounded-[36px] bg-brand-soft-pink/10 aspect-[4/5] shadow-lg border border-brand-border-pink">
                <img 
                  src={HOME_IMAGES.production} 
                  alt="Peony tailoring and workshop experience" 
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Right Story Copy */}
            <div className="lg:col-span-7 flex flex-col items-start gap-6">
              <span className="inline-flex items-center gap-2 text-[10px] font-mono font-bold tracking-[0.3em] text-brand-pink uppercase bg-brand-soft-pink/50 border border-brand-border-pink rounded-full px-4 py-2">
                Atelier Manifesto
              </span>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-brand-deep leading-tight">
                Stitched by Hand. <br />
                Sourced with Honesty.
              </h2>

              <p className="text-sm text-brand-deep/75 leading-relaxed font-sans font-medium">
                At Peony, we do not believe in mass production. Our tailors construct each custom dress piece-by-piece from designer fabrics. We believe your wardrobe should adapt to your body—not the other way around. By bypassing typical fast fashion cycles, we focus on authentic fits that remain durable for years.
              </p>

              {/* Highlight list */}
              <div className="space-y-4 pt-4 border-t border-brand-border-pink w-full">
                {storyHighlights.map((highlight, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-burgundy text-white flex items-center justify-center shrink-0">
                      <IconRenderer name={highlight.icon} size={16} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-brand-deep">{highlight.title}</h4>
                      <p className="text-xs text-brand-pink font-medium mt-1 font-sans">{highlight.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Delivery Promise Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 w-full mt-4 border-t border-brand-border-pink">
                {deliveryFeatures.map((feat, idx) => (
                  <div key={idx} className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-brand-soft-pink text-brand-pink flex items-center justify-center shrink-0">
                        <IconRenderer name={feat.icon} size={12} />
                      </div>
                      <h4 className="text-xs font-bold text-brand-deep tracking-wide">{feat.title}</h4>
                    </div>
                    <p className="text-[11px] text-brand-deep/60 leading-relaxed font-sans font-medium">{feat.text}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. FAQ Section */}
      <section className="py-20 md:py-28 bg-brand-soft-pink/30 border-t border-brand-border-pink" id="faqs">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          <SectionHeading 
            title="Atelier Consultation FAQs" 
            subtitle="Got questions about customization? We have compiled the ultimate guidelines on fitting and fabrication."
            number="FAQ"
            className="mb-12"
          />

          <div className="bg-white border border-brand-border-pink rounded-3xl p-6 sm:p-10 shadow-sm">
            {faqs.map((faq) => (
              <FAQItem 
                key={faq.id}
                id={faq.id}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
