<script lang="ts">
	import type { Expertise } from '$lib/data/types';
	import { fly } from 'svelte/transition';
	import { expertise } from './expertise';

	let selectedExpertise: Expertise = expertise[0];

	function selectHexagon(category: string) {
		if (selectedExpertise.category === category) return;

		const expertiseObject = expertise.find((value) => value.category === category);

		if (expertiseObject) selectedExpertise = expertiseObject;
	}
</script>

<section class="expertise">
	<section class="hexagon-section">
		{#each expertise as { category, color }}
			<div
				class="hexagon-container {selectedExpertise.category === category
					? `border-b-4 border-${color}`
					: ''} "
			>
				<button class={`hexagon bg-${color}`} on:click={() => selectHexagon(category)}>
					<span>{category}</span>
				</button>
			</div>
		{/each}
	</section>

	{#key selectedExpertise}
		<div class="skills" transition:fly={{ x: 500, duration: 500, y: 0 }}>
			{#each selectedExpertise.skills as skill}
				<div class="skill-pill bg-{selectedExpertise.color}">
					{skill}
				</div>
			{/each}
		</div>
	{/key}
</section>

<style lang="postcss">
	.expertise {
		@apply flex flex-col space-x-4 items-center justify-center;
	}
	.hexagon-section {
		@apply flex gap-8 items-center justify-center;
	}

	.hexagon-container {
		@apply pb-4;
	}
	.hexagon {
		@apply w-[150px] h-[150px] flex justify-center text-default-light dark:text-default-dark items-center text-center font-bold p-4 scale-100 hover:scale-[1.10] ease-in duration-100;
		clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
	}

	.skills {
		@apply my-12 gap-2 flex;
	}
	.skill-pill {
		@apply inline-block px-3 py-1 rounded-full text-white text-lg font-medium mr-2 mb-2 scale-100 hover:scale-[1.10];
		@apply transition-transform duration-150 ease-in-out;
	}
</style>
