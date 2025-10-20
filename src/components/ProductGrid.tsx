import React from 'react'

const ProductGrid = () => {
  const products = [
    {
      title: 'iPhone Air',
      subtitle: 'The thinnest iPhone ever.',
      description: 'With the power of pro inside.',
      image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&h=300&fit=crop&crop=center',
      bgColor: 'bg-apple-gray-50'
    },
    {
      title: '🍎Vision Pro',
      subtitle: 'New powerful M4 chip and comfortable band.',
      description: 'Available starting 10.22',
      image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=400&h=300&fit=crop&crop=center',
      bgColor: 'bg-apple-gray-50'
    },
    {
      title: 'AirPods Pro 3',
      subtitle: 'The world\'s best in-ear',
      description: 'Active Noise Cancellation.',
      image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&h=300&fit=crop&crop=center',
      bgColor: 'bg-apple-gray-50'
    },
    {
      title: '🍎WATCH SERIES 11',
      subtitle: 'The ultimate way to watch your health.',
      description: '',
      image: 'https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=400&h=300&fit=crop&crop=center',
      bgColor: 'bg-apple-gray-50'
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="product-grid">
        {products.map((product, index) => (
          <div key={index} className={`${product.bgColor} rounded-2xl p-8 text-center min-h-[500px] flex flex-col justify-between`}>
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-2 text-apple-gray-700">
                {product.title}
              </h2>
              <p className="text-lg text-apple-gray-600 mb-2">
                {product.subtitle}
              </p>
              {product.description && (
                <p className="text-base text-apple-gray-500 mb-6">
                  {product.description}
                </p>
              )}
              <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
                <button className="apple-button-primary">
                  Learn more
                </button>
                <button className="apple-button-secondary">
                  Buy
                </button>
              </div>
            </div>
            <div className="flex-1 flex items-end justify-center">
              <img 
                src={product.image} 
                alt={product.title} 
                className="w-full max-w-xs object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProductGrid
