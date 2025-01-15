<script lang="ts">
	import StoryHeroSection from '@/components/story-hero-section.svelte';
	import { fullStoryChapters } from '@/data';
	import BuongKuwentoCover from '@/assets/stories/buong-kuwento-cover.png';
</script>

<svelte:head>
	<title>Buong Kuwento: Table of Contents</title>
</svelte:head>

<StoryHeroSection imageCover={BuongKuwentoCover} />

<section class="min-h-screen bg-surface-100 p-8 text-surface-content">
	<div class="container mx-auto max-w-4xl">
		<h1 class="mb-6 text-center text-4xl font-semibold">Buong Kuwento</h1>
		<p class="mb-8 text-center text-lg text-surface-content/80">
			Piliin ang pahina upang simulan ang iyong pagbabasa.
		</p>
		<div class="grid md:grid-cols-2 gap-4">
			{#each fullStoryChapters as chapter}
				<a
					href="/buong-kuwento{chapter.link}"
					class="block space-y-2 rounded-lg border border-primary/30 bg-white p-4 shadow-md transition hover:shadow-lg"
				>
					<h3 class="text-xl font-medium text-[#2D2522]">{chapter.title}</h3>
					<p class="text-sm text-[#2D2522]/80">
						{chapter.content.slice(0, 200)}...
					</p>
				</a>
			{/each}
		</div>
	</div>
</section>
