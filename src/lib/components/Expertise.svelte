<script lang="ts">
	import { expertise } from './expertise';
</script>

<div class="mx-auto p-6 rounded-lg">
	<h2 class="header">Expertise</h2>

	{#each expertise as { category, color, skills }}
		<div class="mb-4">
			<h3 class="subheader">{category}</h3>
			<div class="flex flex-wrap gap-2">
				{#each skills as skill}
					<span class="skill-pill bg-{color}">{skill}</span>
				{/each}
			</div>
		</div>
	{/each}
</div>

<style lang="postcss">
	.header {
		@apply my-4 text-4xl font-bold border-b-[2px] border-default-dark pb-2 w-fit;
		@apply dark:border-default-light;
	}

	.subheader {
		@apply text-2xl font-semibold mb-2;
	}

	.skill-pill {
		@apply inline-block px-3 py-1 rounded-full text-white text-lg font-medium mr-2 mb-2 scale-100 hover:scale-[1.15];
		@apply transition-transform duration-150 ease-in-out;
	}

	.bg-blue-700 {
		background-color: #2563eb;
	}
	.bg-blue-600 {
		background-color: #3b82f6;
	}
	.bg-green-700 {
		background-color: #047857;
	}
	.bg-green-600 {
		background-color: #10b981;
	}
	.bg-purple-700 {
		background-color: #5b21b6;
	}
	.bg-indigo-700 {
		background-color: #4f46e5;
	}
</style>
