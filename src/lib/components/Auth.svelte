<script lang="ts">
	import { useClerkContext } from 'svelte-clerk';

	const clerkContext = useClerkContext();
</script>

<div class="text-white">
	<div class="flex items-center gap-4">
		<a href="/">cl-frontend</a>
	</div>
	<div>
		{#if clerkContext.auth.userId}
			<button
				onclick={() => {
					clerkContext.clerk?.signOut();
				}}>Sign Out</button
			>
		{:else}
			<button
				onclick={() => {
					clerkContext.clerk?.openSignIn();
				}}>Sign In</button
			>
		{/if}
	</div>
</div>
