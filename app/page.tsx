import Nav from "@/components/zero/Nav"
import Hero from "@/components/zero/Hero"
import Companion from "@/components/zero/Companion"
import HealthVitals from "@/components/zero/HealthVitals"
import HealthFeatures from "@/components/zero/HealthFeatures"
import Specs from "@/components/zero/Specs"
import Pricing from "@/components/zero/Pricing"
import FinalCTA from "@/components/zero/FinalCTA"
import Footer from "@/components/zero/Footer"

export default function InnovexaRingPage() {
  return (
    <main>
      <Nav />
      <Hero />
      <Companion />
      <HealthVitals />
      <HealthFeatures />
      <Specs />
      <Pricing />
      <FinalCTA />
      <Footer />
    </main>
  )
}
