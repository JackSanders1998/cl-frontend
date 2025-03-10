import { searchRoutes } from '../../client';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const res = await searchRoutes();

	return { routes: res.data };
};
