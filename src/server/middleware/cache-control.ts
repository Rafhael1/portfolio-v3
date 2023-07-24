export default defineEventHandler(event => {
  const res = event.node.res;
  // const year = 31536000; // 365 days
  const days = 60 * 60 * 24; // 1 day
  const url = event.node.req.url;
  // const method = event.node.req.method;

	if (url) {
    const maxage = days;
		res.setHeader('Cache-Control', `max-age=${maxage}`);
  }
});