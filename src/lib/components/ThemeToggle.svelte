<script lang="ts">
	import { onMount } from 'svelte';

	let darkModeOn: boolean = true;

	function toggleDarkMode() {
		darkModeOn = !darkModeOn;
		localStorage.setItem('darkMode', darkModeOn ? 'true' : 'false');

		applyTheme();
	}

	function applyTheme() {
		const html = document.querySelector('html');

		if (html) {
			if (darkModeOn) {
				html.classList.add('dark');
			} else {
				html.classList.remove('dark');
			}
		}
	}

	onMount(() => {
		const storedDarkMode = localStorage.getItem('darkMode');
		darkModeOn = storedDarkMode === 'true';
		applyTheme();
	});
</script>

<button on:click={toggleDarkMode} class="toggle">
	<span
		class="text-2xl iconify"
		class:mdi--white-balance-sunny={!darkModeOn}
		class:mdi--moon-and-stars={darkModeOn}
	/>
	<span
		class="text-4xl iconify"
		class:mdi--toggle-switch-outline={darkModeOn}
		class:mdi--toggle-switch-off-outline={!darkModeOn}
	/>
</button>

<style lang="postcss">
	.toggle {
		@apply flex items-center gap-2 hover:bg-zinc-200 rounded px-2;
		@apply dark:hover:bg-gray-900;
	}
</style>
