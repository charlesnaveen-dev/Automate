/**
 * Vercel Serverless Function — Hutomate Enquiry Dispatch
 * Route: /api/enquiry
 * Method: POST
 *
 * Automatically forwards form submissions to hutomate@gmail.com
 * when RESEND_API_KEY is configured in Vercel environment variables.
 */

export default async function handler(req, res) {
  // CORS & Method Check
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { name, phone, email, formType = 'General Contact' } = req.body || {};

    // 1. Validation
    const trimmedName = (name || '').trim();
    const trimmedPhone = (phone || '').trim();
    const trimmedEmail = (email || '').trim();

    if (!trimmedName || trimmedName.length < 2) {
      return res.status(400).json({ error: 'Please provide a valid name or business name.' });
    }

    const phoneRegex = /^[+]?[\d\s().-]{7,25}$/;
    if (!trimmedPhone || !phoneRegex.test(trimmedPhone)) {
      return res.status(400).json({ error: 'Please provide a valid phone number.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmedEmail || !emailRegex.test(trimmedEmail)) {
      return res.status(400).json({ error: 'Please provide a valid email address.' });
    }

    const enquiryRecord = {
      name: trimmedName,
      phone: trimmedPhone,
      email: trimmedEmail,
      formType,
      timestamp: new Date().toISOString(),
      userAgent: req.headers['user-agent'] || 'Unknown'
    };

    console.log('[Hutomate Enquiry Received]:', JSON.stringify(enquiryRecord));

    // 2. Resend API Dispatch if API key configured
    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.ENQUIRY_RECIPIENT || 'hutomate@gmail.com';

    if (resendApiKey) {
      const emailRes = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from: 'Hutomate Inquiries <enquiries@hutomate.com>',
          to: [recipientEmail],
          subject: `[New Enquiry] ${trimmedName} — ${formType}`,
          text: `A new enquiry has been submitted on Hutomate:\n\n` +
                `Name / Business: ${trimmedName}\n` +
                `Phone: ${trimmedPhone}\n` +
                `Email: ${trimmedEmail}\n` +
                `Form Type: ${formType}\n` +
                `Submitted At: ${enquiryRecord.timestamp}\n`,
          html: `<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #17252B; max-width: 600px;">
                   <h2 style="color: #167C80;">New Hutomate Project Enquiry</h2>
                   <p><strong>Name / Business:</strong> ${trimmedName}</p>
                   <p><strong>Phone:</strong> ${trimmedPhone}</p>
                   <p><strong>Email:</strong> <a href="mailto:${trimmedEmail}">${trimmedEmail}</a></p>
                   <p><strong>Form:</strong> ${formType}</p>
                   <p style="color: #71838A; font-size: 12px; margin-top: 24px;">Submitted at ${enquiryRecord.timestamp}</p>
                 </div>`
        })
      });

      if (emailRes.ok) {
        return res.status(200).json({
          success: true,
          delivered: true,
          message: 'Enquiry received and delivered to hutomate@gmail.com'
        });
      } else {
        const errData = await emailRes.text();
        console.error('[Resend Error]:', errData);
      }
    }

    // 3. Fallback when RESEND_API_KEY is not configured
    return res.status(200).json({
      success: true,
      delivered: false,
      fallback: 'mailto',
      message: 'Enquiry recorded in server logs. Please complete direct dispatch via email.',
      record: enquiryRecord
    });
  } catch (error) {
    console.error('[Enquiry Handler Error]:', error);
    return res.status(500).json({ error: 'Internal server error processing enquiry.' });
  }
}
