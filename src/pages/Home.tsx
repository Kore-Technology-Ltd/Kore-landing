import { useEffect } from 'react'
import Navbar from '@/components/sections/Navbar/Navbar'
import Hero from '@/components/sections/Hero/Hero'
import Story from '@/components/sections/Story/Story'
import WasteCrisis from '@/components/sections/WasteCrisis/WasteCrisis'
import BetterWay from '@/components/sections/BetterWay/BetterWay'
import CoreProblem from '@/components/sections/CoreProblem/CoreProblem'
import WhyDifferent from '@/components/sections/WhyDifferent/WhyDifferent'
import WhyKore from '@/components/sections/WhyKore/WhyKore'
import HowItWorks from '@/components/sections/HowItWorks/HowItWorks'
import FlowAndWhy from '@/components/sections/FlowAndWhy/FlowAndWhy'
import Waitlist from '@/components/sections/Waitlist/Waitlist'
import FAQ from '@/components/sections/FAQ/FAQ'
import Footer from '@/components/sections/Footer/Footer'

export default function KoreLandingPage() {
  useEffect(() => {
    if (window.location.hash) {
      const hashId = window.location.hash.substring(1)
      const timer = setTimeout(() => {
        const element = document.getElementById(hashId)
        if (element) {
          const navbar = document.querySelector('.kore-navbar-container')
          const offset = navbar ? navbar.clientHeight : 80
          const bodyRect = document.body.getBoundingClientRect().top
          const elementRect = element.getBoundingClientRect().top
          const elementPosition = elementRect - bodyRect
          const offsetPosition = elementPosition - offset

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })
        }
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [])

  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Story />
        <WasteCrisis />
        <BetterWay />
        <CoreProblem />
        <WhyDifferent />
        <WhyKore />
        <HowItWorks />
        <FlowAndWhy />
        <Waitlist />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
