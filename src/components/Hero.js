'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  const scrollToBottom = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    })
  }

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80"
          alt="Restaurant ambiance"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 w-full max-w-4xl mx-auto mt-20 md:mt-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-8xl font-bold text-white mb-4 md:mb-6 tracking-wide"
          >
            Տանիս
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="w-16 md:w-24 h-0.5 md:h-1 bg-[#ffd559] mx-auto mb-6 md:mb-8"
          />
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-base sm:text-lg md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed px-4 md:px-0"
          >
            Հայկական խոհանոցի լավագույն ավանդույթները՝{' '}
            <br className="hidden sm:block" />
            ժամանակակից մեկնաբանությամբ
          </motion.p>
        </motion.div>
      </div>

      {/* Elegant Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2"
        onClick={scrollToBottom}
      >
        <motion.div
          animate={{ 
            y: [0, 10, 0],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 2,
            ease: "easeInOut"
          }}
          className="cursor-pointer"
        >
          <div className="h-10 w-6 md:h-14 md:w-8 border-2 border-[#ffd559] rounded-full p-1">
            <motion.div
              animate={{ 
                y: [0, 10, 0]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 2,
                ease: "easeInOut"
              }}
              className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#ffd559] rounded-full mx-auto"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
} 