import { auth } from '$db/fakeAuth';
import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

async function logger({ event, resolve }) {
	const start_time = Date.now();
	const request = event.request;
	const response = await resolve(event);

	// console.log(`${Date.now() - start_time}ms  ${request.method} ${event.url.pathname}`);

	return response;
}

function authorize({ event, resolve }) {
	const user = auth();

	event.locals.user = user;
	event.locals.this_is_just_a_test = 'test';
	event.cookies.set('test', 'test', '/');

	return resolve(event);
}

/* export async function handle({ event, resolve }) {
  // console.log('event: ', event);

  const user = auth();
	event.locals.user = user;
	event.locals.this_is_just_a_test = 'test';
	event.cookies.set('test', 'test');

  return resolve(event);
} */

// Intercepting Fetch
export const handleFetch: Handle = async function ({ request, fetch }) {
	return fetch(request);
}

// Intercept Errors
export function handleError({ error, event }) {
	// logger(error, event)
	return {
		message: 'Oops, im intercepting in a hook',
		code: error.code
	};
}

export const handle: Handle = sequence(logger, authorize);
