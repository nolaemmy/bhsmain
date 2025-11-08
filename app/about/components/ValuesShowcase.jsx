'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView, useMotionValue, useTransform } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { IntegrityIcon, ExcellenceIcon, InnovationIcon, PartnershipIcon } from '../../../components/ui/custom-icons';

const ValuesShowcase = ({ values }) => {
  const router = useRouter();
  
  // Helper function to get custom icon based on value title
  const getCustomIcon = (title) => {
    const iconProps = { size: 32, className: "text-white" };
    switch (title) {
      case 'Integrity':
        return <IntegrityIcon {...iconProps} />;
      case 'Excellence':
        return <ExcellenceIcon {...iconProps} />;
      case 'Innovation':
        return <InnovationIcon {...iconProps} />;
      case 'Partnership':
        return <PartnershipIcon {...iconProps} />;
      default:
        return <IntegrityIcon {...iconProps} />;
    }
  };
  const [activeValue, setActiveValue] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, threshold: 0.1 });
  
  // Mouse tracking for interactive effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Auto-rotation through values
  useEffect(() => {
    if (isHovering || selectedCard !== null) return;
    
    const interval = setInterval(() => {
      setActiveValue((prev) => (prev + 1) % values.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [values.length, isHovering, selectedCard]);

  // Mouse movement handler
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      
      mouseX.set(x);
      mouseY.set(y);
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

  const backgroundX = useTransform(mouseX, [0, 1], [-20, 20]);
  const backgroundY = useTransform(mouseY, [0, 1], [-20, 20]);

  // Enhanced value data with detailed content
  const enhancedValues = values.map((value, index) => ({
    ...value,
    id: index,
    gradient: [
      'from-primary to-primary-dark',
      'from-primary-light to-primary',
      'from-primary-dark to-primary-light',
      'from-primary to-primary-light'
    ][index % 4],
    detailedDescription: [
      "We maintain the highest standards of honesty and transparency in all our business practices. Every decision we make is guided by ethical principles and a commitment to doing what's right for our clients.",
      "We continuously strive to exceed expectations in every aspect of our service delivery. Our commitment to excellence drives us to innovate and improve constantly.",
      "We embrace cutting-edge technology and creative solutions to solve complex challenges. Innovation is at the heart of everything we do.",
      "We believe in building lasting relationships based on mutual trust and shared success. Your success is our success."
    ][index % 4],
    stats: [
      { label: "Client Trust Score", value: "99.8%" },
      { label: "Service Excellence", value: "98.5%" },
      { label: "Innovation Index", value: "96.2%" },
      { label: "Partnership Success", value: "97.8%" }
    ][index % 4]
  }));

  return (
    <section 
      ref={containerRef}
      className="py-32 relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Animated background elements */}
      <motion.div 
        style={{ x: backgroundX, y: backgroundY }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-primary/20 to-primary-light/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-primary-light/20 to-primary/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-br from-primary-dark/20 to-primary/30 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
      </motion.div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-gradient-to-br from-primary/20 to-primary-light/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-primary-light/10 border border-primary/30 text-primary text-sm font-medium mb-6"
          >
            <div className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse" />
            Our Foundation
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            The Principles That
            <span className="block bg-gradient-to-r from-primary via-primary-light to-primary-dark bg-clip-text text-transparent">
              Guide Us
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            These core values are more than words—they're the foundation of every decision we make and every relationship we build.
          </p>
        </motion.div>


        {/* Active value highlight section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-4xl mx-auto relative"
        >
          {/* Left Arrow */}
          <motion.button
            onClick={() => setActiveValue((prev) => (prev - 1 + values.length) % values.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-gray-600 hover:text-primary group"
            whileHover={{ scale: 1.05, x: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <svg
              className="w-5 h-5 group-hover:scale-110 transition-transform duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>

          {/* Right Arrow */}
          <motion.button
            onClick={() => setActiveValue((prev) => (prev + 1) % values.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-gray-600 hover:text-primary group"
            whileHover={{ scale: 1.05, x: 2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <svg
              className="w-5 h-5 group-hover:scale-110 transition-transform duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>

          <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-2xl overflow-hidden">
            
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 25% 25%, rgba(11, 132, 135, 0.3) 0%, transparent 50%),
                                 radial-gradient(circle at 75% 75%, rgba(12, 149, 152, 0.3) 0%, transparent 50%)`
              }} />
            </div>
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <motion.div
                  key={activeValue}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${enhancedValues[activeValue].gradient} text-white mb-6 shadow-lg`}
                >
                  {getCustomIcon(enhancedValues[activeValue].title)}
                </motion.div>
                
                <motion.h3
                  key={`title-${activeValue}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                >
                  {enhancedValues[activeValue].title}
                </motion.h3>
                
                <motion.p
                  key={`desc-${activeValue}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-lg text-gray-700 leading-relaxed"
                >
                  {enhancedValues[activeValue].detailedDescription}
                </motion.p>
              </div>
              
              {/* Value navigation dots */}
              <div className="flex justify-center space-x-3">
                {enhancedValues.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setActiveValue(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      activeValue === index 
                        ? 'bg-primary scale-125 shadow-lg' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center mt-16"
        >
          <motion.button
            onClick={() => router.push('/get-started')}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-primary-light text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <span>Experience Our Values in Action</span>
            <motion.svg
              className="ml-2 w-5 h-5"
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

export default ValuesShowcase;