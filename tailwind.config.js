import { addIconSelectors } from '@iconify/tailwind';

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'selector',
	theme: {
		extend: {
			colors: {
				'default-light': '#E9E9E9',
				'default-dark': '#111314'
			}
		}
	},
	content: ['./src/**/*.{html,js,svelte,ts}'],
	plugins: [addIconSelectors(['mdi', 'mdi-light'])]
};
