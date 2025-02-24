import Hero from '../components/Hero'
import Menu from '../components/Menu'
import About from '../components/About'
import Contact from '../components/Contact'
import Map from '../components/Map'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Menu />
      {/* <About /> */}
      <Contact />
      <Footer />
    </main>
  )
}
