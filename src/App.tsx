import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ValueProposition from './components/ValueProposition'
import ProductsShowcase from './components/ProductsShowcase'
import CustomerStories from './components/CustomerStories'
import Footer from './components/Footer'
import Veritascribe from './components/Veritascribe'
import GMPCompliance from './components/GMPCompliance'
import ComplaintSiteSearch from './components/ComplaintSiteSearch'
import QualityTraining from './components/QualityTraining'
import Blog from './components/Blog'
import ECTDAI from './components/ECTDAI'
import VideoCreationService from './components/VideoCreationService'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="App">
            <Navbar />
            <ValueProposition />
            <ProductsShowcase />
            <CustomerStories />
            <Footer />
          </div>
        } />
        <Route path="/veritascribe" element={
          <div className="App">
            <Navbar />
            <Veritascribe />
          </div>
        } />
        <Route path="/gmp-compliance" element={
          <div className="App">
            <Navbar />
            <GMPCompliance />
          </div>
        } />
        <Route path="/complaint-site-search" element={
          <div className="App">
            <Navbar />
            <ComplaintSiteSearch />
          </div>
        } />
        <Route path="/quality-training" element={
          <div className="App">
            <Navbar />
            <QualityTraining />
          </div>
        } />
        <Route path="/blog" element={
          <div className="App">
            <Navbar />
            <Blog />
            <Footer />
          </div>
        } />
        <Route path="/ectd-ai" element={
          <div className="App">
            <Navbar />
            <ECTDAI />
          </div>
        } />
        <Route path="/video-creation-service" element={
          <div className="App">
            <Navbar />
            <VideoCreationService />
          </div>
        } />
      </Routes>
    </Router>
  )
}

export default App
