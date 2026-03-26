import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const details = [
    { label: 'Age', value: '28 Years', icon: '✦' },
    { label: 'Profession', value: 'Student', icon: '✦' },
    { label: 'Qualification', value: 'Post Graduate', icon: '✦' },
    { label: 'Height', value: "5'4\"", icon: '✦' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut' as const,
      },
    },
  };

  const ornamentVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1.2,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FDF8F3] via-[#FAF0E6] to-[#F5E6D3] relative overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L35 25L60 30L35 35L30 60L25 35L0 30L25 25L30 0Z' fill='%238B1538' fill-opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Floating Decorative Elements */}
      <motion.div
        className="absolute top-10 left-10 md:top-20 md:left-20 text-[#C4A35A] opacity-20 text-4xl md:text-6xl"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
      >
        ❋
      </motion.div>
      <motion.div
        className="absolute top-20 right-10 md:top-40 md:right-32 text-[#8B1538] opacity-15 text-3xl md:text-5xl"
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
      >
        ✾
      </motion.div>
      <motion.div
        className="absolute bottom-40 left-10 md:bottom-60 md:left-24 text-[#C4A35A] opacity-15 text-3xl md:text-4xl"
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
      >
        ❁
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-8 md:py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? 'visible' : 'hidden'}
          className="max-w-2xl w-full"
        >
          {/* Top Ornament */}
          <motion.div variants={ornamentVariants} className="flex justify-center mb-6 md:mb-8">
            <div className="text-[#C4A35A] text-3xl md:text-4xl tracking-[0.5em]">✦ ❋ ✦</div>
          </motion.div>

          {/* Shubh Vivah Badge */}
          <motion.div variants={itemVariants} className="flex justify-center mb-4 md:mb-6">
            <div className="bg-gradient-to-r from-[#8B1538] via-[#A0213F] to-[#8B1538] text-[#F5E6D3] px-4 py-1.5 md:px-6 md:py-2 rounded-full text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase font-medium shadow-lg">
              शुभ विवाह
            </div>
          </motion.div>

          {/* Main Card */}
          <motion.div
            variants={itemVariants}
            className="bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl shadow-2xl border border-[#C4A35A]/30 overflow-hidden"
          >
            {/* Gold Top Border */}
            <div className="h-1.5 md:h-2 bg-gradient-to-r from-[#C4A35A] via-[#E8D5A3] to-[#C4A35A]" />

            <div className="p-6 md:p-10 lg:p-12">
              {/* Decorative Top Element */}
              <motion.div variants={itemVariants} className="flex justify-center mb-6 md:mb-8">
                <svg
                  width="120"
                  height="40"
                  viewBox="0 0 120 40"
                  className="text-[#8B1538] w-24 md:w-32"
                >
                  <path
                    d="M0 20 Q30 0 60 20 Q90 40 120 20"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <circle cx="60" cy="20" r="4" fill="#C4A35A" />
                  <circle cx="30" cy="10" r="2" fill="currentColor" />
                  <circle cx="90" cy="30" r="2" fill="currentColor" />
                </svg>
              </motion.div>

              {/* Name */}
              <motion.div variants={itemVariants} className="text-center mb-6 md:mb-8">
                <h1
                  className="text-4xl md:text-5xl lg:text-6xl text-[#8B1538] mb-2 md:mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Ayush Jha
                </h1>
                <div className="flex items-center justify-center gap-2 md:gap-3 text-[#C4A35A]">
                  <span className="w-8 md:w-12 h-px bg-[#C4A35A]" />
                  <span className="text-sm md:text-base tracking-widest">✦</span>
                  <span className="w-8 md:w-12 h-px bg-[#C4A35A]" />
                </div>
              </motion.div>

              {/* Profile Photo Placeholder */}
              <motion.div variants={itemVariants} className="flex justify-center mb-8 md:mb-10">
                <div className="relative">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-[#F5E6D3] to-[#E8D5C4] border-4 border-[#C4A35A] flex items-center justify-center shadow-xl">
                    <div className="text-[#8B1538]/30 text-4xl md:text-5xl">
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-12 h-12 md:w-16 md:h-16"
                      >
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                    </div>
                  </div>
                  {/* Decorative ring */}
                  <div className="absolute inset-0 -m-2 rounded-full border-2 border-dashed border-[#C4A35A]/40 animate-spin" style={{ animationDuration: '30s' }} />
                </div>
              </motion.div>

              {/* Details Grid */}
              <motion.div variants={itemVariants} className="grid grid-cols-2 gap-3 md:gap-4 mb-8 md:mb-10">
                {details.map((detail) => (
                  <motion.div
                    key={detail.label}
                    variants={itemVariants}
                    className="bg-gradient-to-br from-[#FAF0E6] to-[#F5E6D3] rounded-xl md:rounded-2xl p-4 md:p-5 text-center border border-[#C4A35A]/20 hover:border-[#C4A35A]/40 transition-all duration-300 hover:shadow-lg group"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="text-[#C4A35A] text-sm md:text-base mb-1 group-hover:scale-110 transition-transform">
                      {detail.icon}
                    </div>
                    <div
                      className="text-[#5C3D2E] text-xs md:text-sm tracking-wider uppercase mb-1"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      {detail.label}
                    </div>
                    <div
                      className="text-[#8B1538] text-base md:text-lg font-semibold"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {detail.value}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Decorative Divider */}
              <motion.div variants={itemVariants} className="flex items-center justify-center gap-3 md:gap-4 mb-6 md:mb-8">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#C4A35A] to-transparent" />
                <span className="text-[#C4A35A] text-lg md:text-xl">❋</span>
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#C4A35A] to-transparent" />
              </motion.div>

              {/* Quote Section */}
              <motion.div
                variants={itemVariants}
                className="text-center px-2 md:px-4"
              >
                <p
                  className="text-[#5C3D2E] text-base md:text-lg italic leading-relaxed"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  "May this journey bring endless blessings, love, and happiness"
                </p>
                <div className="mt-3 md:mt-4 text-[#C4A35A] text-xl md:text-2xl">॥ शुभम् ॥</div>
              </motion.div>
            </div>

            {/* Gold Bottom Border */}
            <div className="h-1.5 md:h-2 bg-gradient-to-r from-[#C4A35A] via-[#E8D5A3] to-[#C4A35A]" />
          </motion.div>

          {/* Bottom Ornament */}
          <motion.div variants={ornamentVariants} className="flex justify-center mt-6 md:mt-8">
            <div className="text-[#C4A35A] text-2xl md:text-3xl tracking-[0.3em] md:tracking-[0.5em]">✦ ❁ ✦</div>
          </motion.div>

          {/* Auspicious Message */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-6 md:mt-8"
          >
            <p
              className="text-[#8B1538]/60 text-xs md:text-sm tracking-wider"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              ॥ सर्वे भवन्तु सुखिनः ॥
            </p>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-4 md:bottom-6 left-0 right-0 text-center"
        >
          <p className="text-[#5C3D2E]/40 text-[10px] md:text-xs tracking-wide">
            Requested by @Nishant293 · Built by @clonkbot
          </p>
        </motion.footer>
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-0 left-0 w-20 h-20 md:w-32 md:h-32 overflow-hidden pointer-events-none">
        <div className="absolute -top-10 -left-10 md:-top-16 md:-left-16 w-20 h-20 md:w-32 md:h-32 border-4 border-[#C4A35A]/20 rounded-full" />
      </div>
      <div className="absolute top-0 right-0 w-20 h-20 md:w-32 md:h-32 overflow-hidden pointer-events-none">
        <div className="absolute -top-10 -right-10 md:-top-16 md:-right-16 w-20 h-20 md:w-32 md:h-32 border-4 border-[#C4A35A]/20 rounded-full" />
      </div>
      <div className="absolute bottom-0 left-0 w-20 h-20 md:w-32 md:h-32 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-10 -left-10 md:-bottom-16 md:-left-16 w-20 h-20 md:w-32 md:h-32 border-4 border-[#C4A35A]/20 rounded-full" />
      </div>
      <div className="absolute bottom-0 right-0 w-20 h-20 md:w-32 md:h-32 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-10 -right-10 md:-bottom-16 md:-right-16 w-20 h-20 md:w-32 md:h-32 border-4 border-[#C4A35A]/20 rounded-full" />
      </div>
    </div>
  );
}

export default App;
