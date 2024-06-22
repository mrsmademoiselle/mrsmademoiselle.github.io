import type { CardContent, Project } from './types';

export function projectsToCardContent(
	allProjects: Project[],
	amount: number = allProjects.length - 1
) {
	const cardContents: CardContent[] = [];
	const ps = allProjects.slice(0, amount);

	ps.forEach((project) => {
		const content: CardContent = {
			title: project.title,
			description: project.description,
			image: { path: project.coverImage.path, alt: project.coverImage.alt }
		};
		if (project.id) content.href = `/projects/${project.id}`;

		cardContents.push(content);
	});

	return cardContents;
}
