<script lang="ts">
	import { SignedIn, SignedOut } from 'svelte-clerk';
</script>

<h1 class="mb-5 text-2xl font-bold">Welcome</h1>
<SignedIn>
	<p>You are signed in!</p>
</SignedIn>
<SignedOut>
	<p>You are not signed in!</p>
</SignedOut>

<style lang="postcss">
	@reference "tailwindcss";

	:global(html) {
		background-color: theme(--color-gray-100);
	}
</style>
