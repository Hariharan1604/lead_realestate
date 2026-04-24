'use client';
import ScrollReveal from '@/components/ui/ScrollReveal';

const steps = [
  { num: 1, title: 'Lead Arrives', desc: 'A prospect submits interest on 99acres, MagicBricks, or any partner portal. Our system captures it instantly.', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg> },
  { num: 2, title: 'AI Engages Instantly', desc: 'Within seconds, our LLM-powered chatbot reaches out via WhatsApp or Email — greeting the lead and asking smart qualifying questions.', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg> },
  { num: 3, title: 'Lead Scored & Saved', desc: 'Based on AI conversation analysis, the lead is scored (Hot / Warm / Cold), tagged with preferences, and saved into the CRM.', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg> },
  { num: 4, title: 'Assigned to Sales Agent', desc: 'AI matches the lead to the best-suited sales agent based on expertise, location, availability, and past performance.', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg> },
  { num: 5, title: 'Deal Closed → Builder Notified', desc: 'Once the sale closes, one click sends the complete deal package — customer details, preferences, documents — directly to the builder.', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> },
];

export default function HowItWorks() {
  return (
    <section className="section how-it-works" id="how-it-works">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">The Process</span>
          <h2 className="section-title">How <span className="text-gradient">It Works</span></h2>
          <p className="section-desc">From raw lead to closed deal — see how our AI-powered pipeline transforms your real estate business.</p>
        </div>
        <div className="timeline">
          <div className="timeline-line"></div>
          {steps.map((step, i) => (
            <ScrollReveal key={step.num} className="timeline-item" delay={i * 0.1}>
              <div className="timeline-dot"><span>{step.num}</span></div>
              <div className="timeline-content">
                <div className="timeline-icon-wrap">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
