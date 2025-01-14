<script lang="ts">
	import Logo from '@/assets/logo.png?enhanced';
	import NavMenu from '@/components/nav-menu.svelte';
	import { onMount } from 'svelte';

	let isScrolled = $state(false);

	onMount(() => {
		const handleScroll = () => {
			isScrolled = window.scrollY > 0;
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<header
	class="bg-secondary text-primary-content fixed z-50 flex w-full flex-row items-center justify-between p-4 transition-all duration-150"
	style="--tw-bg-opacity: {isScrolled ? 1 : 0}"
>
	<a href="/" class="flex w-fit flex-row items-center gap-2">
		<enhanced:img src={Logo} alt="logo" class="w-12" />
		<h1 class="text-lg font-bold">TalasTasan</h1>
	</a>

	<NavMenu />
</header>
