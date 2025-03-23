<script lang="ts">
	let { form } = $props();
</script>

<form method="POST" class="text-gray-300">
	{#if form?.missing}<p class="error">The location_id field is required</p>{/if}
	<label>
		description:
		<input name="description" autocomplete="off" />
	</label>
	<label>
		disciplines:
		<input name="disciplines" autocomplete="off" />
	</label>
	<label>
		grade:
		<input name="grade" autocomplete="off" />
	</label>
	<label>
		location_id:
		<input name="location_id" autocomplete="off" value={form?.location_id ?? ''} />
	</label>
	<label>
		scale:
		<input name="scale" autocomplete="off" />
	</label>
	<button>Log in</button>
	<button formaction="?/create">Register</button>
</form>
