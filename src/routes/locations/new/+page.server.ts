import { fail, redirect, type Actions } from '@sveltejs/kit';
import { createLocation } from '../../../client';
import { superValidate } from 'sveltekit-superforms';
import { zCreateLocation } from '../../../client/zod.gen';
import { zod } from 'sveltekit-superforms/adapters';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	locals.security.isAuthenticated();

	const form = await superValidate(
		{
			author: locals.auth.userId
		},
		zod(zCreateLocation)
	);

	return { form };
};

const create = async ({ locals, request }: { locals: App.Locals; request: Request }) => {
	locals.security.isAuthenticated();

	const form = await superValidate(request, zod(zCreateLocation));

	if (!form.valid) return fail(400, { form });

	const res = await createLocation({
		body: form.data
	});
	if (res.response.status !== 201) {
		return fail(
			res.response.status,
			res.data ? { ...res.data, status: res.response.status } : { status: res.response.status }
		);
	}

	redirect(300, '/locations');
};

export const actions: Actions = { default: create };
