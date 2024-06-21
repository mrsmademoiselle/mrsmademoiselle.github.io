<script lang="ts">
	export let title: string;
	export let description: string;
	export let image: string;
	export let href: string | undefined = undefined;
</script>

<section class="card" class:cursor-pointer={href}>
	<svelte:element this={href ? 'a' : 'div'} {href}>
		<div>
			<div class="card-title">{title}</div>
			<div>{description}</div>
		</div>
	</svelte:element>
</section>

<style lang="postcss">
	.card {
		@apply max-w-[300px] bg-gray-200 rounded px-4 py-8 border-[0.5px] border-gray-300 hover:outline-sky-700 hover:outline hover:outline-2;
		@apply dark:bg-transparent  dark:border-gray-700;
	}

	.card-title {
		@apply mb-4 text-xl font-bold;
	}
</style>
