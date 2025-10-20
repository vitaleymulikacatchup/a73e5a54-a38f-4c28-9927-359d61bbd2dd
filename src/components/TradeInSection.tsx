import React from 'react'

const TradeInSection = () => {
  return (
    <section className="py-16 bg-apple-gray-50">
      <div className="product-grid">
        <div className="bg-white rounded-2xl p-8 text-center min-h-[400px] flex flex-col justify-center">
          <div className="text-4xl mb-4">🍎Trade In</div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-apple-gray-700">
            Get up to $500-$700
          </h2>
          <p className="text-lg text-apple-gray-600 mb-2">
            in credit when you trade in
          </p>
          <p className="text-lg text-apple-gray-600 mb-6">
            iPhone 15 or iPhone 14.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="apple-button-primary">
              Learn more
            </button>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl p-8 text-center min-h-[400px] flex flex-col justify-center">
          <div className="text-4xl mb-4">🍎Card</div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-apple-gray-700">
            Get up to 3% Daily Cash back
          </h2>
          <p className="text-lg text-apple-gray-600 mb-6">
            with every purchase.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="apple-button-primary">
              Learn more
            </button>
            <button className="apple-button-secondary">
              Apply now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TradeInSection
