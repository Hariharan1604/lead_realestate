'use client';
import ScrollReveal from '@/components/ui/ScrollReveal';

const testimonials = [
  { stars: '★★★★★', quote: 'LeadForce AI completely transformed our lead response time. We went from hours to seconds. Our conversion rate jumped 40% in the first month.', name: 'Rajesh Sharma', role: 'Director, Skyline Developers', initials: 'RS' },
  { stars: '★★★★★', quote: 'The AI chatbot qualification is incredible. By the time our agents get the lead, they already know the budget, timeline, and exact requirements.', name: 'Priya Menon', role: 'Sales Head, Urban Nest Homes', initials: 'PM' },
  { stars: '★★★★★', quote: 'The builder handoff feature alone saves us 4+ hours per deal. Everything is packaged and sent automatically. Our builders love the professionalism.', name: 'Amit Kumar', role: 'Founder, PropertyPro Channel', initials: 'AK' },
];

export default function Testimonials() {
  return (
    <section className="section testimonials">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Trusted By</span>
          <h2 className="section-title">What Our <span className="text-gradient">Partners Say</span></h2>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.initials} className="testimonial-card" delay={i * 0.1}>
              <div className="testimonial-stars">{t.stars}</div>
              <p>&ldquo;{t.quote}&rdquo;</p>
              <div className="testimonial-author">
                <div className="author-avatar">{t.initials}</div>
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
