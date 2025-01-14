<script>
	import '../app.css';
	import Logo from '$lib/assets/logo.png';
	import { Button, Menu, MenuItem, Toggle } from 'svelte-ux';
	let { children } = $props();
</script>

<svelte:head>
	<title>TalasTasan</title>
</svelte:head>

<header class="bg bg-secondary text-primary-content flex flex-row items-center justify-between p-4">
	<a href="/" class="flex w-fit flex-row items-center gap-2">
		<img src={Logo} alt="logo" class="w-12" />
		<h1 class="text-lg font-bold">TalasTasan</h1>
	</a>

	<nav class="flex flex-row items-center gap-4">
		<a href="/" class="btn btn-ghost">Home</a>
		<Toggle let:on={open} let:toggle let:toggleOff>
			<Button on:click={toggle}>
				Click me
				<Menu {open} on:close={toggleOff}>
					<MenuItem>Refresh</MenuItem>
					<MenuItem>Settings</MenuItem>
					<MenuItem>Help</MenuItem>
					<MenuItem>Sign In</MenuItem>
					<MenuItem disabled>Disabled</MenuItem>
				</Menu>
			</Button>
		</Toggle>

		<a href="/" class="btn btn-ghost">Home</a>
		<a href="/about" class="btn btn-ghost">About</a>
	</nav>
</header>

<main>
	{@render children()}
</main>
