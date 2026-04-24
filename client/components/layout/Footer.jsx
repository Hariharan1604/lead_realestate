export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#" className="nav-logo">
              <span className="logo-icon">⬡</span>
              <span className="logo-text">Partn<span className="logo-accent">ero</span></span>
            </a>
            <p>Intelligent real estate channel partner powered by AI. Transforming leads into closed deals with cutting-edge technology.</p>
          </div>
          <div className="footer-links-group">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#how-it-works">How It Works</a></li>
            </ul>
          </div>
          <div className="footer-links-group">
            <h4>Services</h4>
            <ul>
              <li><a href="#services">AI Lead Capture</a></li>
              <li><a href="#services">Chatbot Engagement</a></li>
              <li><a href="#services">CRM Management</a></li>
              <li><a href="#services">Builder Handoff</a></li>
            </ul>
          </div>
          <div className="footer-links-group">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:hello@partnero.com">hello@partnero.com</a></li>
              <li><a href="tel:+919876543210">+91 98765 43210</a></li>
              <li><span>Chennai, India</span></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Partnero. All rights reserved.</p>
          <div className="footer-socials">
            <a href="#" aria-label="LinkedIn" className="social-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="#" aria-label="Twitter" className="social-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="#" aria-label="Instagram" className="social-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
