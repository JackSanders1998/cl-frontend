import type { AuthObject } from '$lib/auth';
import type { Security } from './hooks.server';

// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			auth: AuthObject;
			security: Security;
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
