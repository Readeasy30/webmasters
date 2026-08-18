// automation/topshelf_lead_capture.js
// Cloudflare Worker script to process and log B2B sales inquiries

export default {
  async fetch(request, env) {
    // Only accept incoming POST requests from the contact form
    if (request.method !== "POST") {
      return new Response("Method Not Allowed", { status: 405 });
    }

    try {
      const formData = await request.formData();
      const clientName = formData.get("name") || "Anonymous";
      const clientEmail = formData.get("email") || "No Email Provided";
      const clientMessage = formData.get("message") || "No Message Body";

      console.log(`[SALES DIRECTOR #2] New Lead Captured: ${clientName} (${clientEmail})`);
      
      // Setup payload data for internal repository tracking
      const leadEntry = {
        timestamp: new Date().toISOString(),
        name: clientName,
        email: clientEmail,
        message: clientMessage,
        status: "New Lead Received"
      };

      // Return a clean confirmation to the website visitor interface
      return new Response(JSON.stringify({ success: true, text: "Message transmitted to Sales Director #2." }), {
        headers: { "Content-Type": "application/json" },
        status: 200
      });

    } catch (err) {
      console.error("[LEAD ERROR] Failed to parse B2B lead form:", err.message);
      return new Response("Internal Server Error", { status: 500 });
    }
  }
};
