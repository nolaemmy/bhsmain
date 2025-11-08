'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { ReactElement } from 'react';
import {
  HealthcareExpertiseIcon,
  ProvenResultsIcon,
  TransparentReportingIcon,
  DedicatedSupportIcon,
  AdvancedTechnologyIcon,
  ComplianceFocusIcon
} from '../../../components/ui/custom-icons';

interface Advantage {
  title: string;
  icon: string;
  description: string;
}

interface AdvantagesShowcaseProps {
  advantages?: Advantage[];
}

const AdvantagesShowcase = ({ advantages = [] }: AdvantagesShowcaseProps) => {
  const router = useRouter();
  
  // Helper function to get custom icon based on advantage title
  const getCustomIcon = (title: string) => {
    const iconProps = { size: 24, className: "text-white" };
    switch (title) {
      case 'Healthcare Expertise':
        return <HealthcareExpertiseIcon {...iconProps} />;
      case 'Proven Results':
        return <ProvenResultsIcon {...iconProps} />;
      case 'Transparent Reporting':
        return <TransparentReportingIcon {...iconProps} />;
      case 'Dedicated Support':
        return <DedicatedSupportIcon {...iconProps} />;
      case 'Advanced Technology':
        return <AdvancedTechnologyIcon {...iconProps} />;
      case 'Compliance Focus':
        return <ComplianceFocusIcon {...iconProps} />;
      default:
        return <HealthcareExpertiseIcon {...iconProps} />;
    }
  };
  const [activeAdvantage, setActiveAdvantage] = useState(0);
  const [viewMode, setViewMode] = useState('grid'); // 'grid', 'carousel', 'interactive'
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });
  
  // Motion values for parallax effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  // Enhanced advantages data
  const enhancedAdvantages = advantages.map((advantage, index) => ({
    ...advantage,
    id: index,
    color: [
      'primary', 'primary-light', 'primary-dark', 'primary', 'primary-light', 'primary-dark'
    ][index % 6],
    stats: [
      { label: 'Experience', value: '15+', unit: 'Years' },
      { label: 'Success Rate', value: '98', unit: '%' },
      { label: 'Response Time', value: '<2', unit: 'Hours' },
      { label: 'Clients Served', value: '100', unit: '+' },
      { label: 'Uptime', value: '99.9', unit: '%' },
      { label: 'Compliance', value: '100', unit: '%' }
    ][index % 6],
    benefits: [
      [
        'Certified medical coding specialists',
        '24/7 dedicated support team',
        'Comprehensive healthcare knowledge'
      ],
      [
        '27% average revenue increase',
        '35% reduction in claim denials',
        'Faster payment processing'
      ],
      [
        'Real-time dashboard access',
        'Detailed analytics and insights',
        'Custom reporting solutions'
      ],
      [
        'Personal account manager',
        'Immediate issue resolution',
        'Proactive communication'
      ],
      [
        'AI-powered billing automation',
        'Cloud-based secure systems',
        'Integration with major EMRs'
      ],
      [
        'HIPAA compliant processes',
        'Regular audit compliance',
        'Updated regulatory knowledge'
      ]
    ][index % 6]
  }));

  // Auto-rotation in carousel mode
  useEffect(() => {
    if (viewMode !== 'carousel') return;
    
    const interval = setInterval(() => {
      setActiveAdvantage((prev) => (prev + 1) % enhancedAdvantages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [viewMode, enhancedAdvantages.length]);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      
      setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      mouseX.set((x - 0.5) * 40);
      mouseY.set((y - 0.5) * 40);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [mouseX, mouseY]);

  const getColorClasses = (color: string, variant: string = 'primary') => {
    const colorMap: Record<string, Record<string, string>> = {
      'primary': {
        primary: 'from-primary to-primary-dark',
        bg: 'bg-primary',
        text: 'text-primary',
        border: 'border-primary/20',
        light: 'bg-primary/5'
      },
      'primary-light': {
        primary: 'from-primary-light to-primary',
        bg: 'bg-primary-light',
        text: 'text-primary-light',
        border: 'border-primary-light/20',
        light: 'bg-primary-light/5'
      },
      'primary-dark': {
        primary: 'from-primary-dark to-primary',
        bg: 'bg-primary-dark',
        text: 'text-primary-dark',
        border: 'border-primary-dark/20',
        light: 'bg-primary-dark/5'
      }
    };
    return colorMap[color]?.[variant] || colorMap.primary[variant];
  };

  return (
    <section 
      ref={containerRef}
      className="py-32 relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50"
    >
      {/* Animated background */}
      <motion.div 
        style={{ x: springX, y: springY }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-primary-light/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-primary-light/10 to-primary/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/2 w-64 h-64 bg-gradient-to-br from-primary-dark/10 to-primary/20 rounded-full blur-3xl transform -translate-x-1/2" />
      </motion.div>

      {/* Geometric patterns */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(59,130,246,0.1) 1px, transparent 1px),
            linear-gradient(180deg, rgba(59,130,246,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-primary-light/10 border border-primary/30 text-primary text-sm font-medium mb-6"
          >
            <div className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse" />
            Our Competitive Edge
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Why Choose
            <span className="block bg-gradient-to-r from-primary via-primary-light to-primary-dark bg-clip-text text-transparent">
              BHS Healthcare Billing
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Discover what sets us apart from other medical billing companies and why healthcare providers trust us with their revenue cycle management.
          </p>

          {/* View mode toggle */}
          <div className="flex justify-center gap-2 p-1 bg-gray-100 rounded-xl inline-flex">
            {[
              { mode: 'grid', label: 'Grid View', icon: '⊞' },
              { mode: 'carousel', label: 'Carousel', icon: '⟲' }
            ].map(({ mode, label, icon }) => (
              <motion.button
                key={mode}
                onClick={() => setViewMode(mode)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  viewMode === mode
                    ? 'bg-white text-gray-900 shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-2">{icon}</span>
                {label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Content based on view mode */}
        {(() => {
          const AnimatePresenceWrapper = AnimatePresence as any;
          return (
            <AnimatePresenceWrapper mode="wait" initial={false}>
              {viewMode === 'grid' ? (
                <motion.div
                  key="grid"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
              {enhancedAdvantages.map((advantage, index) => (
                <motion.div
                  key={advantage.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="relative h-full p-8 bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
                  >
                    {/* Card background gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${getColorClasses(advantage.color, 'primary')} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                    
                    {/* Icon */}
                    <motion.div
                      className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${getColorClasses(advantage.color, 'primary')} flex items-center justify-center text-white text-2xl mb-6 shadow-lg`}
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {getCustomIcon(advantage.title)}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${getColorClasses(advantage.color, 'primary')} blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300`} />
                    </motion.div>

                    {/* Content */}
                    <h3 className={`text-2xl font-bold text-gray-900 mb-4 group-hover:${getColorClasses(advantage.color, 'text')} transition-colors duration-300`}>
                      {advantage.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {advantage.description}
                    </p>

                    {/* Stats */}
                    <div className={`flex items-center justify-between p-4 ${getColorClasses(advantage.color, 'light')} rounded-xl mb-4`}>
                      <span className="text-sm font-medium text-gray-700">{advantage.stats.label}</span>
                      <span className={`text-2xl font-bold ${getColorClasses(advantage.color, 'text')}`}>
                        {advantage.stats.value}
                        <span className="text-sm ml-1">{advantage.stats.unit}</span>
                      </span>
                    </div>

                    {/* Benefits list */}
                    <ul className="space-y-2">
                      {advantage.benefits.map((benefit, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: i * 0.1 }}
                          className="flex items-start text-sm text-gray-600"
                        >
                          <div className={`w-2 h-2 rounded-full ${getColorClasses(advantage.color, 'bg')} mt-2 mr-3 flex-shrink-0`} />
                          {benefit}
                        </motion.li>
                      ))}
                    </ul>

                    {/* Hover effect */}
                    {(() => {
                      const AnimatePresenceWrapper = AnimatePresence as any;
                      return (
                        <AnimatePresenceWrapper initial={false}>
                          {hoveredCard === index ? (
                            <motion.div
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.8 }}
                              className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center"
                            >
                              <svg className={`w-5 h-5 ${getColorClasses(advantage.color, 'text')}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                              </svg>
                            </motion.div>
                          ) : null}
                        </AnimatePresenceWrapper>
                      );
                    })()}
                  </motion.div>
                </motion.div>
              ))}
          </motion.div>
        ) : viewMode === 'carousel' ? (
            <motion.div
              key="carousel"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-4xl mx-auto"
            >
              <div className="relative">
                {/* Left Arrow */}
                <motion.button
                  onClick={() => setActiveAdvantage((prev) =>
                    prev === 0 ? enhancedAdvantages.length - 1 : prev - 1
                  )}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:text-primary hover:border-primary/30 hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.1, x: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </motion.button>

                {/* Right Arrow */}
                <motion.button
                  onClick={() => setActiveAdvantage((prev) =>
                    (prev + 1) % enhancedAdvantages.length
                  )}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:text-primary hover:border-primary/30 hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.1, x: 2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>

                {(() => {
                  const AnimatePresenceWrapper = AnimatePresence as any;
                  return (
                    <AnimatePresenceWrapper mode="wait" initial={false}>
                      <motion.div
                        key={activeAdvantage}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-200"
                      >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                      <div>
                        <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${getColorClasses(enhancedAdvantages[activeAdvantage].color, 'primary')} flex items-center justify-center text-white mb-6 shadow-xl`}>
                          {getCustomIcon(enhancedAdvantages[activeAdvantage].title)}
                        </div>
                        
                        <h3 className="text-4xl font-bold text-gray-900 mb-6">
                          {enhancedAdvantages[activeAdvantage].title}
                        </h3>
                        
                        <p className="text-lg text-gray-600 leading-relaxed mb-8">
                          {enhancedAdvantages[activeAdvantage].description}
                        </p>

                        <div className="space-y-3">
                          {enhancedAdvantages[activeAdvantage].benefits.map((benefit, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: i * 0.1 }}
                              className="flex items-center"
                            >
                              <div className={`w-3 h-3 rounded-full ${getColorClasses(enhancedAdvantages[activeAdvantage].color, 'bg')} mr-3`} />
                              <span className="text-gray-700">{benefit}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <div className={`text-6xl font-bold ${getColorClasses(enhancedAdvantages[activeAdvantage].color, 'text')} mb-2`}>
                          {enhancedAdvantages[activeAdvantage].stats.value}
                          <span className="text-2xl">{enhancedAdvantages[activeAdvantage].stats.unit}</span>
                        </div>
                        <div className="text-gray-600 text-lg">
                          {enhancedAdvantages[activeAdvantage].stats.label}
                        </div>
                      </div>
                    </div>
                      </motion.div>
                    </AnimatePresenceWrapper>
                  );
                })()}

                {/* Navigation */}
                <div className="flex justify-center mt-8 space-x-3">
                  {enhancedAdvantages.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setActiveAdvantage(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        activeAdvantage === index
                          ? `${getColorClasses(enhancedAdvantages[index].color, 'bg')} scale-125 shadow-lg`
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
              ) : null}
            </AnimatePresenceWrapper>
          );
        })()}

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-20"
        >
          <motion.button
            onClick={() => router.push('/get-started')}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-primary via-primary-light to-primary-dark text-white font-semibold text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <span>Experience Our Advantages</span>
            <motion.svg
              className="ml-3 w-6 h-6"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </motion.svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default AdvantagesShowcase;