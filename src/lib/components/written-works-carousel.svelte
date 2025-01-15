<script lang="ts">
	import { writtenWorks } from '@/data';
	import Carousel from './carousel.svelte';

	let image = writtenWorks.length > 0 ? writtenWorks[0] : null;
</script>

<div class="flex flex-col items-center space-y-4 w-full md:w-96">
	<Carousel 
		images={writtenWorks} 
		on:change={({ detail }) => (image = detail.image)} 
		divClass="rounded-lg shadow-lg"
		imgClass="rounded-lg"
	/>

	{#if image}
		<div class="mt-2 min-h-10 rounded-lg bg-primary p-4 text-center text-lg font-medium text-primary-content shadow-md">
			{image.alt}
		</div>
	{/if}
</div>
