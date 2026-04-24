'use client';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Who We Are</span>
          <h2 className="section-title">Your Trusted <span className="text-gradient">Channel Partner</span></h2>
          <p className="section-desc">We are a next-generation real estate channel partner leveraging AI and automation to bridge the gap between property seekers and builders.</p>
        </div>
        <div className="about-grid">
          <ScrollReveal className="about-card about-card-large">
            <div className="about-card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
            </div>
            <h3>Our Mission</h3>
            <p>To revolutionize the real estate industry by combining human expertise with artificial intelligence, ensuring every lead receives instant, personalized attention and every builder gets qualified, ready-to-close prospects.</p>
          </ScrollReveal>
          <ScrollReveal className="about-card" delay={0.1}>
            <div className="about-card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            </div>
            <h3>Instant Response</h3>
            <p>Our AI contacts every lead within seconds — no delays, no missed opportunities. 24/7 availability.</p>
          </ScrollReveal>
          <ScrollReveal className="about-card" delay={0.2}>
            <div className="about-card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <h3>Builder Network</h3>
            <p>Connected with top builders and developers. We ensure seamless handoff of qualified leads.</p>
          </ScrollReveal>
          <ScrollReveal className="about-card" delay={0.3}>
            <div className="about-card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            </div>
            <h3>Proven Results</h3>
            <p>Track record of 3x faster conversions and 95%+ engagement rate with our AI-first approach.</p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
