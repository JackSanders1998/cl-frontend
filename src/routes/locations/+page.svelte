<script lang="ts">
	let { data, form } = $props();
</script>

{#if data.locations && data.locations.length > 0}
	<div class="bg-gray-900">
		<div class="mx-auto max-w-7xl">
			<div class="bg-gray-900 py-10">
				<div class="px-4 sm:px-6 lg:px-8">
					<div class="sm:flex sm:items-center">
						<div class="sm:flex-auto">
							<h1 class="text-base font-semibold text-white">Location</h1>
							<p class="mt-2 text-sm text-gray-300">A list of all locations.</p>
						</div>
						<div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
							<a
								href="/locations/new"
								type="button"
								class="block rounded-md bg-indigo-500 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
								>New Location<span class="sr-only"></span></a
							>
						</div>
					</div>
					<div class="mt-8 flow-root">
						<div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
							<div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
								<table class="min-w-full divide-y divide-gray-700">
									<thead>
										<tr>
											<th
												scope="col"
												class="py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-white sm:pl-0"
												>Grade</th
											>
											<th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-white"
												>Disciplines</th
											>
											<th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-white"
												>Author</th
											>
											<th scope="col" class="relative py-3.5 pr-4 pl-3 sm:pr-0">
												<span class="sr-only">Edit</span>
											</th>
										</tr>
									</thead>
									<tbody class="divide-y divide-gray-800">
										{#each data.locations as location}
											<tr>
												<td
													class="py-4 pr-3 pl-4 text-sm font-medium whitespace-nowrap text-white sm:pl-0"
													>{location.name} / {location.environment}</td
												>
												<td class="px-3 py-4 text-sm whitespace-nowrap text-gray-300"
													>{location.description}</td
												>
												<td class="px-3 py-4 text-sm whitespace-nowrap text-gray-300"
													>{location.author}</td
												>
												<td
													class="relative py-4 pr-4 pl-3 text-right text-sm font-medium whitespace-nowrap sm:pr-0"
												>
													<a href="/locations" class="text-indigo-400 hover:text-indigo-300"
														>Edit<span class="sr-only"></span></a
													>
												</td>
											</tr>
										{/each}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
{:else}
	<p>No locations found.</p>
{/if}
