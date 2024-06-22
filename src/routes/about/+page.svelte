<script lang="ts">
	import Expertise from '$lib/components/Expertise.svelte';
	import ExpertiseHeaxgon from '$lib/components/ExpertiseHeaxgon.svelte';
</script>

<section class="about">
	<section class="who">
		<ExpertiseHeaxgon />
	</section>
</section>

<style lang="postcss">
	.about {
		@apply flex flex-col mx-16 mt-24 gap-24;
	}
	.text {
		@apply max-w-[85%] mx-8 mr-12;
	}

	.description {
		@apply text-xl mt-4;
	}
</style>
