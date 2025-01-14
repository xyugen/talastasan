<script lang="ts">
	import '../app.css';
	import Logo from '$lib/assets/logo.png';
	let { children } = $props();

	let x = ["a", "b", "c"];
</script>

<svelte:head>
	<title>TalasTasan</title>
</svelte:head>

<header class="p-4 flex flex-row items-center justify-between">
	<a href="/" class="flex w-fit flex-row items-center gap-2">
		<img src={Logo} alt="logo" class="w-12" />
		<h1 class="text-lg font-bold">TalasTasan</h1>
	</a>

	<nav class="flex flex-row items-center gap-4">
		<a href="/" class="btn btn-ghost">Home</a>
		<a href="/" class="btn btn-ghost">Home</a>
		<a href="/" class="btn btn-ghost">Home</a>
		<a href="/about" class="btn btn-ghost">About</a>
	</nav>
</header>

<main>
	{@render children()}
</main>
