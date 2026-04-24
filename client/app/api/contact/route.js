// In-memory contact submissions store
const submissions = [];

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, message } = body;

    if (!name || !email) {
      return Response.json({ error: 'Name and email are required' }, { status: 400 });
    }

    const submission = {
      id: Date.now().toString(),
      name, email, phone, company, message,
      createdAt: new Date().toISOString(),
    };
    submissions.push(submission);

    console.log(`[Contact] New submission from ${name} (${email})`);

    return Response.json({ success: true, message: 'Message received successfully', id: submission.id });
  } catch (error) {
    return Response.json({ error: 'Invalid request' }, { status: 400 });
  }
}

export async function GET() {
  return Response.json({ total: submissions.length, submissions });
}
