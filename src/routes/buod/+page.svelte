<script lang="ts">
	import StoryHeroSection from '@/components/story-hero-section.svelte';
	import BuodCover from '@/assets/stories/buod-cover.png';
	import PageTitle from '@/components/page-title.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Buod | TalasTasan</title>
</svelte:head>

<!-- Hero -->
<StoryHeroSection imageCover={BuodCover} />

<section class="bg-surface-100">
	<PageTitle title="Buod" />
	<div class="container mx-auto space-y-12 p-8 md:px-[10%]">
		<p
			class="whitespace-pre-wrap rounded-md border border-primary/5 bg-white p-6 text-base text-surface-content/80 shadow-md md:p-10 md:text-lg"
		>
			{data.shortenedStory}
		</p>
	</div>
</section>
