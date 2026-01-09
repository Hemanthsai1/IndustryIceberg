import type { FC } from 'react'
import './Blog.css'

const Blog: FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of GMP Compliance: AI-Powered Quality Management',
      excerpt: 'Explore how artificial intelligence is revolutionizing Good Manufacturing Practice compliance, enabling organizations to achieve unprecedented levels of quality assurance and regulatory readiness.',
      author: 'Industry Iceberg Team',
      date: 'March 15, 2024',
      category: 'GMP Compliance',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Best Practices for FDA 483 Observation Management',
      excerpt: 'Learn effective strategies for managing FDA 483 observations, from initial response to implementing corrective actions that prevent recurrence and strengthen your quality systems.',
      author: 'Quality Assurance Experts',
      date: 'March 10, 2024',
      category: 'Regulatory Affairs',
      readTime: '7 min read'
    },
    {
      id: 3,
      title: 'Digital Transformation in Life Sciences: A Roadmap to Success',
      excerpt: 'Discover how life sciences companies are leveraging digital transformation to streamline operations, improve compliance, and accelerate time-to-market while maintaining the highest quality standards.',
      author: 'Industry Iceberg Team',
      date: 'March 5, 2024',
      category: 'Digital Transformation',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: 'Understanding ALCOA+ Principles in Data Integrity',
      excerpt: 'A comprehensive guide to ALCOA+ principles and how they apply to modern computerized systems, ensuring data integrity and regulatory compliance in pharmaceutical manufacturing.',
      author: 'Data Integrity Specialists',
      date: 'February 28, 2024',
      category: 'Data Integrity',
      readTime: '8 min read'
    },
    {
      id: 5,
      title: 'AI-Driven Document Automation: Transforming Regulatory Submissions',
      excerpt: 'How AI-powered document drafting platforms are revolutionizing the way life sciences companies create, review, and submit regulatory documents, reducing errors and accelerating approvals.',
      author: 'Industry Iceberg Team',
      date: 'February 20, 2024',
      category: 'AI & Automation',
      readTime: '6 min read'
    },
    {
      id: 6,
      title: 'Building a Culture of Quality: From Compliance to Excellence',
      excerpt: 'Learn how to transform your organization from a compliance-focused mindset to a culture of quality excellence that drives continuous improvement and operational excellence.',
      author: 'Quality Culture Experts',
      date: 'February 15, 2024',
      category: 'Quality Management',
      readTime: '9 min read'
    }
  ]

  return (
    <div className="blog-page">
      {/* Hero Section */}
      <section className="blog-hero">
        <div className="blog-hero-content">
          <h1 className="blog-hero-title">Industry Insights & Updates</h1>
          <p className="blog-hero-subtitle">
            Stay informed with the latest trends, best practices, and expert insights 
            in GMP compliance, quality management, and life sciences innovation.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="blog-content">
        <div className="blog-container">
          <div className="blog-posts-grid">
            {blogPosts.map((post) => (
              <article key={post.id} className="blog-post-card">
                <div className="blog-post-header">
                  <span className="blog-post-category">{post.category}</span>
                  <span className="blog-post-read-time">{post.readTime}</span>
                </div>
                <h2 className="blog-post-title">{post.title}</h2>
                <p className="blog-post-excerpt">{post.excerpt}</p>
                <div className="blog-post-footer">
                  <div className="blog-post-author">
                    <span className="blog-author-name">{post.author}</span>
                    <span className="blog-post-date">{post.date}</span>
                  </div>
                  <a href="#" className="blog-read-more">
                    Read More →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="blog-newsletter">
        <div className="newsletter-container">
          <div className="newsletter-content">
            <h2 className="newsletter-title">Stay Updated</h2>
            <p className="newsletter-description">
              Subscribe to our newsletter and receive the latest insights, 
              industry updates, and best practices delivered to your inbox.
            </p>
            <form className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="newsletter-input"
                required
              />
              <button type="submit" className="newsletter-button">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog
