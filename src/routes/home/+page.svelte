<script>
	import { allProjects } from '$lib/data/projects';
	import Card from '$lib/components/Card.svelte';

	const projects = allProjects;
</script>

<section class="home-page">
	<h2 class="header">Projects</h2>

	<div class="card-container">
		{#each projects as project}
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
	.home-page {
		@apply m-4;
	}
	.header {
		@apply my-4 text-2xl;
	}
	.card-container {
		@apply grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-4;
	}
</style>
