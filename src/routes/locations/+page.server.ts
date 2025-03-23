import { searchLocations } from '../../client';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	locals.security.isAuthenticated();
	const res = await searchLocations();

	return { locations: res.data };
};
