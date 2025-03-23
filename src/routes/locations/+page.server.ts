import { searchLocations } from '../../client';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const res = await searchLocations();

	return { locations: res.data };
};