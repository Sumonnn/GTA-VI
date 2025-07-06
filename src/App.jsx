import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import Firstvideo from './sections/Firstvideo';


gsap.registerPlugin(ScrollTrigger);

function App() {


  return (
    <main>
      <Navbar />

      <Hero />

      <Firstvideo />
    </main>
  )
}

export default App