import { searchSeshes } from '../../client';
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
	// const seshes = await res.json();

	const heyApi = await searchSeshes();

	console.log(heyApi);

	const seshes = await heyApi.data;

	return { seshes };
};
