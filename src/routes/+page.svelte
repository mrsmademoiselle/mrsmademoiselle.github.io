<script lang="ts">
	import { onMount } from 'svelte';
	import CardCarousel from '$lib/components/CardCarousel.svelte';
	import { fade } from 'svelte/transition';
	import { projectsToCardContent } from '$lib/data/project';
	import { allProjects } from '$lib/data/projects';
	import type { CardContent } from '$lib/data/types';

	let showScrollButton = true;
	let cardContent: CardContent[] = [];

	const handleScroll = () => {
		showScrollButton = window.scrollY < 200;
	};

	onMount(() => {
		cardContent = projectsToCardContent(allProjects, 3);

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	const scrollToContent = () => {
		window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
	};
</script>

<section class="intro-section">
	<h1 class="intro-text">
		Hi.
		<div>I am mrsmademoiselle.</div>
	</h1>

	<div class="intro-subtext">
		<span class="px-2">/*</span>
		Software Engineer, Front End & App Developer.
		<span class="px-2">*/</span>
	</div>
	{#if showScrollButton}
		<button
			class="scroll-button iconify mdi--chevron-down"
			on:click={scrollToContent}
			in:fade={{ duration: 350 }}
			out:fade={{ duration: 350 }}
		/>
	{/if}
</section>

<section class="project-section">
	<h2 class="header">Projects</h2>
	<p class="section-subtext">Have a look at some of my projects!</p>

	<CardCarousel {cardContent} />
</section>

<style lang="postcss">
	.intro-section {
		@apply flex flex-col items-center justify-center h-[calc(100vh-53px)];
	}

	.intro-text {
		@apply text-8xl font-bold text-center;
	}

	.intro-subtext {
		@apply text-2xl mt-4;
	}

	.section-subtext {
		@apply text-xl mt-4;
	}

	.scroll-button {
		@apply absolute bottom-10 text-6xl cursor-pointer animate-bounce;
		@apply transition-transform duration-500;
	}

	.project-section {
		@apply flex flex-col mx-16 mt-24;
	}

	.header {
		@apply my-4 text-4xl font-bold border-b-[2px] border-default-dark pb-2 w-fit;
		@apply dark:border-default-light;
	}
</style>
