
import './App.css'
import BloomHighlights from './components/BloomHighlights'
import BloomingAcrossIndia from './components/BloomingAcrossIndia'
import HeroSection from './components/HeroSection'
import MemberRates from './components/MemberRates'
import Navbar from './components/Navbar'

function App() {


  return (
    <div>
     <Navbar/>
     <HeroSection/>
     <MemberRates/>
     <BloomingAcrossIndia/>
     <BloomHighlights/>
    </div>
  )
}

export default App
