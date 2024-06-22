import type { Expertise } from '$lib/data/types';

export const expertise: Expertise[] = [
	{
		category: 'Frontend Development',
		color: 'blue-700',
		skills: ['JavaScript', 'Frameworks (React, Vue, Angular)', 'HTML5 & CSS3', 'Responsive Design']
	},
	{
		category: 'Backend Development',
		color: 'green-700',
		skills: ['Node.js & Express.js', 'Python & Django', 'Ruby on Rails', 'RESTful APIs & GraphQL']
	},
	{
		category: 'Database Management',
		color: 'purple-700',
		skills: [
			'SQL (MySQL, PostgreSQL)',
			'NoSQL (MongoDB, Firebase)',
			'Database Design',
			'ORM (Sequelize, Mongoose)'
		]
	},
	{
		category: 'Version Control & DevOps',
		color: 'indigo-700',
		skills: [
			'Git & Version Control Systems',
			'CI/CD (Jenkins, Travis CI)',
			'Containerization (Docker, Kubernetes)',
			'Cloud Platforms (AWS, Azure, GCP)'
		]
	},
	{
		category: 'Testing & Debugging',
		color: 'blue-600',
		skills: [
			'Unit Testing & Test Automation',
			'Integration Testing',
			'Debugging Tools (Chrome DevTools, Postman)',
			'Error Monitoring (Sentry, Rollbar)'
		]
	},
	{
		category: 'Other Skills',
		color: 'green-600',
		skills: [
			'Agile Methodologies',
			'UI/UX Design Principles',
			'Performance Optimization',
			'Security Best Practices'
		]
	}
];
