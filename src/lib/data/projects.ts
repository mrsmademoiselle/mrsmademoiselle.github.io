import type { Project } from './types';

export const allProjects: Project[] = [
	{
		title: 'Project 1',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		technologies: ['Svelte', 'TypeScript'],
		coverImage: { path: 'src/assets/images/website1.png', alt: 'some alt text' },
		images: [],
		id: '1'
	},
	{
		title: 'Project 2',
		description:
			'Lacus viverra vitae congue eu consequat ac felis donec. Elementum nibh tellus molestie nunc non. Rhoncus mattis rhoncus urna neque. Vivamus arcu felis bibendum ut. Ut eu sem integer vitae justo eget magna fermentum iaculis. Eu facilisis sed odio morbi. Fringilla urna porttitor rhoncus dolor purus non enim praesent.',
		technologies: ['Svelte', 'TypeScript'],
		coverImage: { path: 'src/assets/images/website2.jpg', alt: 'some alt text' },
		images: [],
		id: '2'
	},
	{
		title: 'Project 13',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		technologies: ['Svelte', 'TypeScript'],
		coverImage: { path: 'src/assets/images/website1.png', alt: 'some alt text' },
		images: []
	},
	{
		title: 'Project 4',
		description:
			'Lacus viverra vitae congue eu consequat ac felis donec. Elementum nibh tellus molestie nunc non. Rhoncus mattis rhoncus urna neque. Vivamus arcu felis bibendum ut. Ut eu sem integer vitae justo eget magna fermentum iaculis. Eu facilisis sed odio morbi. Fringilla urna porttitor rhoncus dolor purus non enim praesent.',
		technologies: ['Svelte', 'TypeScript'],
		coverImage: { path: 'src/assets/images/website2.jpg', alt: 'some alt text' },
		images: []
	}
];
