<script lang="ts">
	import { writtenWorks } from '@/data';
	import Carousel from './carousel.svelte';

	// @ts-ignore
	let image = writtenWorks.length > 0 ? writtenWorks[0] : null;
</script>

<div class="h-full w-[16rem] md:w-80">
	<Carousel images={writtenWorks} on:change={({ detail }) => (image = detail.image)} />

	{#if image}
		<div class="bg-primary mt-2 min-h-10 rounded p-2 text-center">
			{image.alt}
		</div>
	{/if}
</div>
