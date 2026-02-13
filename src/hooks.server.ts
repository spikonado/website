import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const pathname = event.url.pathname;

	if (pathname.startsWith('/ph')) {
		const hostname = pathname.startsWith('/ph/static/')
			? 'eu-assets.i.posthog.com'
			: 'eu.i.posthog.com';

		const url = new URL(event.request.url);
		url.protocol = 'https:';
		url.hostname = hostname;
		url.port = '443';
		url.pathname = pathname.replace(/^\/ph/, '');

		const headers = new Headers(event.request.headers);
		headers.set('host', hostname);
		headers.set('accept-encoding', '');

		// Forward client IP for geolocation
		const clientIp = event.request.headers.get('x-forwarded-for') || event.getClientAddress();
		if (clientIp) {
			headers.set('x-forwarded-for', clientIp);
		}

		const requestInit: RequestInit & { duplex: 'half' } = {
			method: event.request.method,
			headers,
			body: event.request.body,
			duplex: 'half'
		};

		return fetch(url.toString(), requestInit);
	}

	return resolve(event);
};
