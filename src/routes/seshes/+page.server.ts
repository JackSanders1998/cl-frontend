import { searchSeshes } from '../../client';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	locals.security.isAuthenticated();
	const res = await searchSeshes();

	return { seshes: res.data };
};
