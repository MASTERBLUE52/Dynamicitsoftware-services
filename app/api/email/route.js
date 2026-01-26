import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    if(!email || !name || !message){
        return new Response(JSON.stringify('Missing Required Fields'),{status : 400});
    }

    console.log(name + "\n" + email + "\n" + message);

    const mailerSend = new MailerSend({
      apiKey: process.env.MAILERSEND_API_KEY,
    });

    const sentForm = new Sender(
      process.env.MAILERSEND_EMAIL,
      "Dynamic IT Services"
    );

    const recipients = [
      new Recipient("khambhatiburhanuddin72@gmail.com", "Burhanuddin"),
    ];

    const emailParams = new EmailParams()
      .setFrom(sentForm)
      .setTo(recipients)
      .setReplyTo([{
        email : email,
        name: name
      }])
      .setSubject(`Incoming Message from Portfolio - ${email}`)
      .setHtml(
        `
        <h3>New Portfolio Contact</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        `
      )
      .setText(`New Portfolio Contact\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

    await mailerSend.email.send(emailParams);

    return new Response(JSON.stringify("Email Sent Successfully"), {
      status: 201,
    });
  } catch (err) {
    console.log(err)
    return new Response(JSON.stringify("Server Error"), {
      status: 500,
    });
  }
}
