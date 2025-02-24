'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const menuItems = [
  {
    category: 'Ձկնեղեն',
    description: 'Հայաստանի լավագույն ձկնատեսակները՝ պատրաստված մեր շեֆ խոհարարների կողմից',
    image: 'https://images.pexels.com/photos/3298180/pexels-photo-3298180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    items: [
      {
        name: 'Իշխան',
        description: 'Սևանի իշխան՝ պատրաստված ավանդական եղանակով',
        image: 'https://images.pexels.com/photos/3763847/pexels-photo-3763847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        name: 'Սիգ',
        description: 'Թարմ սևանյան սիգ՝ համեմված հայկական խոտաբույսերով',
        image: 'https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        name: 'Ստերլետ',
        description: 'Նուրբ համով ստերլետ՝ գրիլած բանջարեղենով',
        image: 'https://images.pexels.com/photos/3298180/pexels-photo-3298180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      }
    ]
  },
  {
    category: 'Մսային Ուտեստներ',
    description: 'Հայկական ավանդական մսային ուտեստներ՝ պատրաստված մեր գլխավոր խոհարարի հատուկ բաղադրատոմսերով',
    image: 'https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    items: [
      {
        name: 'Խորոված',
        description: 'Հայկական խորոված՝ թարմ համեմունքներով և բանջարեղենով',
        image: 'https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        name: 'Սթեյք',
        description: 'Պրեմիում որակի տավարի միս՝ հատուկ մարինադով',
        image: 'https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        name: 'Քյաբաբ',
        description: 'Ավանդական հայկական քյաբաբ՝ թարմ կանաչիներով',
        image: 'https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      }
    ]
  }
]

export default function Menu() {
  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Մեր Առաջարկները
        </motion.h2>
        
        {menuItems.map((category, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="mb-20"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
              <div className="md:w-1/2">
                <h3 className="text-3xl font-semibold mb-4 text-[#ffd559]">{category.category}</h3>
                <p className="text-gray-700 text-lg mb-6">{category.description}</p>
              </div>
              <div className="w-full h-[200px] md:h-[300px] md:w-1/2 relative rounded-lg overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.category}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority={true}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {category.items.map((item, itemIndex) => (
                <motion.div 
                  key={itemIndex}
                  whileHover={{ y: -10 }}
                  className="bg-gray-50 rounded-lg overflow-hidden shadow-lg"
                >
                  <div className="relative h-[200px] md:h-48">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-semibold mb-3">{item.name}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
} 