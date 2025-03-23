import { buildClerkProps } from 'svelte-clerk/server';
import type { LayoutServerLoad } from './$types';

// To enable Clerk SSR support, add initial state props to the load function
export const load: LayoutServerLoad = ({ locals }) => {
	return {
		...buildClerkProps(locals.auth)
	};
};
