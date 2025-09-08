import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Upload from './Upload'


// Import all your design assets
import img1 from './assets/1.png'
import img2 from './assets/2.png'
import img2_2 from './assets/2 (2).png'
import img3 from './assets/3.png'
import img4 from './assets/4.png'
import img5 from './assets/5.png'
import img6 from './assets/6.png'
import img6_2 from './assets/6 (2).png'
import img7 from './assets/7.png'
import img7_2 from './assets/7 (2).png'
import img8 from './assets/8.png'
import img8_2 from './assets/8 (2).png'
import img10 from './assets/10.png'
import img11 from './assets/11.png'
import img15 from './assets/15.png'
import img19 from './assets/19.png'
import img21 from './assets/21.png'
import img32 from './assets/32.png'
import img3May from './assets/3May 1999.png'
import friendstravel from './assets/Friendstravel.png'
import friendstravel5 from './assets/friendstravel5.png'
import friendstravel6 from './assets/friendstravel6.png'
import friendstravel7 from './assets/friendstravel7.png'
import friendstravel8 from './assets/friendstravel8.png'
import friendstravel9 from './assets/friendstravel9.png'
import sbt from './assets/sbt.png'
import smart from './assets/Smart.png'
import smart2 from './assets/Smart (2).png'
import tprHiring from './assets/TPR - Hiring Post .png'
import worldFashion from './assets/World Fashion.png'

// Original image data - keeping original sizes like Pinterest
const originalImageData = [
  { id: 1, src: friendstravel8 },
  { id: 2, src: img3 },
  { id: 3, src: smart },
  { id: 4, src: img7_2 },
  { id: 5, src: friendstravel6 },
  { id: 6, src: img15 },
  { id: 7, src: worldFashion },
  { id: 8, src: img2_2 },
  { id: 9, src: friendstravel },
  { id: 10, src: img6 },
  { id: 11, src: img3May },
  { id: 12, src: img8_2 },
  { id: 13, src: friendstravel5 },
  { id: 14, src: img11 },
  { id: 15, src: sbt },
  { id: 16, src: img4 },
  { id: 17, src: friendstravel7 },
  { id: 18, src: img32 },
  { id: 19, src: img1 },
  { id: 20, src: img7 },
  { id: 21, src: friendstravel9 },
  { id: 22, src: img6_2 },
  { id: 23, src: tprHiring },
  { id: 24, src: img19 },
  { id: 25, src: img5 },
  { id: 26, src: img21 },
  { id: 27, src: img8 },
  { id: 28, src: img10 },
  { id: 29, src: img2 },
  { id: 30, src: smart2 },
]

// Shuffle function
const shuffleArray = (array) => {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

const ImageCard = ({ image }) => {
  const handleContextMenu = (e) => {
    e.preventDefault()
    return false
  }

  return (
    <div className="group break-inside-avoid mb-6">
      <div className="relative overflow-hidden rounded-xl shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 transform hover:-translate-y-2">
        <img
          src={image.src}
          alt={`Design ${image.id}`}
          className="w-full h-auto object-cover transition-transform duration-500 select-none"
          onContextMenu={handleContextMenu}
          draggable={false}
          loading="lazy"
          style={{
            userSelect: 'none',
            WebkitUserSelect: 'none',
            pointerEvents: 'none'
          }}
        />
        {/* Invisible overlay to block interactions */}
        <div 
          className="absolute inset-0" 
          onContextMenu={handleContextMenu}
          style={{ pointerEvents: 'auto' }}
        />
      </div>
    </div>
  )
}

const Portfolio = () => {
  const [imageData, setImageData] = useState(originalImageData)
  const [isShuffling, setIsShuffling] = useState(false)

  const handleShuffle = () => {
    setIsShuffling(true)
    
    // Add multiple shuffle effects
    let shuffleCount = 0
    const maxShuffles = 5
    
    const shuffleInterval = setInterval(() => {
      setImageData(shuffleArray(originalImageData))
      shuffleCount++
      
      if (shuffleCount >= maxShuffles) {
        clearInterval(shuffleInterval)
        // Final shuffle with delay
        setTimeout(() => {
          setImageData(shuffleArray(originalImageData))
          setIsShuffling(false)
        }, 200)
      }
    }, 150)
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Header Section */}
      <header className="bg-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex justify-between items-start">
            <div className="space-y-2">
              <div className="flex items-baseline space-x-4">
                <h1 className="font-montserrat text-5xl md:text-7xl font-black text-white tracking-tight animate-pulse hover:animate-none transition-all duration-500 hover:text-orange-500 hover:scale-105">
                  PORTFOLIO
                </h1>
              </div>
              <div className="flex justify-between items-center">
                <p className="font-montserrat text-gray-400">Graphic Design</p>
                <p className="font-montserrat text-gray-400">Sahil Gupta</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="bg-black">
        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Hero Section */}
          <div className="space-y-8 mb-20">
            <div>
              <h2 className="font-montserrat text-6xl md:text-7xl font-black text-white mb-6 transform hover:scale-105 transition-all duration-500 hover:text-orange-500 origin-center">
                HELLO<span className="text-orange-500">!</span>
              </h2>
              
              {/* Professional Bio */}
              <div className="max-w-4xl space-y-6">
                <p className="font-montserrat text-lg text-gray-300 leading-relaxed animate-fade-in">
                  I'm <span className="text-orange-500 font-semibold hover:text-white transition-colors duration-300">Sahil Gupta</span>, a creative 
                  <span className="text-white font-semibold hover:text-orange-500 transition-colors duration-300"> graphic designer</span> crafting visual stories through 
                  <span className="text-orange-500 font-semibold"> banners</span>, <span className="text-orange-500 font-semibold">social media designs</span>, 
                  <span className="text-orange-500 font-semibold"> thumbnails</span>, <span className="text-orange-500 font-semibold">branding</span>, and 
                  <span className="text-orange-500 font-semibold"> content design</span>. 
                  With 2 years of experience, I blend technical precision with creative vision to deliver impactful designs.
                </p>
                
                <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-orange-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-orange-500/10">
                  <p className="font-montserrat text-base text-gray-300 leading-relaxed">
                    <span className="text-orange-500 font-semibold hover:text-white transition-colors duration-300">Background:</span> As a 
                    <span className="text-white font-semibold hover:text-orange-500 transition-colors duration-300"> software developer</span> by profession, 
                    design naturally became my creative outlet. I've mastered <span className="text-orange-500 font-semibold hover:text-white transition-colors duration-300">Canva </span> 
                    and worked with <span className="text-white font-semibold hover:text-orange-500 transition-colors duration-300">TPR India Foundation </span> 
                    for 2 months, plus ongoing <span className="text-orange-500 font-semibold hover:text-white transition-colors duration-300">freelance work</span>.
                  </p>
                  
                  <p className="font-montserrat text-base text-gray-300 leading-relaxed mt-4">
                    This collection showcases my <span className="text-orange-500 font-semibold hover:text-white transition-colors duration-300">recent work</span> - 
                    a mix of professional projects and creative experiments. Each piece represents my journey in visual storytelling and design evolution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Gallery Section */}
      <section className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="font-montserrat text-4xl md:text-5xl font-black text-white mb-4 transform hover:scale-105 transition-all duration-300">
                <span className="inline-block hover:text-orange-500 transition-colors duration-300">MY</span> <span className="text-orange-500 inline-block hover:text-white transition-colors duration-300">WORK</span>
              </h2>
              <p className="font-montserrat text-gray-400 text-lg hover:text-white transition-colors duration-300">
                A collection of my recent creative designs and visual projects
              </p>
            </div>
            <button 
              onClick={handleShuffle}
              disabled={isShuffling}
              className={`bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-montserrat font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25 ${isShuffling ? 'animate-pulse opacity-75' : ''}`}
            >
              {isShuffling ? 'Shuffling...' : 'Shuffle Design'}
            </button>
          </div>
          
          <div className={`columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 transition-all duration-300 ${isShuffling ? 'opacity-70 scale-95' : 'opacity-100 scale-100'}`}>
            {imageData.map((image, index) => (
              <div 
                key={image.id} 
                className={`transition-all duration-200 ${isShuffling ? 'animate-pulse' : ''}`}
                style={{
                  animationDelay: isShuffling ? `${index * 0.05}s` : '0s'
                }}
              >
                <ImageCard image={image} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </Router>
  )
}

export default App