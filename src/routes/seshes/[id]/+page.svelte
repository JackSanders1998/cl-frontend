<script lang="ts">
	import type { PageProps } from '../$types';

	let { data }: PageProps = $props();
</script>

<h1 class="mb-5 text-2xl font-bold">Sesh</h1>
<p class="mb-5">{JSON.stringify(data)}</p>
