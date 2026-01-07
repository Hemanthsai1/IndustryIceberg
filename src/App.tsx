import Navbar from './components/Navbar'
import ValueProposition from './components/ValueProposition'
import ProductsShowcase from './components/ProductsShowcase'
import CustomerStories from './components/CustomerStories'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <ValueProposition />
      <ProductsShowcase />
      <CustomerStories />
      <Footer />
    </div>
  )
}

export default App
