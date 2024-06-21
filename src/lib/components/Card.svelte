<script lang="ts">
	export let title: string;
	export let description: string;
	export let image: string;
	export let href: string | undefined = undefined;
</script>

<section class="card group" class:cursor-pointer={href}>
	<svelte:element this={href ? 'a' : 'div'} {href}>
		<div class="content">{description}</div>
		<div class="banner">{title}</div>
	</svelte:element>
</section>

<style lang="postcss">
	.card {
		@apply relative max-w-[300px] rounded-lg px-4 py-4 border-[0.5px] border-gray-300 hover:outline-sky-700 hover:outline hover:outline-2;
		@apply dark:bg-transparent dark:border-gray-700;
	}

	.content {
		@apply w-full h-full scale-100 group-hover:scale-[1.02] ease-in duration-150;
	}

	.banner {
		@apply absolute bottom-0 left-0 bg-gray-300 w-full max-h-[30%] p-4 text-center text-xl rounded-b-lg;
		@apply dark:bg-gray-800 dark:text-default-light;
	}
</style>
