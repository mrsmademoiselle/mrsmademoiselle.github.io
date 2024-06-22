<script lang="ts">
</script>

<section class="contact">
	<p class="contact-description">You can find me here:</p>
	<div class="links">
		<a href="https://linkedin.com" class="link"><span class="icon mdi--linkedin"></span></a>
		<a href="https://instagram.com" class="link"><span class="icon mdi--instagram"></span></a>
		<a href="https://twitter.com" class="link"><span class="icon mdi--twitter"></span></a>
		<a href="https://github.com" class="link"><span class="icon mdi--github"></span></a>
	</div>
</section>

<style lang="postcss">
	.contact {
		@apply text-center items-center flex flex-col h-[calc(80vh-53px)] justify-center;
	}
	.contact-description {
		@apply text-3xl my-12;
	}
	.contact .links .link .icon {
		@apply iconify text-6xl;
	}
	.link {
		@apply hover:text-sky-500;
	}
</style>
