import React from 'react'
import Navigation from './components/Navigation'
import Landing from './pages/Landing'
import ProductStory from './pages/ProductStory'
import Features from './pages/Features'
import Notify from './pages/Notify'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="app-container">
      <Navigation />
      <main>
        <Landing />
        <ProductStory />
        <Features />
        <Notify />
      </main>
    </div>
  )
}

export default App
