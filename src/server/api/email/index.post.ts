import nodeMailer from 'nodemailer';

interface Body {
	email: string;
	subject: string;
	message: string;
}

export default defineEventHandler(async(event) => {
	const body: Body = await readBody(event);
	if (!body.email || !body.subject || !body.message) {
		throw new Error('Missing required fields');
	}
	
	const userEmail = process.env.GMAIL_NODEMAILER_USER;
	const userPassword = process.env.GMAIL_NODEMAILER_PASS;

	const transporter = nodeMailer.createTransport({
		service: 'mailgun',
		port: 587,
		auth: {
			user: userEmail,
			pass: userPassword
		}
	});

	await transporter.sendMail({
		from: userEmail,
		to: process.env.RECIPIENT_EMAIL,
		subject: `${body.email} - ${body.subject}`,
		text: body.message,
	}, (err: any, info: any) => {
		if (err) {
			console.log(err);
			throw new Error('Message NOT sent');
		} else {
			console.log(info);
			return 'Message sent successfully'
		}
	});

	return 'Message sent';
});