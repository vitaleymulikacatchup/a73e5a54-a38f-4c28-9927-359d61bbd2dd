import React from 'react'

const AppleTVSection = () => {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-8xl mx-auto px-4">
        <div className="bg-gradient-to-r from-blue-100 via-pink-100 to-orange-100 rounded-2xl overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center min-h-[400px]">
            <div className="flex-1 p-8 lg:p-16">
              <div className="text-white text-4xl mb-4">tv+</div>
              <div className="text-6xl lg:text-8xl font-bold text-white mb-4">
                LOOT
              </div>
              <div className="flex gap-4 mb-6">
                <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-medium">
                  Stream now
                </button>
                <button className="border border-white text-white px-6 py-2 rounded-full text-sm font-medium">
                  Free 7-day trial
                </button>
              </div>
            </div>
            <div className="flex-1 p-8">
              <img 
                src="https://images.unsplash.com/photo-1494790108755-2616c9c0d0d0?w=600&h=400&fit=crop&crop=center" 
                alt="LOOT TV Show" 
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AppleTVSection
