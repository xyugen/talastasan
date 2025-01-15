<script lang="ts">
	import HeroImage from '$lib/assets/book-cover.png';
	import RogelioSicat from '$lib/assets/rogelio-sicat.png?enhanced';
	import StoryCard from '@/components/story-card.svelte';
	import WrittenWorksCarousel from '@/components/written-works-carousel.svelte';
	import { stories } from '@/data';
	import ChevronDown from 'lucide-svelte/icons/chevron-down';
</script>

<svelte:head>
	<title>TalasTasan</title>
</svelte:head>

<!-- Hero Section -->
<section
	class="relative flex h-screen flex-col items-center justify-center bg-cover bg-center text-white"
	style="background-image: url({HeroImage});"
>
	<div
		class="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/70 to-transparent"
	></div>
	<div class="z-10 space-y-6 text-center">
		<h1 class="text-5xl font-bold tracking-wide">TalasTasan</h1>
		<p class="mx-auto max-w-2xl text-lg font-light">
			Paglinang ng kasanayan sa pagbasa. Pagpapalawak ng bokabularyo.
		</p>
		<a href="#details" class="mt-6 inline-block">
			<ChevronDown class="h-8 w-8 animate-bounce" />
		</a>
	</div>
</section>

<!-- Details Section -->
<section id="details" class="bg-surface-100 py-32">
	<div class="space-y-8 px-6 text-center md:px-20 lg:px-40">
		<h3 class="text-3xl font-semibold text-surface-content">
			Buksan ang isipan, palawakin ang kaalaman.
		</h3>
		<p class="text-lg text-surface-content/80">
			Ang TalasTasan ay naglalaman ng mga akdang pampanitikan na kapaki-pakinabang sa mga guro at
			mag-aaral upang mapalawak ang kasanayan sa pagbasa at bokabularyo sa Filipino.
		</p>
	</div>
</section>

<!-- Author Section -->
<section class="bg-white py-32">
	<div class="container mx-auto px-6 md:px-20 lg:px-40">
		<h2 class="mb-16 text-center text-4xl font-bold text-secondary">Ang Awtor</h2>
		<div class="grid grid-cols-1 gap-16 md:grid-cols-5">
			<div class="md:col-span-2">
				<enhanced:img src={RogelioSicat} alt="Rogelio Sikat" class="rounded-lg shadow-lg" />
			</div>
			<div class="space-y-6 md:col-span-3">
				<h3 class="text-3xl font-semibold text-secondary/90">Rogelio R. Sikat</h3>
				<div class="space-y-4 text-base text-secondary/80">
					<p>
						Si Rogelio Sikat ay isang Pilipinong manunulat ng piksyon, mandudula, tagasalinwika, at
						tagapagturo. Anak siya nina Estanislao Sikat at Crisanta Rodriguez, at isinilang noong
						Hunyo 26, 1940, sa Alua, San Isidro, Nueva Ecija, Pilipinas. Panganay sa walong
						magkakapatid, nagtapos siya ng Batsilyer ng Panitikan sa Pamamahayag sa Pamantasan ng
						Santo Tomas at nagtamo rin ng MA sa Filipino mula sa Unibersidad ng Pilipinas.
					</p>

					<p>
						Kinilala si Rogelio Sikat sa kanyang mga kontribusyon sa panitikan, kabilang na ang
						pagkapanalo ng maraming premyo. Pinakatanyag niya ang dulang Moses, Moses, na nagkamit
						ng Palanca Award noong 1962 sa Filipino. Marami rin sa kanyang mga akda ay inilathala sa
						magasing Liwayway. Ang kanyang kahalagahan bilang manunulat ay binigyang-diin sa
						sanaysay na Living and Dying as a Writer ni Lilia Quindoza-Santiago, na lumabas sa Pen &
						Ink III.
					</p>

					<p>
						Naging propesor si Rogelio Sikat at nagsilbi bilang dekano ng Kolehiyo ng Sining at mga
						Titik sa Unibersidad ng Pilipinas-Diliman mula 1991 hanggang 1994. Ang kanyang akdang
						Tata Selo ay naging inspirasyon para sa pelikulang Munting Lupa ni Angelito Tiongson,
						habang ang direktor na si Aureaus Solito ay gumawa ng maikling pelikula batay sa kanyang
						kuwento na Impeng Negro noong 1999. Kahit pumanaw na noong 1998, pinarangalan siya ng
						Manila Critics Circle ng National Book Award para sa pagsasalinwika.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Published Works -->
<section class="bg-surface-100 py-32">
	<div class="mb-16 text-center">
		<h2 class="text-4xl font-bold text-surface-content">Nailathalang Akda</h2>
	</div>
	<div class="container mx-auto w-fit px-6">
		<WrittenWorksCarousel />
	</div>
</section>

<!-- Other Stories -->
<section class="bg-white py-32">
	<div class="mb-16 text-center">
		<h2 class="text-4xl font-bold text-surface-content">Iba Pang Nilalaman</h2>
	</div>
	<div class="container mx-auto grid gap-8 px-6 md:grid-cols-2 lg:grid-cols-3">
		{#each stories as { title, description, image, link }}
			<StoryCard {title} {description} {image} href={link} />
		{/each}
	</div>
</section>
