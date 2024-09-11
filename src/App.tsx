import Header from './components/Header'
import Hero from './components/Hero'
import WhatIs from './components/WhatIs'
import ManageFootprint from './components/ManageFootprint'
import Risks from './components/Risks'
import BestPractices from './components/BestPractices'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <main className="container mx-auto px-4">
        <WhatIs />
        <ManageFootprint />
        <Risks />
        <BestPractices />
      </main>
      <footer className="bg-gray-800 text-white text-center p-4 mt-8">
        <p>&copy; 18705014, BP Thobejane  </p>
      </footer>
    </div>
  )
}

export default App