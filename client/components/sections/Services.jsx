'use client';
import ScrollReveal from '@/components/ui/ScrollReveal';

const services = [
  { num: '01', title: 'AI Lead Capture', desc: 'Automatically capture and aggregate leads from 99acres, MagicBricks, Housing.com, and other major property portals in real-time.', tags: ['99acres', 'MagicBricks', 'Housing.com'], icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg> },
  { num: '02', title: 'AI Chatbot Engagement', desc: 'Our LLM-powered chatbot instantly engages leads via WhatsApp and Email — asking qualifying questions, understanding requirements, and building rapport.', tags: ['WhatsApp', 'Email', 'LLM'], icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg> },
  { num: '03', title: 'Smart CRM Management', desc: 'Leads are automatically scored, categorized, and organized in our intelligent CRM. Track every interaction in one dashboard.', tags: ['Auto-Score', 'Pipeline', 'Analytics'], icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg> },
  { num: '04', title: 'Intelligent Lead Assignment', desc: 'AI assigns qualified leads to your sales force based on lead quality, budget, location preference, and agent expertise.', tags: ['Auto-Assign', 'Quality Score', 'Matching'], icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> },
  { num: '05', title: 'One-Touch Builder Handoff', desc: 'The moment a deal closes, all lead details, conversations, and documents are instantly packaged and sent to the builder.', tags: ['Instant', 'Automated', 'Documented'], icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> },
  { num: '06', title: 'Performance Analytics', desc: 'Real-time dashboards showing lead funnel health, conversion rates, agent performance, and ROI metrics.', tags: ['Real-time', 'ROI', 'Insights'], icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg> },
];

export default function Services() {
  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">What We Do</span>
          <h2 className="section-title">End-to-End <span className="text-gradient">Lead Management</span></h2>
          <p className="section-desc">From capturing leads off 99acres to closing deals with builders — our AI-powered pipeline handles it all.</p>
        </div>
        <div className="services-grid">
          {services.map((s, i) => (
            <ScrollReveal key={s.num} className="service-card" delay={i * 0.1}>
              <div className="service-number">{s.num}</div>
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div className="service-tags">
                {s.tags.map(t => <span key={t}>{t}</span>)}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
