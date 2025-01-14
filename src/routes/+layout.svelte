<script>
	import Header from '@/layout/header.svelte';
	import '../app.css';
	import Footer from '@/layout/footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<title>TalasTasan</title>
</svelte:head>

<Header />

<main>
	{@render children()}
</main>

<Footer />
