import Header from "./components/header"
import FirstView from "./components/first-view"
import BrandStory from "./components/brand-story"
import Features from "./components/features"
import HowToUse from "./components/how-to-use"
import Testimonials from "./components/testimonials"
import FAQ from "./components/faq"
import CTA from "./components/cta"
import SocialMedia from "./components/social-media"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-green-50">
      <Header />
      <FirstView />
      <BrandStory />
      <Features />
      <HowToUse />
      <Testimonials />
      <FAQ />
      <CTA />
      <SocialMedia />
    </main>
  )
}

