import React from 'react'
import Header from './components/Header'
import MacBookSection from './components/MacBookSection'
import IPadSection from './components/IPadSection'
import IPhoneSection from './components/IPhoneSection'
import ProductGrid from './components/ProductGrid'
import TradeInSection from './components/TradeInSection'
import AppleTVSection from './components/AppleTVSection'
import ServicesGrid from './components/ServicesGrid'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <MacBookSection />
        <IPadSection />
        <IPhoneSection />
        <ProductGrid />
        <TradeInSection />
        <AppleTVSection />
        <ServicesGrid />
      </main>
      <Footer />
    </div>
  )
}

export default App
