'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  const features = [
    {
      title: 'Ավանդական Խոհանոց',
      description: 'Հայկական խոհանոցի դարավոր ավանդույթները՝ ժամանակակից մատուցմամբ',
      icon: '🏺'
    },
    {
      title: 'Թարմ Բաղադրիչներ',
      description: 'Միայն տեղական, օրգանական և սեզոնային մթերքների օգտագործում',
      icon: '🌿'
    },
    {
      title: 'Փորձառու Շեֆեր',
      description: 'Մեր շեֆ-խոհարարների բազմամյա փորձը՝ ձեր ճաշի սեղանին',
      icon: '👨‍🍳'
    }
  ]

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Մեր Պատմությունը</h2>
          <div className="w-20 h-1 bg-[#ffd559] mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[250px] md:h-[500px] w-full rounded-lg overflow-hidden"
          >
            <Image
              src="https://images.pexels.com/photos/2544829/pexels-photo-2544829.jpeg"
              alt="Restaurant Interior"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 md:p-8 text-white">
              <p className="text-2xl md:text-3xl font-bold mb-1 md:mb-2">2024</p>
              <p className="text-lg md:text-xl">Հիմնադրման տարին</p>
            </div>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Տանիս ռեստորանը հիմնվել է 2024 թվականին՝ նպատակ ունենալով վերակենդանացնել
              հայկական խոհանոցի հարուստ ավանդույթները: Մեր փիլիսոփայությունն է՝ 
              միավորել ավանդականն ու ժամանակակիցը, ստեղծելով յուրահատուկ 
              գաստրոնոմիական փորձառություն:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white p-4 md:p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow"
                >
                  <div className="text-3xl md:text-4xl mb-3 md:mb-4">{feature.icon}</div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-[#ffd559]">{feature.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 