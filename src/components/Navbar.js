'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Navbar() {
  const handleCall = () => {
    window.location.href = 'tel:+37494692249'
  }

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 py-4 shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div
          className="relative w-[60px] h-[60px]"
        >
          <motion.div
            className="absolute inset-0 rounded-full bg-[#ffd559]"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <Link href="/" className="relative block w-full h-full">
            <Image
              src="/logo.png"
              alt="Tanis Logo"
              width={100}
              height={100}
              className="relative z-10 object-contain p-1 rounded-full"
            />
          </Link>
        </motion.div>
        <div className="space-x-6">
          <button
            onClick={handleCall}
            className="bg-[#ffd559] text-black px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-medium hover:bg-[#ffed59] transition-colors flex items-center gap-1.5 text-xs sm:text-sm"
          >
            <svg 
              className="w-3.5 h-3.5 sm:w-4 sm:h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
              />
            </svg>
            <span>Ամրագրել</span>
          </button>
        </div>
      </div>
    </nav>
  )
}