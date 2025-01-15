<script>
	import Footer from '@/layout/footer.svelte';
	import Header from '@/layout/header.svelte';
	import { SvelteKitTopLoader } from 'sveltekit-top-loader';
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>TalasTasan</title>
</svelte:head>

<SvelteKitTopLoader color="#dbcccb" showSpinner={false} />

<Header />

<main>
	{@render children()}
</main>

<Footer />
