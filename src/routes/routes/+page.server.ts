// import { fail, redirect } from '@sveltejs/kit';
// import { createRoute, Discipline, Scale, searchRoutes } from '../../client';
import { searchRoutes } from '../../client';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const res = await searchRoutes();

	return { routes: res.data };
};

// const create = async ({ locals, request }: { locals: App.Locals; request: Request }) => {
// 	const data = await request.formData();
// 	const description = data.get('description') as string;
// 	const disciplines = data.getAll('disciplines') as Discipline[];
// 	const grade = data.get('grade') as string;
// 	const location_id = data.get('location_id') as string;
// 	const scale = data.get('scale') as Scale;

// 	if (!description) {
// 		return fail(400, { description, missing: true });
// 	}
// 	if (!disciplines.length) {
// 		return fail(400, { disciplines, missing: true });
// 	}
// 	if (!grade) {
// 		return fail(400, { grade, missing: true });
// 	}
// 	if (!location_id) {
// 		return fail(400, { location_id, missing: true });
// 	}
// 	if (!scale) {
// 		return fail(400, { scale, missing: true });
// 	}

// 	await createRoute({
// 		body: {
// 			author: locals.auth.userId,
// 			description,
// 			disciplines,
// 			grade,
// 			location_id,
// 			scale
// 		}
// 	});

// 	redirect(300, '/routes');

// 	return { success: true };
// };

// export const actions = { create };
