<script lang="ts" module>
	interface StoryCardProps {
		title: string;
		description: string;
		image: any;
		href: string;
	}
</script>

<script lang="ts">
	export let title: StoryCardProps['title'];
	export let description: StoryCardProps['description'];
	export let image: StoryCardProps['image'];
	export let href: StoryCardProps['href'];
</script>

<div
	class="border-primary/30 group relative overflow-hidden rounded-lg border bg-white transition-transform hover:-translate-y-1"
>
	<a {href}>
		<div class="relative aspect-video overflow-hidden">
			<enhanced:img
				src={image}
				alt={title}
				class="object-cover transition-transform group-hover:scale-100"
			/>
		</div>
		<div class="p-6">
			<h3 class="mb-3 text-xl font-semibold text-[#2D2522]">{title}</h3>
			<p class="text-gray-600">{description}</p>
		</div>
	</a>
</div>
