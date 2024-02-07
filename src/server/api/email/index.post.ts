import nodeMailer from "nodemailer";

interface Body {
	name: string;
	email: string;
	subject: string;
	message: string;
}

export default defineEventHandler(async(event) => {
	const body: Body = await readBody(event);
	if (!body.email || !body.subject || !body.message) {
		throw new Error("Missing required fields");
	}
	
	const userEmail = process.env.GMAIL_NODEMAILER_USER;
	const userPassword = process.env.GMAIL_NODEMAILER_PASS;

	const transporter = nodeMailer.createTransport({
		service: "smtp.mailgun.org",
		port: 587,
		auth: {
			user: userEmail,
			pass: userPassword
		}
	});

	const sendByJavaApi = async () => {
		try {
			await $fetch(`${process.env.PORTFOLIO_JAVA_API_URL}/contact/send-email`, {
				method: "POST",
				body: JSON.stringify({
					name: body.name,
					email: body.email,
					subject: body.subject,
					message: body.message + "\n\n" + "Sent Through Java",
				})
			})
		} catch (err) {
			console.error(err);
		}
	}

	transporter.sendMail({
		from: userEmail,
		to: process.env.RECIPIENT_EMAIL,
		subject: `${body.email} - ${body.subject}`,
		text: body.message + "\n\n" + "Sent Through Node",
	});
	await sendByJavaApi();
});