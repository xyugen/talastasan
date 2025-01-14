<script lang="ts">
	import { Button, Menu, MenuItem, Toggle } from 'svelte-ux';
	import ChevronDown from 'lucide-svelte/icons/chevron-down';
	import { navLinks } from '@/data';
</script>

<nav class="hidden flex-row items-center md:flex">
	{#each navLinks as navLink}
		{#if navLink.link}
			<Button href={navLink.link}>{navLink.title}</Button>
		{:else if navLink.items}
			<Toggle let:on={open} let:toggle let:toggleOff>
				<Button on:click={toggle}>
					Buong Kuwento
					<ChevronDown />
					<Menu {open} on:close={toggleOff} matchWidth>
						<div class="bg-secondary/90 text-secondary-content">
							{#each navLink.items as { title, link }}
								<MenuItem {link}>{title}</MenuItem>
							{/each}
						</div>
					</Menu>
				</Button>
			</Toggle>
		{/if}
	{/each}
</nav>
