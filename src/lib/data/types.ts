export interface Project {
	id?: string;
	title: string;
	description: string;
	technologies: string[];
	coverImage: Image;
	images: Image[];
}

export interface Image {
	path: string;
	alt: string;
	description?: string;
}

export interface CardContent {
	title: string;
	description: string;
	image: Image;
	href?: string;
}

export interface Expertise {
	category: string;
	color: string;
	skills: string[];
}
