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

	await $fetch(`${process.env.PORTFOLIO_JAVA_API_URL}/contact/send-email`, {
		method: "POST",
		body: JSON.stringify({
			name: body.name,
			email: body.email,
			subject: body.subject,
			message: body.message + "\n\n" + "Sent Through Java",
		})
	});
});