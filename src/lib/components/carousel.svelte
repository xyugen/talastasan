<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	import ChevronLeft from 'lucide-svelte/icons/chevron-left';
	import ChevronRight from 'lucide-svelte/icons/chevron-right';

	let activeIndex = 0;
	let autoPlayInterval: any;

	export let images: { title: string; src: string; alt: string }[] = [];
	export let autoPlay = false;
	export let divClass: string = '';
	export let imgClass: string = '';

	const dispatch = createEventDispatcher();

	const setActiveIndex = (index: number) => {
		activeIndex = (index + images.length) % images.length;
		dispatch('change', { image: images[activeIndex], index: activeIndex });
	};

	const nextSlide = () => {
		setActiveIndex(activeIndex + 1);
	};

	const previousSlide = () => {
		setActiveIndex(activeIndex - 1);
	};

	onMount(() => {
		if (images.length > 0) {
			dispatch('change', { image: images[activeIndex], index: activeIndex });
		}

		if (autoPlay) {
			autoPlayInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
		}

		return () => {
			clearInterval(autoPlayInterval);
		};
	});
</script>

<!-- Preload all Carousel images for improved responsivity -->
<svelte:head>
	{#if images.length > 0}
		{#each images as image}
			<link rel="preload" href={image.src} as="image" />
		{/each}
	{/if}
</svelte:head>

<div class="relative h-full w-full overflow-hidden">
	<!-- Carousel Inner -->
	<div
		class={'flex transition-transform duration-500 ease-in-out ' + divClass}
		style="transform: translateX(calc(-100% * var(--active-index)))"
		style:--active-index={activeIndex}
	>
		{#each images as { src, alt }}
			<div class="w-full flex-shrink-0">
				<img {src} {alt} class={'h-full w-fit object-fill' + imgClass} />
			</div>
		{/each}
	</div>

	<!-- Previous and Next Buttons -->
	<div class="absolute inset-0 flex items-center justify-between px-4">
		<button
			class="rounded-full bg-black/50 p-2 text-white transition hover:bg-black/70"
			on:click={previousSlide}
		>
			<ChevronLeft />
		</button>
		<button
			class="rounded-full bg-black/50 p-2 text-white transition hover:bg-black/70"
			on:click={nextSlide}
		>
			<ChevronRight />
		</button>
	</div>

	<!-- Dots -->
	<div class="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
		{#each images as _, index}
			<button
				type="button"
				aria-label="Go to slide {index + 1}"
				class="h-3 w-3 cursor-pointer rounded-full bg-gray-400 transition {index === activeIndex
					? 'bg-white'
					: ''}"
				on:click={() => setActiveIndex(index)}
			></button>
		{/each}
	</div>
</div>
