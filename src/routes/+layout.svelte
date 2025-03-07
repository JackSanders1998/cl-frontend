<script lang="ts">
	import '../app.css';
	import type { Snippet } from 'svelte';
	import { ClerkProvider } from 'svelte-clerk';
	import Header from '$lib/components/Header.svelte';

	const { children }: { children: Snippet } = $props();
</script>

<ClerkProvider>
	<Header />
	{@render children()}
</ClerkProvider>
