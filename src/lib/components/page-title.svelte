<script lang="ts">
	import type { StoryChapter } from "../../interface/StoryChapter";

	export let title: string;
	export let chapter: StoryChapter | undefined = undefined;
</script>

<div class="space-y-2 bg-secondary px-8 py-8 text-secondary-content md:px-[10%]">
	<h1 class="text-center text-3xl font-medium">{title}</h1>
	{#if chapter}
		<p class="text-center">
			{chapter.title}
		</p>
	{/if}
</div>
