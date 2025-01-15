<script lang="ts">
	import type { PageData } from './$types';
	import BuongKuwentoCover from '$lib/assets/stories/buong-kuwento-cover.png';
	import { Button } from 'svelte-ux';
	import ChevronLeft from 'lucide-svelte/icons/chevron-left';
	import ChevronRight from 'lucide-svelte/icons/chevron-right';
	import StoryHeroSection from '@/components/story-hero-section.svelte';
	import PageTitle from '@/components/page-title.svelte';
	import ChapterReader from '@/components/chapter-reader.svelte';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Buong Kuwento | TalasTasan</title>
</svelte:head>

<!-- Hero Section -->
<StoryHeroSection imageCover={BuongKuwentoCover} />

<section class="bg-gradient-to-b from-gray-50 to-surface-100">
	<PageTitle title="Buong Kuwento" chapter={data.chapter} />
	<div class="container mx-auto space-y-12 px-2 py-4 md:px-[10%]">
		<ChapterReader>
			{#if data.chapter}
				<p class="whitespace-pre-wrap">{data.chapter.content}</p>
			{/if}
		</ChapterReader>

		<div class="flex items-center justify-between">
			{#if data.previous}
				<a
					href="/buong-kuwento{data.previous.link}"
					class="hover:text-primary-dark group flex items-center space-x-2 text-primary transition"
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
					class="hover:text-primary-dark group flex items-center space-x-2 text-primary transition"
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
