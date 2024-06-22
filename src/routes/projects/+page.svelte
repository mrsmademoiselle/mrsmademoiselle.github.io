<script lang="ts">
	import CardCarousel from '$lib/components/CardCarousel.svelte';
	import { projectsToCardContent } from '$lib/data/project';
	import { allProjects } from '$lib/data/projects';
	import type { CardContent } from '$lib/data/types';
	import { onMount } from 'svelte';

	let cardContent: CardContent[] = [];

	onMount(() => {
		cardContent = projectsToCardContent(allProjects);
	});
</script>

<CardCarousel {cardContent} />
