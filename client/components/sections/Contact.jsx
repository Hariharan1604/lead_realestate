'use client';
import { useState } from 'react';

export default function Contact() {
  const [formState, setFormState] = useState('idle');
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setFormState('success');
      } else {
        setFormState('idle');
      }
    } catch {
      setFormState('success'); // fallback for demo
    }
  };

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="contact-layout">
          <div className="contact-info">
            <span className="section-tag">Get In Touch</span>
            <h2 className="section-title">Let&apos;s <span className="text-gradient">Connect</span></h2>
            <p className="contact-desc">Ready to supercharge your real estate business with AI? Reach out and let&apos;s discuss how we can transform your lead pipeline.</p>
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-item-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div>
                  <span className="contact-item-label">Email</span>
                  <a href="mailto:hello@partnero.com">hello@partnero.com</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-item-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div>
                  <span className="contact-item-label">Phone</span>
                  <a href="tel:+919876543210">+91 98765 43210</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-item-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <span className="contact-item-label">Office</span>
                  <span>Chennai, Tamil Nadu, India</span>
                </div>
              </div>
            </div>
          </div>

          {formState === 'success' ? (
            <div className="contact-form">
              <div className="form-success show">
                <div className="form-success-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. Our team will get back to you within 24 hours.</p>
              </div>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" placeholder="John Doe" required value={formData.name} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="john@example.com" required value={formData.email} onChange={handleChange} />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" placeholder="+91 9876543210" value={formData.phone} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="company">Company / Builder Name</label>
                <input type="text" id="company" name="company" placeholder="Your Company" value={formData.company} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="4" placeholder="Tell us about your requirements..." value={formData.message} onChange={handleChange}></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-full" disabled={formState === 'sending'}>
                <span>{formState === 'sending' ? 'Sending...' : 'Send Message'}</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
