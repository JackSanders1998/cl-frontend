import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals, fetch }) => {
	// locals.security.isAuthenticated();

	const res = await fetch(`http://127.0.0.1:8000/seshes`, {
		method: 'GET',
		headers: {
			'content-type': 'application/json',
			Authorization: `Bearer ${await locals.auth?.getToken()}`
		}
	});

	const seshes = await res.json();

	console.log('ALL MOOSE', seshes);

	return { seshes };
};
