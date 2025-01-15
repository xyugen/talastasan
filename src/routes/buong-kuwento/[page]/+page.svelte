<script lang="ts">
	import type { PageData } from './$types';
	import BuongKuwentoCover from '$lib/assets/stories/buong-kuwento-cover.png';
	import { Button } from 'svelte-ux';
	import ChevronLeft from 'lucide-svelte/icons/chevron-left';
	import ChevronRight from 'lucide-svelte/icons/chevron-right';
	import StoryHeroSection from '@/components/story-hero-section.svelte';
	import PageTitle from '@/components/page-title.svelte';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Buong Kuwento | TalasTasan</title>
</svelte:head>

<!-- Hero Section -->
<StoryHeroSection imageCover={BuongKuwentoCover} />

<section class="bg-gradient-to-b from-gray-50 to-surface-100">
	<PageTitle title="Buong Kuwento" chapter={data.chapter} />
	<div class="container mx-auto space-y-12 px-6 py-12 md:px-[10%]">
		<div
			class="rounded-lg border border-primary/10 bg-white p-8 text-lg leading-relaxed text-surface-content/80 shadow-lg"
		>
			{#if data.chapter}
				<p class="whitespace-pre-wrap">{data.chapter.content}</p>
			{/if}
		</div>

		<div class="flex justify-between items-center">
			{#if data.previous}
				<a
					href="/buong-kuwento{data.previous.link}"
					class="group flex items-center space-x-2 text-primary hover:text-primary-dark transition"
				>
					<Button variant="outline" class="flex items-center space-x-2">
						<ChevronLeft class="transition group-hover:scale-110" />
						<span>{data.previous.title}</span>
					</Button>
				</a>
			{:else}
				<div class="w-24"></div>
				<!-- Placeholder for alignment -->
			{/if}

			{#if data.next}
				<a
					href="/buong-kuwento{data.next.link}"
					class="group flex items-center space-x-2 text-primary hover:text-primary-dark transition"
				>
					<Button variant="fill" class="flex items-center space-x-2">
						<span>{data.next.title}</span>
						<ChevronRight class="transition group-hover:scale-110" />
					</Button>
				</a>
			{:else}
				<div class="w-24"></div>
				<!-- Placeholder for alignment -->
			{/if}
		</div>
	</div>
</section>