import { getSeshBySeshId, type GetSeshBySeshIdData } from '../../../client';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const routeParams: GetSeshBySeshIdData = {
		path: {
			sesh_id: params.id
		},
		url: '/seshes/{sesh_id}'
	};
	const res = await getSeshBySeshId(routeParams);

	return { seshes: res.data };
};
