<script>
	import { allProjects } from '$lib/data/projects';
	import Card from '$lib/components/Card.svelte';
	import CardCarousel from '$lib/components/CardCarousel.svelte';

	const projects = allProjects;
</script>

<section class="home-page">
	<h2 class="header">Projects</h2>

	<CardCarousel />
</section>

<style lang="postcss">
	.home-page {
		@apply flex flex-col mx-8;
	}
	.header {
		@apply my-4 text-2xl font-bold border-b-[1px] border-default-dark pb-2 w-fit mb-4;
		@apply dark:border-default-light;
	}
</style>
