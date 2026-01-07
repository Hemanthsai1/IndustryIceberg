import { useState, useRef, useEffect } from 'react'
import type { FC } from 'react'
import './Navbar.css'

interface DropdownItem {
  label: string
  href?: string
}

const Navbar: FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const productsMenu: DropdownItem[] = [
    { label: 'GMP Complisense Platform', href: 'https://gmpcomplianceai.azurewebsites.net/dashboard' },
    { label: 'AI Drafting Platform', href: 'https://veritascribe.netlify.app/' },
    { label: 'Trainings Platform', href: '#' },
    { label: 'Future Products', href: '#' }
  ]

  const solutionsMenu: DropdownItem[] = [
    { label: 'Complisense Intelligence', href: 'https://gmpcomplianceai.azurewebsites.net/analysis' },
    { label: 'VeritaScribe', href: 'https://veritascribe.azurewebsites.net/upload?open' }
  ]

  const consultMenu: DropdownItem[] = [
    { label: 'AI-RA', href: '#' },
    { label: 'AI-GMP', href: '#' },
    { label: 'Training', href: '#' },
    { label: 'AI-Data', href: '#' }
  ]

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleDropdownToggle = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu)
  }

  const handleMenuItemClick = (href?: string) => {
    if (href && href !== '#') {
      window.open(href, '_blank', 'noopener,noreferrer')
    }
    setActiveDropdown(null)
  }

  const renderDropdown = (items: DropdownItem[], menuName: string) => {
    if (activeDropdown !== menuName) return null

    return (
      <div className="dropdown-menu">
        {items.map((item, index) => (
          <a
            key={index}
            href={item.href || '#'}
            onClick={(e) => {
              e.preventDefault()
              handleMenuItemClick(item.href)
            }}
            className="dropdown-item"
          >
            {item.label}
          </a>
        ))}
      </div>
    )
  }

  return (
    <nav className="navbar" ref={dropdownRef}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src="/assets/fda-image-o-wua1p2.png" alt="IndustryIceberg Logo" />
        </div>

        <div className="navbar-menu">
          <a href="#who-we-are" className="nav-link">Who We Are</a>

          <div className="nav-dropdown">
            <button
              className="nav-link dropdown-trigger"
              onClick={() => handleDropdownToggle('products')}
              onMouseEnter={() => setActiveDropdown('products')}
            >
              Solutions
              <span className={`dropdown-arrow ${activeDropdown === 'products' ? 'active' : ''}`}>▼</span>
            </button>
            {renderDropdown(productsMenu, 'products')}
          </div>

          <div className="nav-dropdown">
            <button
              className="nav-link dropdown-trigger"
              onClick={() => handleDropdownToggle('solutions')}
              onMouseEnter={() => setActiveDropdown('solutions')}
            >
              Products
              <span className={`dropdown-arrow ${activeDropdown === 'solutions' ? 'active' : ''}`}>▼</span>
            </button>
            {renderDropdown(solutionsMenu, 'solutions')}
          </div>

          <div className="nav-dropdown">
            <button
              className="nav-link dropdown-trigger"
              onClick={() => handleDropdownToggle('consult')}
              onMouseEnter={() => setActiveDropdown('consult')}
            >
              Consult
              <span className={`dropdown-arrow ${activeDropdown === 'consult' ? 'active' : ''}`}>▼</span>
            </button>
            {renderDropdown(consultMenu, 'consult')}
          </div>

          <a href="#contact" className="nav-link contact-btn">Contact Us</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
