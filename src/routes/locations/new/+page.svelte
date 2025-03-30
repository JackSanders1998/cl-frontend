<script lang="ts">
	import { page } from '$app/state';
	import { superForm } from 'sveltekit-superforms';
	import SuperDebug from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { zCreateLocation } from '../../../client/zod.gen';
	import { createLocation, Environment } from '../../../client';

	let { data } = $props();
	const { form, errors, constraints, message, delayed, enhance } = superForm(data.form, {
		validators: zodClient(zCreateLocation),
		resetForm: true
	});
</script>

<form method="POST" use:enhance>
	<div>
		<h2 class="text-base/7 font-semibold text-white">Location</h2>
		<p class="mt-1 text-sm/6 text-gray-400">
			This information will be displayed publicly so be careful what you share.
		</p>

		<div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
			<div class="sm:col-span-4">
				<label for="name" class="block text-sm/6 font-medium text-white">Name</label>
				<div class="mt-2">
					<input
						type="text"
						name="name"
						id="name"
						autocomplete="given-name"
						aria-invalid={$errors.name ? 'true' : undefined}
						bind:value={$form.name}
						{...$constraints.name}
						class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
						placeholder="Movement Lincoln Park"
					/>
					{#if $errors.name}<span class="invalid">{$errors.name}</span>{/if}
				</div>
			</div>

			<div class="col-span-full">
				<fieldset>
					<legend class="text-sm/6 font-semibold text-white">Environment</legend>
					<p class="mt-1 text-sm/6 text-gray-400">Is this a gym or outdoors?</p>
					<div class="mt-3">
						<div class="flex items-center gap-x-3">
							<input
								id="gym"
								name="environment"
								type="radio"
								bind:group={$form.environment}
								value={Environment.GYM}
								class="relative size-4 appearance-none rounded-full border border-white/10 bg-white/5 before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-white/10 disabled:bg-transparent disabled:before:bg-white/25 forced-colors:appearance-auto forced-colors:before:hidden"
							/>
							<label for="gym" class="block text-sm/6 font-medium text-white">Gym</label>
						</div>
						<div class="flex items-center gap-x-3">
							<input
								id="outdoor"
								name="environment"
								type="radio"
								bind:group={$form.environment}
								value={Environment.OUTDOOR}
								class="relative size-4 appearance-none rounded-full border border-white/10 bg-white/5 before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-white/10 disabled:bg-transparent disabled:before:bg-white/25 forced-colors:appearance-auto forced-colors:before:hidden"
							/>
							<label for="outdoor" class="block text-sm/6 font-medium text-white">Outdoor</label>
						</div>
					</div>
					{#if $errors.environment}<span class="invalid">{$errors.environment}</span>{/if}
				</fieldset>
			</div>

			<div class="col-span-full">
				<label for="about" class="block text-sm/6 font-medium text-white">Description</label>
				<div class="mt-2">
					<textarea
						name="description"
						id="description"
						rows="3"
						aria-invalid={$errors.description ? 'true' : undefined}
						bind:value={$form.description}
						{...$constraints.description}
						class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
						placeholder="Climbing gym with ropes and bouldering at 1460 N Dayton St, Chicago, IL 60642."
					></textarea>
					{#if $errors.name}<span class="invalid">{$errors.name}</span>{/if}
				</div>
				<p class="mt-3 text-sm/6 text-gray-400">Write a few sentences about this location.</p>
			</div>
		</div>
	</div>

	<div class="mt-6 flex items-center justify-end gap-x-6">
		<button type="button" class="text-sm/6 font-semibold text-white">Cancel</button>
		<button
			type="submit"
			class="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
			>Save</button
		>
		{#if $delayed}Working...{/if}
	</div>
</form>

<SuperDebug data={$form} />

<style>
	.invalid {
		color: red;
	}
</style>
