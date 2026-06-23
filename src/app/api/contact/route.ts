import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, eventType, eventDate, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
    }

    console.log("=== Contact Form Submission ===");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone || "N/A");
    console.log("Event Type:", eventType || "N/A");
    console.log("Event Date:", eventDate || "N/A");
    console.log("Message:", message);
    console.log("================================");

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }
}
