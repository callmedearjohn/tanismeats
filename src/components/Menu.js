'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const menuItems = [
  {
    category: 'Ձկնեղեն',
    description: 'Հայաստանի լավագույն ձկնատեսակները՝ պատրաստված մեր շեֆ խոհարարների կողմից',
    image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&q=80',
    items: [
      {
        name: 'Իշխան',
        description: 'Սևանի իշխան՝ պատրաստված ավանդական եղանակով',
        image: 'https://images.unsplash.com/photo-1553701879-4aa576804f65?auto=format&fit=crop&q=80'
      },
      {
        name: 'Սիգ',
        description: 'Թարմ սևանյան սիգ՝ համեմված հայկական խոտաբույսերով',
        image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80'
      },
      {
        name: 'Ստերլետ',
        description: 'Նուրբ համով ստերլետ՝ գրիլած բանջարեղենով',
        image: 'https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?auto=format&fit=crop&q=80'
      }
    ]
  },
  {
    category: 'Մսային Ուտեստներ',
    description: 'Հայկական ավանդական մսային ուտեստներ՝ պատրաստված մեր գլխավոր խոհարարի հատուկ բաղադրատոմսերով',
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&q=80',
    items: [
      {
        name: 'Խորոված',
        description: 'Հայկական խորոված՝ թարմ համեմունքներով և բանջարեղենով',
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80'
      },
      {
        name: 'Սթեյք',
        description: 'Պրեմիում որակի տավարի միս՝ հատուկ մարինադով',
        image: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c4?auto=format&fit=crop&q=80'
      },
      {
        name: 'Քյաբաբ',
        description: 'Ավանդական հայկական քյաբաբ՝ թարմ կանաչիներով',
        image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&q=80'
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
              <div className="md:w-1/2 relative h-[300px] rounded-lg overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.category}
                  fill
                  className="object-cover"
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
                  <div className="relative h-48">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
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