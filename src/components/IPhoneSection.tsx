import React from 'react'

const IPhoneSection = () => {
  return (
    <section className="bg-black text-white hero-section">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">
          iPhone 17 Pro
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          All out Pro.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button className="apple-button-primary">
            Learn more
          </button>
          <button className="apple-button-secondary">
            Buy
          </button>
        </div>
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&h=600&fit=crop&crop=center" 
            alt="iPhone 17 Pro" 
            className="w-full max-w-lg mx-auto object-contain"
          />
        </div>
      </div>
    </section>
  )
}

export default IPhoneSection
