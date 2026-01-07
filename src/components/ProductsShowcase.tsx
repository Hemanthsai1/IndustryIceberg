import type { FC } from 'react'
import './ProductsShowcase.css'

const ProductsShowcase: FC = () => {
  return (
    <section id="services" className="products-showcase">
      <div className="products-container">
        <div className="products-header">
          <h2 className="products-title">Our Products & Services</h2>
          <p className="products-subtitle">
            IndustryIceberg delivers comprehensive AI-driven solutions designed for enterprise needs
          </p>
        </div>

        <div className="products-grid">
          <div className="product-card">
            <div className="product-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="product-title">GMP Complisense Platform</h3>
            <p className="product-description">
              An IndustryIceberg product designed for GMP audits and complisense management. 
              Helps organizations navigate FDA inspections and improve their complisense posture.
            </p>
            <ul className="product-features">
              <li>
                <strong>Observation Analysis:</strong> AI analyzes FDA 483 observations and maps 
                them to relevant CFR sections.
              </li>
              <li>
                <strong>Historical Pattern Analysis:</strong> Displays how often CFR numbers were 
                cited between 2007 and 2025 to identify recurring complisense risks.
              </li>
              <li>
                <strong>Corrective & Preventive Actions (CAPA):</strong> AI-generated CAPA 
                recommendations based on observation and CFR analysis.
              </li>
            </ul>
            <a 
              href="https://gmpcomplianceai.azurewebsites.net/dashboard" 
              target="_blank" 
              rel="noopener noreferrer"
              className="product-link"
            >
              Learn More →
            </a>
          </div>

          <div className="product-card">
            <div className="product-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.663 17H4.662C3.74214 17 3.00024 16.2581 3.00024 15.3382V4.66176C3.00024 3.7419 3.74214 3 4.662 3H15.338C16.2579 3 17 3.7419 17 4.66176V9.663M14.5 2.5V8.5M11.5 5.5H17.5M20.5 14.5V20.5M17.5 17.5H23.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="product-title">AI Drafting Platform</h3>
            <p className="product-description">
              An IndustryIceberg AI-powered document drafting and automation platform designed 
              for accuracy, efficiency, and governance.
            </p>
            <ul className="product-features">
              <li>
                <strong>AI Summarization:</strong> Automatically generate concise summaries from 
                lengthy documents.
              </li>
              <li>
                <strong>Track Changes:</strong> Comprehensive change tracking with complete 
                audit trails.
              </li>
              <li>
                <strong>Edit & Review:</strong> Collaborative editing tools with real-time updates.
              </li>
              <li>
                <strong>Advanced Search:</strong> Powerful search capabilities across all documents.
              </li>
            </ul>
            <a 
              href="https://veritascribe.netlify.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="product-link"
            >
              Learn More →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductsShowcase
