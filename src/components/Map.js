'use client'
import { motion } from 'framer-motion'

export default function Map() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Մեր Հասցեն
        </motion.h2>
        
        <div className="rounded-lg overflow-hidden shadow-lg">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3046.7340858116677!2d44.58556878399342!3d40.21497768292198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406aa3068a399407%3A0x75eb884dfb9f6a07!2s79%20Nver%20Safaryan%20St%2C%20Yerevan!5e0!3m2!1sen!2sam!4v1740426608616!5m2!1sen!2sam" 
            width="100%" 
            height="450" 
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-6 h-6 bg-red-500 rounded-full animate-pulse">
              <div className="w-6 h-6 bg-red-500 rounded-full animate-ping absolute"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 