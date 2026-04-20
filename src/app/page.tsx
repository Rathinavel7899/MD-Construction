import Image from "next/image";

export default function Home() {
  return (
    <>
      <nav className="navbar">
        <a href="/" className="logo">
          <span style={{color: 'var(--gold)'}}>MDC</span> | MD CONSTRUCTIONS
        </a>
        <a href="#inquire" className="btn-inquire">Inquire</a>
      </nav>

      <main>
        {/* Banner Section */}
        <section className="banner" style={{ backgroundImage: "url('/sunset.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
          <div className="banner-img-overlay"></div>
          <div className="banner-content">
            <h2>"Engineer your dreams with us"</h2>
            <p>We combine rhythmic craftsmanship of ancient tradition with the surgical precision of modern engineering to build monuments that stand the test of time.</p>
            <a href="#projects" className="btn-inquire" style={{ display: "inline-block" }}>Explore Projects</a>
          </div>
        </section>

        {/* Hero Section / Intro */}
        <section className="section container split-section">
          <div>
            <span className="subtitle-gold">Connect With Our Legacy</span>
            <h1 className="hero-title">Let's Weave Your Future</h1>
            <p className="hero-desc">Whether you are conceptualizing a contemporary monument or restoring a traditional landmark, our architectural weavers are ready to assist.</p>
            
            {/* Social / Contact Icons */}
            <div className="social-contact-bar">
              <a href="tel:+919876543210" className="social-contact-item" aria-label="Call us">
                <span className="social-contact-icon phone-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </span>
              </a>

              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-contact-item" aria-label="Facebook">
                <span className="social-contact-icon facebook-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </span>
              </a>

              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-contact-item" aria-label="Instagram">
                <span className="social-contact-icon instagram-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </span>
              </a>
            </div>

            <div className="message-box" id="inquire">
              <h2>Send a Message</h2>
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" className="form-input" placeholder="Your Name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" className="form-input" placeholder="your@email.com" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" className="form-textarea" placeholder="Tell us about your architectural vision..."></textarea>
                </div>
                <button type="button" className="btn-submit">
                  Send Inquiry <span>→</span>
                </button>
              </form>
            </div>
          </div>
          
          <div>
            <div className="info-box mb-4">
              <span className="subtitle-gold" style={{ color: "var(--primary-color)" }}>Headquarters</span>
              <h3 className="mb-2">MD CONSTRUCTIONS</h3>
              <p className="mb-2">Opp to Pachaiyappa's Men's College,<br/>Kanchipuram - 631501</p>
              <p className="mb-2"><b>Er. K. Mithran</b><br/>+91 9943019230</p>
              <p>Kanchipuram Civil Engineers Association - EC</p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="section container" id="projects">
          <span className="subtitle-gold">Curated Projects</span>
          <h2 className="hero-title mb-4" style={{ maxWidth: "100%" }}>Structural Integrity, Ancestral Wisdom.</h2>
          
          <div className="split-section">
            <div className="project-card">
              <div style={{ position: "relative", width: "100%", height: "400px", marginBottom: "1.5rem" }}>
                <Image src="/courtyard.png" alt="Heritage Courtyard House" fill style={{ objectFit: "cover", borderRadius: "4px" }} />
              </div>
              <span className="project-category">Traditional</span>
              <h3 className="project-title">Heritage Courtyard House</h3>
              <p style={{ marginTop: "0.5rem", color: "var(--text-light)" }}>A modern residence featuring an authentic open muttram (courtyard) and terracotta elements.</p>
            </div>
            
            <div className="project-card" style={{ marginTop: "4rem" }}>
              <div style={{ position: "relative", width: "100%", height: "400px", marginBottom: "1.5rem" }}>
                <Image src="/luxury.png" alt="Chettinad Luxury Home" fill style={{ objectFit: "cover", borderRadius: "4px" }} />
              </div>
              <span className="project-category">High-end Residential</span>
              <h3 className="project-title">The Obsidian Pavilion</h3>
              <p style={{ marginTop: "0.5rem", color: "var(--text-light)" }}>Contemporary Chettinad architecture showcasing Athangudi tiles and grand wooden pillars.</p>
            </div>
            
            <div className="project-card">
               <div style={{ position: "relative", width: "100%", height: "400px", marginBottom: "1.5rem" }}>
                <Image src="/fusion.png" alt="Thinnai Fusion Home" fill style={{ objectFit: "cover", borderRadius: "4px" }} />
              </div>
              <span className="project-category">Modern Fusion</span>
              <h3 className="project-title">Thinnai Village Retreat</h3>
              <p style={{ marginTop: "0.5rem", color: "var(--text-light)" }}>A beautiful fusion of modern minimalism and a traditional Tamil Odu veedu.</p>
            </div>
          </div>
        </section>

        {/* Modern Architecture Feature */}
        <section className="section container">
          <div className="split-section" style={{ alignItems: "center" }}>
            <div>
              <span className="subtitle-gold">Contemporary Luxury</span>
              <h2 className="hero-title mb-2" style={{ maxWidth: "100%" }}>The Modern Perspective.</h2>
              <p className="hero-desc" style={{ maxWidth: "100%", fontSize: "1.2rem" }}>
                Experience a striking balance of contemporary minimalism and opulent living. 
                Our modern designs feature bold geometric lines, eco-friendly wooden cladding, and expansive floor-to-ceiling glass facades that invite natural light.
                We engineer modern sanctuaries that perfectly reflect your visionary lifestyle.
              </p>
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              <div style={{ position: "relative", width: "100%", height: "500px", gridRow: "span 2", boxShadow: "0 20px 40px rgba(0,0,0,0.1)", borderRadius: "8px", overflow: "hidden" }}>
                <Image src="/modern.png" alt="Ultra modern luxury home exterior" fill style={{ objectFit: "cover", borderRadius: "8px" }} />
              </div>
              <div style={{ position: "relative", width: "100%", height: "242px", boxShadow: "0 10px 20px rgba(0,0,0,0.1)", borderRadius: "8px", overflow: "hidden" }}>
                <Image src="/modern2.png" alt="Modern Indian house exterior" fill style={{ objectFit: "cover", borderRadius: "8px" }} />
              </div>
              <div style={{ position: "relative", width: "100%", height: "242px", boxShadow: "0 10px 20px rgba(0,0,0,0.1)", borderRadius: "8px", overflow: "hidden" }}>
                <Image src="/modern3.png" alt="Minimalist single story modern home" fill style={{ objectFit: "cover", borderRadius: "8px" }} />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="section container">
           <div className="split-section">
              <div>
                 <h2 className="hero-title mb-2">Crafting Legacies<br/>Through Structure.</h2>
                 <p className="hero-desc">We combine the rhythmic craftsmanship of ancient tradition with the surgical precision of modern engineering to build monuments that transcend time.</p>
              </div>
              
              <div className="info-box">
                <div className="mb-4">
                  <span className="info-label">01 / Restoration</span>
                  <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>Traditional Architecture Restoration</h3>
                  <p style={{ color: "var(--text-light)" }}>Preserving the soul of heritage structures through meticulous material analysis and ancestral construction techniques, ensuring longevity without compromising authenticity.</p>
                </div>
                
                <div className="mb-4">
                  <span className="info-label">02 / Living</span>
                  <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>Modern Residential Construction</h3>
                  <p style={{ color: "var(--text-light)" }}>Bespoke photorealistic yet authentic homes featuring high-performance durability.</p>
                </div>

                <div>
                   <span className="info-label">03 / Utility</span>
                   <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>Commercial Infrastructure</h3>
                   <p style={{ color: "var(--text-light)" }}>Scalable engineering solutions for high-density environments, focusing on structural efficiency and ergonomic workflow.</p>
                </div>
              </div>
           </div>
        </section>
      </main>

      <footer className="footer">
        <h3>MD CONSTRUCTIONS</h3>
        <p>&copy; 2026 MD CONSTRUCTIONS. "Engineer your dreams with us".</p>
        <p style={{ marginTop: "1rem", fontSize: "0.8rem", color: "var(--text-light)" }}>Kanchipuram, Tamil Nadu.</p>
      </footer>
    </>
  );
}
