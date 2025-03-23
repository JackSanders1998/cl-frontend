import { type Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { Security } from './utils/security';
import { withClerkHandler } from 'svelte-clerk/server';
import { client } from './client/client.gen';
import { CL_BACKEND_URL as baseUrl } from '$env/static/private';

export const handle: Handle = sequence(withClerkHandler(), async ({ event, resolve }) => {
	client.setConfig({
		auth: async () => `Bearer ${await event.locals.auth.getToken()}`,
		baseUrl
	});

	event.locals.security = new Security(event);
	return resolve(event);
});
