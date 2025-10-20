import React from 'react'

const IPadSection = () => {
  return (
    <section className="bg-black text-white hero-section">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">
          iPad Pro
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-2">
          Advanced AI performance
        </p>
        <p className="text-xl md:text-2xl text-gray-300 mb-2">
          and game-changing capabilities.
        </p>
        <p className="text-lg text-gray-400 mb-8">
          Available starting 10.22
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button className="apple-button-primary">
            Learn more
          </button>
          <button className="apple-button-secondary">
            Pre-order
          </button>
        </div>
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&h=600&fit=crop&crop=center" 
            alt="iPad Pro" 
            className="w-full max-w-2xl mx-auto object-contain"
          />
        </div>
      </div>
    </section>
  )
}

export default IPadSection
