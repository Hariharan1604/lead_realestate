'use client';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function Technology() {
  return (
    <section className="section technology" id="technology">
      <div className="container">
        <div className="tech-layout">
          <div className="tech-content">
            <span className="section-tag">Our Technology</span>
            <h2 className="section-title">Powered by <span className="text-gradient">Cutting-Edge AI</span></h2>
            <p className="tech-desc">We leverage the latest in Large Language Models, natural language processing, and intelligent automation to deliver a real estate experience that&apos;s years ahead.</p>
            <div className="tech-features">
              <ScrollReveal className="tech-feature" delay={0}>
                <div className="tech-feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
                </div>
                <div>
                  <h4>LLM-Powered Conversations</h4>
                  <p>Advanced language models that understand context, sentiment, and intent — conducting human-like qualifying conversations.</p>
                </div>
              </ScrollReveal>
              <ScrollReveal className="tech-feature" delay={0.1}>
                <div className="tech-feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/></svg>
                </div>
                <div>
                  <h4>Predictive Lead Scoring</h4>
                  <p>Machine learning models analyze behavioral signals to predict conversion probability with over 90% accuracy.</p>
                </div>
              </ScrollReveal>
              <ScrollReveal className="tech-feature" delay={0.2}>
                <div className="tech-feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div>
                  <h4>Omnichannel Automation</h4>
                  <p>Seamlessly engage across WhatsApp, Email, and SMS — all from a single unified platform with consistent messaging.</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
          <div className="tech-visual">
            <div className="tech-image-wrapper">
              <div style={{ width: '100%', height: '400px', background: 'var(--gradient-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-primary)', fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 600 }}>
                AI Technology Platform
              </div>
              <div className="tech-glow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
