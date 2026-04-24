const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// In-memory store
const submissions = [];

// Middleware
app.use(cors({ origin: ['http://localhost:3000', 'http://localhost:3001'], credentials: true }));
app.use(express.json());

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Contact form
app.post('/api/contact', (req, res) => {
  const { name, email, phone, company, message } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }
  const submission = { id: Date.now().toString(), name, email, phone, company, message, createdAt: new Date().toISOString() };
  submissions.push(submission);
  console.log(`[Contact] New submission from ${name} (${email})`);
  res.json({ success: true, message: 'Message received successfully', id: submission.id });
});

// Get all submissions
app.get('/api/contact', (req, res) => {
  res.json({ total: submissions.length, submissions });
});

app.listen(PORT, () => {
  console.log(`\n  🚀 LeadForce AI Server running on http://localhost:${PORT}\n`);
});
