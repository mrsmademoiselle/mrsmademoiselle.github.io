<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import type { CardContent } from '$lib/data/types';

	export let cardContent: CardContent[];
</script>

<section class="flex flex-col w-full h-full">
	<div class="card-container">
		{#each cardContent as card}
			<Card title={card.title} image={card.image.path} alt={card.image.alt} href={card.href} />
		{/each}
	</div>
</section>

<style lang="postcss">
	.card-container {
		@apply relative grid grid-cols-[repeat(auto-fill,minmax(300px,_1fr))] gap-4 my-12;
	}
</style>
