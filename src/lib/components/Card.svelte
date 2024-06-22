<script lang="ts">
	export let title: string;
	export let image: string;
	export let href: string | undefined = undefined;
	export let alt: string;
</script>

<section class="card group" class:cursor-pointer={href}>
	<svelte:element this={href ? 'a' : 'div'} {href} class="link">
		<div class="image-container">
			<img src={image} {alt} class="image" />
		</div>
		<div class="banner">{title}</div>
	</svelte:element>
</section>

<style lang="postcss">
	.card {
		@apply max-w-[500] rounded-lg border-b-8 border-transparent hover:border-sky-500 overflow-hidden;
		@apply dark:bg-transparent;
	}

	.link {
		@apply flex flex-col justify-between flex-1 h-full;
	}

	.image-container {
		@apply w-full h-48 overflow-hidden;
	}

	.image {
		@apply w-full h-full object-cover scale-100 group-hover:scale-[1.07] ease-in duration-150;
	}

	.banner {
		@apply bg-gray-200 w-full p-4 text-center text-2xl rounded-b-lg group-hover:rounded-b-none mt-auto group-hover:text-sky-500 font-semibold;
		@apply dark:bg-slate-800 dark:text-default-light;
	}
</style>
