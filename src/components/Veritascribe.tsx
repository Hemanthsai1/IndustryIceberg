import type { FC } from 'react'
import './Veritascribe.css'

const Veritascribe: FC = () => {
  return (
    <div className="veritascribe-page">
      {/* Hero Section */}
      <section className="veritascribe-hero">
        <div className="hero-card">
          <div className="hero-logo">
            <img src="/assets/image.png" alt="Industry Iceberg Logo" />
          </div>
        </div>
        <h1 className="hero-title">AI Drafting</h1>
      </section>

      {/* What is AI Drafting Section */}
      <section className="veritascribe-content">
        <div className="content-card">
          <div className="content-header">
            <div className="content-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.663 17H4.662C3.74214 17 3.00024 16.2581 3.00024 15.3382V4.66176C3.00024 3.7419 3.74214 3 4.662 3H15.338C16.2579 3 17 3.7419 17 4.66176V9.663M14.5 2.5V8.5M11.5 5.5H17.5M20.5 14.5V20.5M17.5 17.5H23.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h2 className="content-title">What is AI Drafting?</h2>
          </div>
          <div className="content-body">
            <p>
              <strong>AI Drafting</strong> is an AI-powered document drafting and automation platform 
              designed for accuracy, efficiency, and governance. It helps organizations streamline their 
              document creation process while ensuring compliance and maintaining complete audit trails.
            </p>
            <p>
              The platform combines intelligent automation with collaborative editing tools to transform 
              how teams create, review, and manage documents. From technical documentation to regulatory 
              submissions, AI Drafting ensures every document meets the highest standards of quality and compliance.
            </p>
            <p>
              With advanced AI capabilities, AI Drafting automates repetitive tasks, generates summaries, 
              tracks changes, and provides powerful search capabilities across all documents, making it 
              the ideal solution for enterprise document management.
            </p>
          </div>
        </div>

        {/* Current Challenges Section */}
        <div className="content-card">
          <div className="content-header">
            <div className="content-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 9V12M12 15H12.01M5 20H19C19.5304 20 20.0391 19.7893 20.4142 19.4142C20.7893 19.0391 21 18.5304 21 18V6C21 5.46957 20.7893 4.96086 20.4142 4.58579C20.0391 4.21071 19.5304 4 19 4H5C4.46957 4 3.96086 4.21071 3.58579 4.58579C3.21071 4.96086 3 5.46957 3 6V18C3 18.5304 3.21071 19.0391 3.58579 19.4142C3.96086 19.7893 4.46957 20 5 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h2 className="content-title">Current Challenges</h2>
          </div>
          <div className="content-body">
            <p className="content-intro">
              Organizations face significant challenges in document management and drafting processes. 
              Here are the key friction points that impact productivity and compliance:
            </p>

            <div className="features-list">
              <div className="feature-item">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12H15M9 16H15M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.5858C12.851 3 13.1054 3.10536 13.2929 3.29289L18.7071 8.70711C18.8946 8.89464 19 9.149 19 9.41421V19C19 20.1046 18.1046 21 17 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">Manual Document Creation</h3>
                  <p className="feature-description">
                    Time-consuming manual drafting processes lead to inconsistencies, errors, and 
                    significant productivity losses across document-heavy workflows.
                  </p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">Lack of Audit Trails</h3>
                  <p className="feature-description">
                    Incomplete change tracking and missing audit trails create compliance risks and 
                    make it difficult to trace document evolution and decision-making processes.
                  </p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">Collaboration Bottlenecks</h3>
                  <p className="feature-description">
                    Fragmented collaboration tools and lack of real-time editing capabilities slow down 
                    document review cycles and create version control issues.
                  </p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">Limited Search Capabilities</h3>
                  <p className="feature-description">
                    Inability to efficiently search across documents and extract insights from large 
                    document repositories hinders knowledge management and decision-making.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Solutions Section */}
        <div className="content-card">
          <div className="content-header">
            <div className="content-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h2 className="content-title">Solutionss</h2>
          </div>
          <div className="content-body">
            <p className="content-intro">
              We bridge the gap between manual document processes and intelligent automation. Our platform 
              transforms document workflows into efficient, compliant, and collaborative experiences.
            </p>

            <div className="features-list">
              <div className="feature-item">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">AI-Powered Document Automation</h3>
                  <p className="feature-description">
                    Intelligent automation that generates, summarizes, and structures documents using 
                    advanced AI, reducing manual work by up to 80% while maintaining accuracy and compliance.
                  </p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">Complete Audit Trail & Change Tracking</h3>
                  <p className="feature-description">
                    Comprehensive change tracking with complete audit trails ensures full visibility 
                    into document history, supporting regulatory compliance and governance requirements.
                  </p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 5H6C4.89543 5 4 5.89543 4 7V18C4 19.1046 4.89543 20 6 20H17C18.1046 20 19 19.1046 19 18V13M18.5 2.5C18.8978 2.10217 19.4374 1.87868 20 1.87868C20.5626 1.87868 21.1022 2.10217 21.5 2.5C21.8978 2.89782 22.1213 3.43739 22.1213 4C22.1213 4.56261 21.8978 5.10217 21.5 5.5L12 15L8 16L9 12L18.5 2.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">Real-Time Collaborative Editing</h3>
                  <p className="feature-description">
                    Real-time collaborative editing tools with instant updates enable seamless teamwork, 
                    faster document completion, and improved communication across distributed teams.
                  </p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">Advanced Cross-Document Search</h3>
                  <p className="feature-description">
                    Powerful search capabilities across all documents with intelligent content discovery, 
                    enabling quick access to relevant information and improved knowledge management.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Veritascribe
