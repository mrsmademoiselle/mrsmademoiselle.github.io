<script lang="ts">
	import ThemeToggle from './ThemeToggle.svelte';
</script>

<section class="menu">
	<a href="/">Home</a>
	<a href="/about">About me</a>
	<a href="/projects">Projects & Contributions</a>
	<a href="/contact">Contact</a>

	<ThemeToggle />
</section>

<style lang="postcss">
	.menu {
		@apply sticky top-0 w-full flex gap-12 justify-center p-4 border-b-[0.5px];
		@apply bg-white text-default-dark border-gray-300;
		@apply dark:bg-black dark:text-default-light dark:border-gray-700 items-center;
	}

	.menu > * {
		@apply hover:bg-zinc-200 no-underline uppercase text-xl px-2 py-1 rounded;
		@apply dark:hover:bg-gray-800;
	}
</style>
