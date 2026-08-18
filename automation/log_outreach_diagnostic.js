// automation/log_outreach_diagnostic.js
// Saves execution data directly to your outreach log files

const fs = require('fs');

function logEmailStatus(recipient, status, messageId = "N/A") {
    const timestamp = new Date().toISOString();
    const logLine = `"${timestamp}","${recipient}","${status}","${messageId}"\n`;
    
    fs.appendFileSync('./outreach-tracker.xlsx', logLine, (err) => {
        if (err) console.error('[DIAGNOSTIC ERROR] Failed writing to tracking sheet:', err);
    });
    console.log(`[LOG SAVED] Diagnostic tracking completed for: ${recipient}`);
}

module.exports = { logEmailStatus };
