<script lang="ts">
	import { Button, Menu, MenuItem, Toggle } from 'svelte-ux';
	import ChevronDown from 'lucide-svelte/icons/chevron-down';
	import MenuIcon from 'lucide-svelte/icons/menu';
	import Close from 'lucide-svelte/icons/x';
	import { navLinks } from '@/data';
	import { Drawer } from 'svelte-ux';

	let open = false;
</script>

<div class="flex flex-row items-center md:hidden">
	<Button on:click={() => (open = true)}>
		<MenuIcon />
	</Button>

	<Drawer bind:open placement="right" class="w-[60%] bg-secondary">
		<div class="flex items-center justify-end">
			<Button on:click={() => (open = false)}>
				<Close class="text-secondary-content" />
			</Button>
		</div>
		<div class="space-y-2 p-2 text-secondary-content">
			{#each navLinks as navLink}
				{#if navLink.items}
					<Toggle let:on={open} let:toggle let:toggleOff>
						<Button on:click={toggle}>
							Buong Kuwento
							<ChevronDown />
							<Menu {open} on:close={toggleOff} matchWidth>
								<div class="bg-secondary/90 text-secondary-content">
									{#each navLink.items as { title, link }}
										<MenuItem on:click={toggleOff}>
											<a href={navLink.link + link} class="w-full">
												{title}
											</a>
										</MenuItem>
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
								<MenuItem>
									<a href={navLink.link + link} class="w-full">
										{title}
									</a>
								</MenuItem>
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
