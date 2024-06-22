/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	return {
		projectId: params.projectId
	};
}
export const prerender = false;
