<script lang="ts">
	import { allProjects } from '$lib/data/projects';
	import Card from '$lib/components/Card.svelte';

	const projects = allProjects;
</script>

<section class="flex flex-col w-full h-full">
	<div class="card-container">
		{#each projects.slice(0, 3) as project}
			<Card
				title={project.title}
				description={project.description}
				image={project.coverImage}
				href={project.id ? `/projects/${project.id}` : undefined}
			/>
		{/each}
	</div>
</section>

<style lang="postcss">
	.card-container {
		@apply relative grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-2;
	}
</style>
