'use client';
import { useEffect, useRef } from 'react';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg-pattern"></div>
      <div className="hero-glow"></div>
      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-dot"></span>
          AI-Powered Real Estate Solutions
        </div>
        <h1 className="hero-title">
          Transform Leads Into<br />
          <span className="title-gradient">Closed Deals</span><br />
          With AI Intelligence
        </h1>
        <p className="hero-subtitle">
          We capture leads from 99acres &amp; top portals, engage them instantly via AI chatbot,
          qualify through smart conversations, and deliver sales-ready prospects directly to your team.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn btn-primary">
            <span>Start Converting Leads</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a href="#how-it-works" className="btn btn-outline">
            <span>See How It Works</span>
          </a>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <AnimatedCounter target={10000} /><span className="stat-suffix">+</span>
            <span className="stat-label">Leads Processed</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <AnimatedCounter target={95} /><span className="stat-suffix">%</span>
            <span className="stat-label">Response Rate</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <AnimatedCounter target={3} /><span className="stat-suffix">x</span>
            <span className="stat-label">Faster Conversions</span>
          </div>
        </div>
      </div>
    </section>
  );
}
