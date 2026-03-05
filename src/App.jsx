import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProblemStatement from './components/ProblemStatement'
import RootCause from './components/RootCause'
import Fishbone from './components/Fishbone'
import Solution from './components/Solution'
import PilotCommunities from './components/PilotCommunities'
import Impact from './components/Impact'
import HowMightWe from './components/HowMightWe'
import Pitch from './components/Pitch'
import Resources from './components/Resources'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0f1e]">
      <Navbar />
      <Hero />
      <ProblemStatement />
      <RootCause />
      <Fishbone />
      <Solution />
      <PilotCommunities />
      <Impact />
      <HowMightWe />
      <Pitch />
      <Resources />
      <Footer />
    </div>
  )
}
