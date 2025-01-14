<script lang="ts">
	import type { PageData } from './$types';
	import BuongKuwentoCover from '$lib/assets/stories/buong-kuwento-cover.png';
	import { Button } from 'svelte-ux';
	import ChevronLeft from 'lucide-svelte/icons/chevron-left';
	import ChevronRight from 'lucide-svelte/icons/chevron-right';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Impeng Negro | TalasTasan</title>
</svelte:head>

<!-- Hero -->
<div
	class="relative flex h-96 flex-col items-center justify-center bg-cover bg-no-repeat text-surface-100"
	style="background-image: url({BuongKuwentoCover}); background-position: center;"
>
	<div class="absolute inset-0 bg-black/40"></div>
	<div class="z-10 space-y-4 text-center">
		<h1 class="text-7xl font-medium">Impeng Negro</h1>
		<p>Ni Rogelio Sikat</p>
	</div>
</div>

<section class="bg-surface-100">
	<div class="space-y-2 bg-secondary px-8 py-8 text-secondary-content md:px-[10%]">
		<h1 class="text-center text-3xl font-medium">Buong Kuwento</h1>
		<p class="text-center">
			{#if data.chapter}
				{data.chapter.title}
			{/if}
		</p>
	</div>
	<div class="container mx-auto space-y-12 px-8 py-8 md:px-[10%]">
		<p
			class="whitespace-pre-wrap rounded-md border border-primary/5 bg-white p-10 text-lg text-surface-content/80 shadow-md"
		>
			{#if data.chapter}
				{data.chapter.content}
			{/if}
		</p>

		<div class="flex flex-row justify-between">
			{#if data.previous}
				<a href="/buong-kuwento{data.previous.link}">
					<Button variant="outline">
						<ChevronLeft />
						<span class="ml-2">Previous</span>
					</Button>
				</a>
			{:else}
				<div></div>
				<!-- Empty space for alignment if no previous chapter -->
			{/if}

			{#if data.next}
				<a href="/buong-kuwento{data.next.link}">
					<Button variant="fill">
						<span class="mr-2">Next</span>
						<ChevronRight />
					</Button>
				</a>
			{:else}
				<div></div>
				<!-- Empty space for alignment if no next chapter -->
			{/if}
		</div>
	</div>
</section>
