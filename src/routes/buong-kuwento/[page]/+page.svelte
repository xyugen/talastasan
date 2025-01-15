<script lang="ts">
	import type { PageData } from './$types';
	import BuongKuwentoCover from '$lib/assets/stories/buong-kuwento-cover.png';
	import { Button } from 'svelte-ux';
	import ChevronLeft from 'lucide-svelte/icons/chevron-left';
	import ChevronRight from 'lucide-svelte/icons/chevron-right';
	import StoryHeroSection from '@/components/story-hero-section.svelte';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Buong Kuwento | TalasTasan</title>
</svelte:head>

<!-- Hero -->
<StoryHeroSection imageCover={BuongKuwentoCover} />

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
			class="whitespace-pre-wrap rounded-md border border-primary/5 bg-white p-10 text-base text-surface-content/80 shadow-md md:text-lg"
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
