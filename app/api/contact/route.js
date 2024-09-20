import { NextResponse } from "next/server";

export async function POST(request) {
  const payload = await request.json();
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chat_id = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chat_id) {
    return NextResponse.json({
      success: false,
      message: "Telegram bot token or chat ID missing",
    }, { status: 400 });
  }

  try {
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const message = `New message from ${payload.name}\n\nEmail: ${payload.email}\n\nMessage:\n ${payload.message}\n\n`;

    const res = await fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: message,
        chat_id: chat_id,
      }),
    });

    const data = await res.json();

    if (data.ok) {
      return NextResponse.json({
        success: true,
        message: "Message sent successfully!",
      }, { status: 200 });
    } else {
      throw new Error(data.description || "Unknown error");
    }
  } catch (error) {
    console.error("Error sending message to Telegram:", error.message);
    return NextResponse.json({
      success: false,
      message: error.message || "Message sending failed!",
    }, { status: 500 });
  }
}
