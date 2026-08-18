// automation/mailjet_outreach_worker.js
// Automated outreach processor for your marketing pipelines

const Mailjet = require('node-mailjet');

const MAILJET_API_KEY = process.env.MAILJET_API_KEY;
const MAILJET_SECRET_KEY = process.env.MAILJET_SECRET_KEY;

const mailjet = Mailjet.apiConnect(MAILJET_API_KEY, MAILJET_SECRET_KEY);

async function sendOutreachEmail(recipientEmail, recipientName, subjectLine, emailHtmlBody) {
    if (!MAILJET_API_KEY || !MAILJET_SECRET_KEY) {
        console.error("[ERROR] Missing Mailjet API credentials.");
        return;
    }

    try {
        console.log(`[OUTREACH] Dispatching email to ${recipientName} (${recipientEmail})...`);
        const request = await mailjet
            .post('send', { version: 'v3.1' })
            .request({
                Messages: [
                    {
                        From: {
                            Email: "SlotsfreeUSA@gmail.com",
                            Name: "Wholelychit Marketing Hub"
                        },
                        To: [
                            {
                                Email: recipientEmail,
                                Name: recipientName
                            }
                        ],
                        Subject: subjectLine,
                        HTMLPart: emailHtmlBody,
                        CustomID: "MarketingOutreachAutomation"
                    }
                ]
            });
        
        console.log(`[SUCCESS] Message delivered safely. Status: ${request.body.Messages[0].Status}`);
        return true;
    } catch (error) {
        console.error(`[ERROR] Email delivery failed for ${recipientEmail}:`, error.message);
        return false;
    }
}

module.exports = { sendOutreachEmail };
