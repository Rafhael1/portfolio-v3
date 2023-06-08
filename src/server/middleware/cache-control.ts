export default defineEventHandler(event => {
  const res = event.node.res;
  const year = 31536000; // 365 days
  const hour = 60 * 60; // 1 hour
  const url = event.node.req.url;
  const method = event.node.req.method;

	if (url && method === 'GET') {
    const maxage = url.match(/(.+)\.(jpg|jpeg|gif|css|png|js|ico|svg|xml|mjs)/) ? year : hour;
		res.setHeader('Cache-Control', `max-age=${maxage}`);
  }
});