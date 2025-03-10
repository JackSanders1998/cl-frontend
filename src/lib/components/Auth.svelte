<script lang="ts">
	import { SignedIn, SignInButton, useClerkContext, UserButton } from 'svelte-clerk';

	const clerkContext = useClerkContext();
</script>

<div class="group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-gray-400">
	{#if clerkContext.auth.userId}
		<UserButton />
		{clerkContext.user?.fullName}
	{:else}
		<SignInButton />
	{/if}
</div>
