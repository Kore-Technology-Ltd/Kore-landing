import { useState, useEffect } from 'react'
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
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

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

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="kore-scroll-top"
          aria-label="Scroll to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </button>
      )}
    </div>
  )
}
