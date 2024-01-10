"use server";
export async function sendEmail(formData: FormData) {
	const res = await fetch("https://api.postmarkapp.com/email", {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
			"X-Postmark-Server-Token": "c2321bd2-5a8f-46f2-b8fb-dbc706bd6923",
		},
		body: JSON.stringify({
			From: "sam@morgan.dev",
			To: "sam@morgan.dev",
			Subject: `New message from ${formData.get("name")} at ${formData.get(
				"website"
			)}`,
			HtmlBody: `
                Name: ${formData.get("name")}
                Email: ${formData.get("email")}
                Role: ${formData.get("role")}
                Website: ${formData.get("website")}
                Message: ${formData.get("message")}
                `,
			MessageStream: "outbound",
		}),
	});

	if (res.ok) {
		return res.json();
	} else {
		return res.json();
	}
}
