<script lang="ts">
	export let title: string;
	export let description: string;
	export let image: string;
	export let href: string | undefined = undefined;
</script>

<section class="card group" class:cursor-pointer={href}>
	<svelte:element this={href ? 'a' : 'div'} {href} class="link">
		<div class="content">{description}</div>
		<div class="banner">{title}</div>
	</svelte:element>
</section>

<style lang="postcss">
	.card {
		@apply relative max-w-[300px] rounded-lg border-[0.5px] border-gray-300 hover:outline-sky-700 hover:outline hover:outline-2 overflow-hidden;
		@apply dark:bg-transparent dark:border-gray-700;
	}

	.link {
		@apply flex flex-col justify-between flex-1 h-full;
	}
	.content {
		@apply w-full scale-100 group-hover:scale-105 ease-in duration-150 flex-1 py-4 px-8;
	}

	.banner {
		@apply bg-gray-300 w-full p-4 text-center text-2xl rounded-b-lg mt-auto;
		@apply dark:bg-slate-800 dark:text-default-light;
	}
</style>
