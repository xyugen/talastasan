<script lang="ts">
	import type { PageData } from './$types';
	import BuongKuwentoCover from '$lib/assets/stories/buong-kuwento.png';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<!-- <title>{data.title}</title> -->
</svelte:head>

<div style="background-image: url({BuongKuwentoCover});"></div>

<section></section>
