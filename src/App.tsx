import AboutUs from "./components/shared/AboutUs"
import Faqs from "./components/shared/Faqs"
import Footer from "./components/shared/Footer"
import HeroSection from "./components/shared/HeroSection"
import Judges from "./components/shared/Judges"
import Navbar from "./components/shared/Navbar"
import Prizes from "./components/shared/Prizes"
import Schedule from "./components/shared/Schedule"
import Sponsers from "./components/shared/Sponsers"

function App() {
  return (
    <>
      <main className="min-h-screen w-full">
        <div className="fixed top-0 z-50 w-full">
          <Navbar/>
        </div>
        <HeroSection/>
        <Schedule/>
        <Prizes/>
        <Judges/>
        <Sponsers/>
        <AboutUs/>
        <Faqs/>
        <Footer/>
      </main>
    </>
  )
}

export default App
