import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals, params, fetch }) => {
	// locals.security.isAuthenticated();

	const res = await fetch(`http://127.0.0.1:8000/seshes/${params.id}`, {
		headers: {
			Authorization: `Bearer ${await locals.auth?.getToken()}`
		}
	});
	const seshes = await res.json();

	return { seshes };
};
