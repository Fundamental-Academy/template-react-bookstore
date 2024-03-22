export default async function fetchAPI(url, method = "GET", body) {
	const response = await fetch(url, {
		headers: {
			"Content-Type": "application/json",
		},
		method: method,
		body: JSON.stringify(body),
	});
	const payload = await response.json();

	return payload;
}
