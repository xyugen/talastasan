<script lang="ts">
	import { Button, Menu, MenuItem, Toggle } from 'svelte-ux';
	import ChevronDown from 'lucide-svelte/icons/chevron-down';
	import { fullStoryChapters } from '@/data';
</script>

<nav class="hidden flex-row items-center md:flex">
	<Button href="/">Home</Button>
	<Toggle let:on={open} let:toggle let:toggleOff>
		<Button on:click={toggle}>
			Buong Kuwento
			<ChevronDown />
			<Menu {open} on:close={toggleOff} matchWidth>
				<div class="bg-secondary/90 text-secondary-content">
					{#each fullStoryChapters as { title, link }}
						<MenuItem {link}>{title}</MenuItem>
					{/each}
				</div>
			</Menu>
		</Button>
	</Toggle>
	<Button href="/buod">Buod</Button>
	<Button href="/kuwentong-may-larawan">Kuwentong May Larawan</Button>
	<Button href="/about">About</Button>
</nav>
