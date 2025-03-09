import { type Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { Security } from './utils/security';
import { withClerkHandler } from 'svelte-clerk/server';
import { client } from './client/client.gen';

const BASE_URL = 'http://127.0.0.1:8000';

export const handle: Handle = sequence(withClerkHandler(), async ({ event, resolve }) => {
	client.setConfig({
		auth: async () => `Bearer ${await event.locals.auth.getToken()}`,
		baseUrl: BASE_URL
	});

	event.locals.security = new Security(event);
	return resolve(event);
});
