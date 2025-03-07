<script lang="ts">
	import '../app.css';
	import type { Snippet } from 'svelte';
	import { ClerkProvider } from 'svelte-clerk';
	import Layout from '$lib/components/Layout.svelte';

	const { children }: { children: Snippet } = $props();
</script>

<ClerkProvider>
	<Layout {children} />
</ClerkProvider>
