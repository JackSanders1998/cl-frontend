<script lang="ts">
	import Auth from '$lib/components/Auth.svelte';
	import type { Snippet } from 'svelte';
	import { fade, slide } from 'svelte/transition';

	const { children }: { children: Snippet } = $props();
	let isSideBarOpen = $state<boolean>(false);

	const logoIcon = `
	<div class="h-8 w-auto text-green-800">
		<svg
			class="size-6 shrink-0 class="h-8 w-auto bg-purple-500"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			aria-hidden="true"
			data-slot="icon"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="m16 4l-3.621 3.621a3 3 0 0 1-2.122.879H6.5l-2.121 2.121a3 3 0 0 0-.879 2.122V16m3-5v4.556a1.945 1.945 0 0 0 3.32 1.374l3.43-3.43h.25l.296.592A7.08 7.08 0 0 0 17.5 17.5m-5.5.498l-.056-.11l-.194-.388zm0 0A10.62 10.62 0 0 0 17.5 23m2 1V8L17 5.5m-5-5L14.5 3m-4 5.5v5m-2.805-7s-1.81-.557-2.135-1.776a1.77 1.77 0 0 1 1.242-2.163a1.75 1.75 0 0 1 2.146 1.25c.324 1.219-.962 2.61-.962 2.61z"
			/>
		</svg>
	</div>`;

	const sideBarComponents = [
		{
			name: 'Home',
			icon: `<svg
						class="size-6 shrink-0"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
						data-slot="icon"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"						/>
					</svg>`,
			href: '/'
		},
		{
			name: 'Seshes',
			icon: `<svg
						class="size-6 shrink-0"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
						data-slot="icon"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="m16 4l-3.621 3.621a3 3 0 0 1-2.122.879H6.5l-2.121 2.121a3 3 0 0 0-.879 2.122V16m3-5v4.556a1.945 1.945 0 0 0 3.32 1.374l3.43-3.43h.25l.296.592A7.08 7.08 0 0 0 17.5 17.5m-5.5.498l-.056-.11l-.194-.388zm0 0A10.62 10.62 0 0 0 17.5 23m2 1V8L17 5.5m-5-5L14.5 3m-4 5.5v5m-2.805-7s-1.81-.557-2.135-1.776a1.77 1.77 0 0 1 1.242-2.163a1.75 1.75 0 0 1 2.146 1.25c.324 1.219-.962 2.61-.962 2.61z"
						/>
					</svg>`,
			href: '/seshes'
		},
		{
			name: 'Ticks',
			icon: `<svg
						class="size-6 shrink-0"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
						data-slot="icon"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M16.972 6.251a2 2 0 0 0-2.72.777l-3.713 6.682l-2.125-2.125a2 2 0 1 0-2.828 2.828l4 4c.378.379.888.587 1.414.587l.277-.02a2 2 0 0 0 1.471-1.009l5-9a2 2 0 0 0-.776-2.72"
						/>
					</svg>`,
			href: '/ticks'
		},
		{
			name: 'Routes',
			icon: `<svg
						class="size-6 shrink-0"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
						data-slot="icon"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3 19a2 2 0 1 0 4 0a2 2 0 0 0-4 0M19 7a2 2 0 1 0 0-4a2 2 0 0 0 0 4m-8 12h5.5a3.5 3.5 0 0 0 0-7h-8a3.5 3.5 0 0 1 0-7H13"
						/>
					</svg>`,
			href: '/routes'
		}
	];
</script>

<div>
	<!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. -->
	{#if isSideBarOpen}
		<div class="relative z-50 lg:hidden" role="dialog" aria-modal="true">
			<!-- Fade background when sidebar is open -->
			<div
				class="fixed inset-0 bg-gray-900/80"
				aria-hidden="true"
				transition:fade={{ duration: 300 }}
			></div>
			<div class="fixed inset-0 flex" transition:slide={{ duration: 300, axis: 'x' }}>
				<div class="relative mr-16 flex w-full max-w-xs flex-1">
					<div class="absolute top-0 left-full flex w-16 justify-center pt-5">
						<button type="button" class="-m-2.5 p-2.5" onclick={() => (isSideBarOpen = false)}>
							<span class="sr-only">Close sidebar</span>
							<svg
								class="size-6 text-white"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								aria-hidden="true"
								data-slot="icon"
							>
								<path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
							</svg>
						</button>
					</div>

					<!-- Sidebar component-->
					<div
						class="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 ring-1 ring-white/10"
					>
						<div class="flex h-16 shrink-0 items-center">
							{@html logoIcon}
						</div>
						<nav class="flex flex-1 flex-col">
							<ul role="list" class="flex flex-1 flex-col gap-y-7">
								<li>
									<ul role="list" class="-mx-2 space-y-1">
										{#each sideBarComponents as sideBarComponent}
											<li>
												<a
													href={sideBarComponent.href}
													class="group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-gray-400 hover:bg-gray-800 hover:text-white"
												>
													{@html sideBarComponent.icon}
													{sideBarComponent.name}
												</a>
											</li>
										{/each}
									</ul>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</div>
	{/if}

	<!-- Static sidebar for desktop -->
	<div class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
		<!-- Sidebar component -->
		<div class="flex grow flex-col gap-y-5 overflow-y-auto bg-black/10 px-6 ring-1 ring-white/5">
			<div class="flex h-16 shrink-0 items-center">
				{@html logoIcon}
			</div>
			<nav class="flex flex-1 flex-col">
				<ul role="list" class="flex flex-1 flex-col gap-y-7">
					<li>
						<ul role="list" class="-mx-2 space-y-1">
							{#each sideBarComponents as sideBarComponent}
								<li>
									<a
										href={sideBarComponent.href}
										class="group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-gray-400 hover:bg-gray-800 hover:text-white"
									>
										{@html sideBarComponent.icon}
										{sideBarComponent.name}
									</a>
								</li>
							{/each}
						</ul>
					</li>
					<li class="-mx-6 mt-auto">
						<Auth />
					</li>
				</ul>
			</nav>
		</div>
	</div>

	<div
		class="sticky top-0 z-40 flex items-center gap-x-6 bg-gray-900 px-4 py-4 shadow-xs sm:px-6 lg:hidden"
	>
		<button
			type="button"
			class="-m-2.5 p-2.5 text-gray-400 lg:hidden"
			onclick={() => (isSideBarOpen = true)}
		>
			<span class="sr-only">Open sidebar</span>
			<svg
				class="size-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				aria-hidden="true"
				data-slot="icon"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
				/>
			</svg>
		</button>
		<div class="flex-1 text-sm/6 font-semibold text-white">Dashboard</div>
		<Auth />
	</div>

	<main class="py-10 lg:pl-72">
		<div class="px-4 sm:px-6 lg:px-8">
			{@render children()}
		</div>
	</main>
</div>
