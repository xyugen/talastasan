<script lang="ts">
	import { Button, Menu, MenuItem, Toggle } from 'svelte-ux';
	import ChevronDown from 'lucide-svelte/icons/chevron-down';
	import MenuIcon from 'lucide-svelte/icons/menu';
	import Close from 'lucide-svelte/icons/x';
	import { navLinks } from '@/data';
	import { Drawer } from 'svelte-ux';

	let drawerOpen = false;
</script>

<!-- Mobile -->
<div class="flex flex-row items-center md:hidden">
	<Button on:click={() => (drawerOpen = true)}>
		<MenuIcon />
	</Button>

	<Drawer bind:open={drawerOpen} placement="right" class="w-[60%] bg-secondary">
		<div class="flex items-center justify-end">
			<Button on:click={() => (drawerOpen = false)}>
				<Close class="text-secondary-content" />
			</Button>
		</div>
		<div class="flex flex-col items-start gap-2 p-2 text-secondary-content">
			{#each navLinks as navLink}
				{#if navLink.items}
					<Toggle let:on={open} let:toggle let:toggleOff>
						<Button on:click={toggle}>
							Buong Kuwento
							<ChevronDown />
							<Menu {open} on:close={toggleOff} matchWidth>
								<div class="bg-secondary/90 text-secondary-content">
									{#each navLink.items as { title, link }}
										<a href={navLink.link + link}>
											<MenuItem on:click={() => (drawerOpen = false)}>
												{title}
											</MenuItem>
										</a>
									{/each}
								</div>
							</Menu>
						</Button>
					</Toggle>
				{:else if navLink.link}
					<Button href={navLink.link}>{navLink.title}</Button>
				{/if}
			{/each}
		</div>
	</Drawer>
</div>

<!-- Desktop -->
<nav class="hidden flex-row items-center md:flex">
	{#each navLinks as navLink}
		{#if navLink.items && navLink.items.length > 0}
			<Toggle let:on={open} let:toggle let:toggleOff>
				<Button on:click={toggle}>
					Buong Kuwento
					<ChevronDown />
					<Menu {open} on:close={toggleOff} matchWidth>
						<div class="bg-secondary/90 text-secondary-content">
							{#each navLink.items as { title, link }}
								<a href={navLink.link + link} class="size-full">
									<MenuItem>
										{title}
									</MenuItem>
								</a>
							{/each}
						</div>
					</Menu>
				</Button>
			</Toggle>
		{:else if navLink.link}
			<Button href={navLink.link}>{navLink.title}</Button>
		{/if}
	{/each}
</nav>
