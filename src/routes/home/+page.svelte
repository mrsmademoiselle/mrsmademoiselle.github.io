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
		@apply flex flex-col mx-8;
	}
	.header {
		@apply my-4 text-2xl font-bold border-b-[1px] border-default-dark pb-2 w-fit mb-4;
		@apply dark:border-default-light;
	}
	.card-container {
		@apply grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-2;
	}
</style>
