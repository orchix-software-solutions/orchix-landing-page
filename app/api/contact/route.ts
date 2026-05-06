import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email, notes } = await req.json();

  if (!name || !email) {
    return NextResponse.json(
      { error: "Name and email are required" },
      { status: 400 }
    );
  }

  try {
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
      to: process.env.RESEND_TO_EMAIL!,
      subject: `New Booking Request from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          </head>
          <body style="margin:0;padding:0;background:#0a0a0a;font-family:'Segoe UI',Arial,sans-serif;">
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a;padding:40px 20px;">
              <tr>
                <td align="center">
                  <table width="560" cellpadding="0" cellspacing="0" style="background:#111111;border-radius:16px;border:1px solid rgba(124,91,245,0.2);overflow:hidden;max-width:100%;">
                    <!-- Top accent line -->
                    <tr>
                      <td height="2" style="background:linear-gradient(90deg,#7c5bf5,#a78bfa,#7c5bf5);"></td>
                    </tr>
                    <!-- Header -->
                    <tr>
                      <td style="padding:32px 36px 24px;">
                        <p style="margin:0 0 8px;font-size:11px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:#a78bfa;">OrchiX Software Solutions</p>
                        <h1 style="margin:0;font-size:22px;font-weight:800;color:#f5f2eb;letter-spacing:-0.03em;line-height:1.3;">
                          New Booking Request
                        </h1>
                        <p style="margin:8px 0 0;font-size:13px;color:#8a8680;line-height:1.6;">
                          Someone wants to book a discovery call.
                        </p>
                      </td>
                    </tr>
                    <!-- Divider -->
                    <tr>
                      <td style="padding:0 36px;">
                        <div style="height:1px;background:rgba(255,255,255,0.07);"></div>
                      </td>
                    </tr>
                    <!-- Details -->
                    <tr>
                      <td style="padding:24px 36px;">
                        <table width="100%" cellpadding="0" cellspacing="0">
                          <tr>
                            <td style="padding-bottom:16px;">
                              <p style="margin:0 0 4px;font-size:11px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:#a78bfa;">Name</p>
                              <p style="margin:0;font-size:15px;font-weight:600;color:#f5f2eb;">${name}</p>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding-bottom:16px;">
                              <p style="margin:0 0 4px;font-size:11px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:#a78bfa;">Email</p>
                              <p style="margin:0;font-size:15px;color:#f5f2eb;">
                                <a href="mailto:${email}" style="color:#a78bfa;text-decoration:none;">${email}</a>
                              </p>
                            </td>
                          </tr>
                          ${
                            notes
                              ? `<tr>
                            <td>
                              <p style="margin:0 0 4px;font-size:11px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:#a78bfa;">Notes</p>
                              <p style="margin:0;font-size:14px;color:#c4bfb8;line-height:1.7;background:rgba(124,91,245,0.05);border:1px solid rgba(124,91,245,0.12);border-radius:10px;padding:12px 14px;">${notes.replace(/\n/g, "<br/>")}</p>
                            </td>
                          </tr>`
                              : ""
                          }
                        </table>
                      </td>
                    </tr>
                    <!-- Divider -->
                    <tr>
                      <td style="padding:0 36px;">
                        <div style="height:1px;background:rgba(255,255,255,0.07);"></div>
                      </td>
                    </tr>
                    <!-- Footer -->
                    <tr>
                      <td style="padding:20px 36px 28px;">
                        <p style="margin:0;font-size:12px;color:#8a8680;">
                          Reply directly to <a href="mailto:${email}" style="color:#a78bfa;text-decoration:none;">${email}</a> to respond to this inquiry.
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </body>
        </html>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again." },
      { status: 500 }
    );
  }
}
