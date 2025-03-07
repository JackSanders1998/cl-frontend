import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals, params, fetch }) => {
	// locals.security.isAuthenticated();

	const res = await fetch(`https://cl-backend-6mrp.shuttle.app/seshes/${params.id}`, {
		headers: {
			Authorization: `Bearer ${await locals.auth?.getToken()}`
		}
	});

	const seshes = await res.json();

	console.log('MOOSE BY ID: ', seshes);

	return { seshes };
};
