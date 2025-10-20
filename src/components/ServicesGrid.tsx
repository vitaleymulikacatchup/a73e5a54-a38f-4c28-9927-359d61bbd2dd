import React from 'react'

const ServicesGrid = () => {
  const services = [
    {
      title: 'Apple Arcade',
      subtitle: 'Over 200 games. One subscription.',
      color: 'bg-green-500',
      textColor: 'text-white'
    },
    {
      title: 'Apple Music',
      subtitle: 'Over 100 million songs.',
      color: 'bg-apple-gray-800',
      textColor: 'text-white'
    },
    {
      title: 'Apple Fitness+',
      subtitle: 'Fitness for everyone.',
      color: 'bg-apple-gray-800',
      textColor: 'text-white'
    },
    {
      title: 'Apple News+',
      subtitle: 'Hundreds of magazines.',
      color: 'bg-pink-500',
      textColor: 'text-white'
    }
  ]

  return (
    <section className="py-8 bg-white">
      <div className="max-w-8xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <div key={index} className={`${service.color} ${service.textColor} rounded-2xl p-6 min-h-[300px] flex flex-col justify-between`}>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  {service.title}
                </h3>
                <p className="text-sm opacity-90">
                  {service.subtitle}
                </p>
              </div>
              <div className="flex gap-2">
                <button className="bg-white bg-opacity-20 text-white px-4 py-2 rounded-full text-xs font-medium">
                  Try it free
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesGrid
