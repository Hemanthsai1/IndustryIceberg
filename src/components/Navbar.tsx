import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import type { FC } from 'react'
import './Navbar.css'

interface DropdownItem {
  label: string
  href?: string
}

const Navbar: FC = () => {
  const navigate = useNavigate()
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const productsMenu: DropdownItem[] = [
    { label: 'CDMO Finder', href: 'https://www.industryiceberg.com/' },
    { label: 'CompliSense', href: 'https://gmpproductpage.netlify.app/dashboard' },
    { label: 'VeritaScribe', href: 'https://veritascribe.netlify.app/' },
    { label: 'Video Creation Service', href: '/video-creation-service' },
    { label: 'ECTD AI', href: '/ectd-ai' }
  ]

  const solutionsMenu: DropdownItem[] = [
    { label: 'Complaint Site Selection', href: '/complaint-site-search' },
    { label: 'GMP Compliance', href: '/gmp-compliance' },
    { label: 'AI Drafting', href: '/veritascribe' },
    { label: 'Quality Training', href: '/quality-training' }
  ]

  const consultMenu: DropdownItem[] = [
    { label: 'AI-RA', href: '#' },
    { label: 'AI-GMP', href: '#' },
    { label: 'Training', href: '#' },
    { label: 'AI-Data', href: '#' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    const handleClickOutside = (event: MouseEvent) => {
      // Only close on click, not on hover
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        // Check if it's a click event, not just mouse movement
        if (event.type === 'mousedown') {
          setActiveDropdown(null)
        }
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleDropdownToggle = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu)
  }

  const handleMenuItemClick = (href?: string) => {
    if (href && href !== '#') {
      if (href.startsWith('/')) {
        const currentPath = window.location.pathname
        const solutionPages = ['/gmp-compliance', '/veritascribe', '/complaint-site-search', '/quality-training', '/ectd-ai', '/video-creation-service']
        const isCurrentSolutionPage = solutionPages.includes(currentPath)
        const isNavigatingToSolutionPage = solutionPages.includes(href)
        const isOnHomepage = currentPath === '/' || currentPath === ''
        
        // Always use normal navigation when going from homepage to solution pages
        // This ensures homepage stays in history so back button works
        // Only replace history when navigating between solution pages
        if (isOnHomepage) {
          // From homepage: always use normal navigation
          navigate(href)
        } else if (isCurrentSolutionPage && isNavigatingToSolutionPage) {
          // From one solution page to another: replace history
          navigate(href, { replace: true })
        } else {
          // Other cases: normal navigation
          navigate(href)
        }
      } else {
        window.location.href = href
      }
    }
    setActiveDropdown(null)
  }

  const renderDropdown = (items: DropdownItem[], menuName: string) => {
    if (activeDropdown !== menuName) return null

    return (
      <div 
        className="dropdown-menu"
        onMouseEnter={() => setActiveDropdown(menuName)}
        onMouseLeave={() => setActiveDropdown(null)}
      >
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
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`} ref={dropdownRef}>
      <div className="navbar-container">
        <a 
          href="/" 
          className="navbar-logo"
          onClick={(e) => {
            e.preventDefault()
            const currentPath = window.location.pathname
            if (currentPath === '/' || currentPath === '') {
              window.scrollTo({ top: 0, behavior: 'smooth' })
            } else {
              navigate('/')
            }
          }}
        >
          <img src="/assets/image.png" alt="IndustryIceberg Logo" />
        </a>

        <div className="navbar-menu">
          <a 
            href="/" 
            className="nav-link"
            onClick={(e) => {
              e.preventDefault()
              navigate('/')
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >
            Who We Are
          </a>

          <div 
            className="nav-dropdown"
            onMouseEnter={() => setActiveDropdown('solutions')}
            onMouseLeave={() => setActiveDropdown(null)} 
          >
            <button 
              className="nav-link dropdown-trigger"
              onClick={() => handleDropdownToggle('solutions')}
            >
              Solutions
              <span className={`dropdown-arrow ${activeDropdown === 'solutions' ? 'active' : ''}`}>▼</span>
            </button>
            {renderDropdown(solutionsMenu, 'solutions')}
          </div>

          <div 
            className="nav-dropdown"
            onMouseEnter={() => setActiveDropdown('products')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button 
              className="nav-link dropdown-trigger"
              onClick={() => handleDropdownToggle('products')}
            >
              Products & Services
              <span className={`dropdown-arrow ${activeDropdown === 'products' ? 'active' : ''}`}>▼</span>
            </button>
            {renderDropdown(productsMenu, 'products')}
          </div>

          <div 
            className="nav-dropdown"
            onMouseEnter={() => setActiveDropdown('consult')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button 
              className="nav-link dropdown-trigger"
              onClick={() => handleDropdownToggle('consult')}
            >
              Consult
              <span className={`dropdown-arrow ${activeDropdown === 'consult' ? 'active' : ''}`}>▼</span>
            </button>
            {renderDropdown(consultMenu, 'consult')}
          </div>

          <a 
            href="/blog" 
            className="nav-link"
            onClick={(e) => {
              e.preventDefault()
              const currentPath = window.location.pathname
              const isOnHomepage = currentPath === '/' || currentPath === ''
              
              // If on homepage, normal navigation (back button will work)
              // If on other pages, replace current page with homepage, then navigate to blog
              // This ensures back button from blog always goes to homepage
              if (isOnHomepage) {
                navigate('/blog')
              } else {
                // Replace current page with homepage in history
                navigate('/', { replace: true, state: { fromBlog: true } })
                // Then navigate to blog (this will add blog after homepage in history)
                setTimeout(() => {
                  navigate('/blog')
                }, 0)
              }
            }}
          >
            Blog
          </a>
        </div>

        <div className="nav-actions">
          <a href="#contact" className="nav-link contact-btn">Contact</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
