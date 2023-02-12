import { error, redirect } from "@sveltejs/kit";

export async function load({ fetch, params, parent, setHeaders, locals }) {
	// const parentData = await parent();
	// console.log('locals: ', locals);

	if (!locals?.user?.id) {
		throw redirect(307, '/');
	}

	const res = await fetch(`https://syntax.fm/api/shows/${params.num}`);
	const data = await res.json();

	if (data.message) {
		throw error(404, {
			message: data.message
		});
	}

	setHeaders({
		'Cache-Control': 'max-age=60'
	});
	
  return {
		episode: data
	};
}
