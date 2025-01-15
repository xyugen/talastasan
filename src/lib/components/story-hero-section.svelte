<script lang="ts">
	export let imageCover: string;
</script>

<div
	class="relative flex h-96 flex-col items-center justify-center bg-cover bg-no-repeat text-surface-100"
	style="background-image: url({imageCover}); background-position: center;"
>
	<div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/40"></div>
	<div class="z-10 space-y-4 text-center">
		<h1 class="text-7xl font-medium">Impeng Negro</h1>
		<p>Ni Rogelio Sikat</p>
	</div>
</div>
