import { fail } from '@sveltejs/kit';
import { createRoute, Discipline, Scale } from '../../../client';

const create = async ({ locals, request }: { locals: App.Locals; request: Request }) => {
	locals.security.isAuthenticated();
	const data = await request.formData();
	const description = data.get('description') as string;
	const disciplines = data.getAll('disciplines') as Discipline[];
	const grade = data.get('grade') as string;
	const location_id = data.get('location_id') as string;
	const scale = data.get('scale') as Scale;

	if (!description) {
		return fail(400, { description, missing: true });
	}
	if (!disciplines.length) {
		return fail(400, { disciplines, missing: true });
	}
	if (!grade) {
		return fail(400, { grade, missing: true });
	}
	if (!location_id) {
		return fail(400, { location_id, missing: true });
	}
	if (!scale) {
		return fail(400, { scale, missing: true });
	}

	const res = await createRoute({
		body: {
			author: locals.auth.userId,
			description,
			disciplines,
			grade,
			location_id,
			scale
		}
	});

	if (res.response.status !== 201) {
		return fail(
			res.response.status,
			res.data ? { ...res.data, status: res.response.status } : { status: res.response.status }
		);
	}

	// redirect(300, '/routes');

	return { success: true };
};

export const actions = { default: create };
