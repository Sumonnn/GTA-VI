import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import Firstvideo from './sections/Firstvideo';
import Jason from './sections/Jason';
import Secondvideo from './sections/Secondvideo';
import Lucia from './sections/Lucia';
import PostCard from './sections/PostCard';


gsap.registerPlugin(ScrollTrigger);

function App() {


  return (
    <main>
      <Navbar />
      <Hero />

      <Firstvideo />
      <Jason />

      <Secondvideo />
      <Lucia />

      <PostCard />
    </main>
  )
}

export default App