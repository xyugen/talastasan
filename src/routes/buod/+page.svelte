<script lang="ts">
	import StoryHeroSection from '@/components/story-hero-section.svelte';
	import BuodCover from '@/assets/stories/buod-cover.png';
	import PageTitle from '@/components/page-title.svelte';
	import type { PageData } from './$types';
	import ChapterReader from '@/components/chapter-reader.svelte';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Buod | TalasTasan</title>
</svelte:head>

<!-- Hero -->
<StoryHeroSection imageCover={BuodCover} />

<section class="bg-surface-100">
	<PageTitle title="Buod" />
	<div class="container mx-auto space-y-12 px-2 py-4 md:px-[10%]">
		<ChapterReader>
			<p class="whitespace-pre-wrap">
				{data.shortenedStory}
			</p>
		</ChapterReader>
	</div>
</section>
