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

<section
	class="relative flex h-screen flex-col items-center justify-center object-scale-down text-white"
>
	<div
		class="absolute inset-0 bg-cover bg-fixed bg-no-repeat"
		style="background-image: url({HeroImage}); background-position: center; "
	></div>
	<div
		class="absolute inset-0 bg-gradient-to-t from-gray-800/70 via-gray-800/60 to-gray-800/55 opacity-60"
	></div>
	<div class="z-10 space-y-4 text-center">
		<h1 class="text-center text-5xl font-medium">TalasTasan</h1>
		<p class="text-lg font-medium">
			Paglinang ng kasanayan sa pagbasa. Pagpapalawak ng bokabularyo.
		</p>
	</div>

	<a href="#details" class="absolute bottom-10">
		<ChevronDown />
	</a>
</section>

<section id="details" class="py-44">
	<div class="bg-accent flex flex-col px-[5%] py-20 text-white sm:px-[10%] md:px-[20%]">
		<div class="space-y-4 text-center">
			<h3 class="text-center text-3xl">Buksan ang isipan, palawakin ang kalaaman.</h3>
			<p>
				Ang TalasTasan ay isang mungkahing website na naglalaman ng mga akdang pampanitikan na
				magsisilbing isang kapaki-pakinabang na kagamitang pampagtuturo at pagkatuto para sa mga
				guro at mag-aaral upang higit pang mapalawak ang kanilang kasanayan sa pagbasa at mapalawak
				ang kanilang bokabularyo sa Filipino.
			</p>
		</div>
	</div>

	<h2 class="text-secondary my-12 text-center text-5xl font-medium">Awtor</h2>

	<div class="bg-accent grid grid-cols-1 gap-8 px-[5%] py-8 text-white md:grid-cols-5 md:px-[10%]">
		<div class="col-span-2">
			<enhanced:img src={RogelioSicat} alt="Rogelio Sikat" class="w-full" />
		</div>
		<div class="col-span-3 space-y-8">
			<h2 class="text-secondary w-full text-6xl font-bold">Rogelio R. Sikat</h2>
			<p class="text-lg font-medium">&ldquo;Rogelio Sicat&rdquo;</p>
			<div class="text-secondary space-y-4 text-base">
				<p>
					Si Rogelio Sikat ay isang Pilipinong manunulat ng piksyon, mandudula, tagasalinwika, at
					tagapagturo. Anak siya nina Estanislao Sikat at Crisanta Rodriguez, at isinilang noong
					Hunyo 26, 1940, sa Alua, San Isidro, Nueva Ecija, Pilipinas. Panganay sa walong
					magkakapatid, nagtapos siya ng Batsilyer ng Panitikan sa Pamamahayag sa Pamantasan ng
					Santo Tomas at nagtamo rin ng MA sa Filipino mula sa Unibersidad ng Pilipinas.
				</p>

				<p>
					Kinilala si Rogelio Sikat sa kanyang mga kontribusyon sa panitikan, kabilang na ang
					pagkapanalo ng maraming premyo. Pinakatanyag niya ang dulang Moses, Moses, na nagkamit ng
					Palanca Award noong 1962 sa Filipino. Marami rin sa kanyang mga akda ay inilathala sa
					magasing Liwayway. Ang kanyang kahalagahan bilang manunulat ay binigyang-diin sa sanaysay
					na Living and Dying as a Writer ni Lilia Quindoza-Santiago, na lumabas sa Pen & Ink III.
				</p>

				<p>
					Naging propesor si Rogelio Sikat at nagsilbi bilang dekano ng Kolehiyo ng Sining at mga
					Titik sa Unibersidad ng Pilipinas-Diliman mula 1991 hanggang 1994. Ang kanyang akdang Tata
					Selo ay naging inspirasyon para sa pelikulang Munting Lupa ni Angelito Tiongson, habang
					ang direktor na si Aureaus Solito ay gumawa ng maikling pelikula batay sa kanyang kuwento
					na Impeng Negro noong 1999. Kahit pumanaw na noong 1998, pinarangalan siya ng Manila
					Critics Circle ng National Book Award para sa pagsasalinwika.
				</p>
			</div>
		</div>
	</div>

	<h2 class="my-12 text-center text-5xl font-medium text-[#695b4e]">Nailathalang Akda</h2>

	<div class="bg-accent flex justify-center px-8 py-8 text-white sm:px-16">
		<WrittenWorksCarousel />
	</div>

	<h2 class="my-12 text-center text-5xl font-medium text-[#695b4e]">Iba pang nilalaman</h2>

	<div class="px-8 md:px-[10%] grid gap-8 md:grid-cols-2 lg:grid-cols-3">
		{#each stories as { title, description, image, link }}
			<StoryCard {title} {description} {image} href={link} />
		{/each}
	</div>
</section>
