export default defineEventHandler(event => {
	const res = event.node.res;
	const days = 60 * 60 * 24 * 1; // 30 days
	const url = event.node.req.url;

	if (url) {
		const maxage = days;
		res.setHeader("Cache-Control", `max-age=${maxage}`);
	}
});