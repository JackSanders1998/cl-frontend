import { type Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { Security } from './utils/security';
import { withClerkHandler } from 'svelte-clerk/server';

export const handle: Handle = sequence(withClerkHandler(), ({ event, resolve }) => {
	event.locals.security = new Security(event);

	return resolve(event);
});
