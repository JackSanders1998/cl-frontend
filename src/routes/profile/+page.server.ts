import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	locals.security.isAuthenticated();
	if (locals.auth?.userId) {
		redirect(307, `/profile/@${locals.auth.userId}`);
	}
};
