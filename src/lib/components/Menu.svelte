<script lang="ts">
	import ThemeToggle from './ThemeToggle.svelte';
</script>

<section class="menu">
	<a href="/home">Home</a>
	<a href="/about">About me</a>
	<a href="/projects">Projects & Contributions</a>
	<ThemeToggle />
</section>

<style lang="postcss">
	.menu {
		@apply w-full flex gap-12 justify-center p-2 border-b-[0.5px];
		@apply bg-white text-default-dark border-gray-300;
		@apply dark:bg-black dark:text-default-light dark:border-gray-700 items-center;
	}

	.menu > * {
		@apply hover:bg-zinc-200 no-underline uppercase  px-2 py-1 rounded;
		@apply dark:hover:bg-gray-900;
	}
</style>
