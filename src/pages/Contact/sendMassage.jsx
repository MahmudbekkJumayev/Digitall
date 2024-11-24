export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const telegramToken = "7385022476:AAEuDbLPJBCrHCQzuXDwQ-MzCb17ECk9-xE";
  const chatId = "7385022476";

  const text = `
  New Contact Form Submission:
  - Name: ${name}
  - Email: ${email}
  - Message: ${message}
    `;

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${telegramToken}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to send message");
    }

    return res.status(200).json({ success: true, message: "Message sent" });
  } catch (error) {
    return res.status(500).json({ error: "Failed to send message" });
  }
}
