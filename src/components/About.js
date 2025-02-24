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
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Մեր Պատմությունը</h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Տանիս ռեստորանը հիմնվել է 2024 թվականին՝ նպատակ ունենալով վերակենդանացնել
              հայկական խոհանոցի հարուստ ավանդույթները: Մեր փիլիսոփայությունն է՝ 
              միավորել ավանդականն ու ժամանակակիցը, ստեղծելով յուրահատուկ 
              գաստրոնոմիական փորձառություն:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-gray-50 p-6 rounded-lg text-center"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] rounded-lg overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80"
              alt="Restaurant Interior"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <p className="text-2xl font-semibold">20+</p>
              <p className="text-lg">Յուրահատուկ Ուտեստներ</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 