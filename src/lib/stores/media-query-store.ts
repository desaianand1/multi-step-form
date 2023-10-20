import { readable } from 'svelte/store';

type MediaType = 'mobile' | 'tablet' | 'desktop';

const media = {
	mobile: '(max-width: 768px)',
	tablet: '(min-width: 769px) and (max-width: 1439px)',
	desktop: '(min-width: 1440px)'
};

// refer source: https://svelte.dev/repl/b3b617f683cb4d3f85aa0270c2bf673e?version=3.46.4
export function queryMediaType(query: MediaType) {
	// when running on the server, fallback to false. Consequent code will only run on client-side
	if (typeof window === 'undefined') {
		return readable<boolean>(false);
	}

	const matcher = window.matchMedia(media[query]);

	return readable<boolean>(matcher.matches, function start(set) {
		const update = (m: MediaQueryListEvent) => set(m.matches);
		matcher.addEventListener('change', update);
		return function stop() {
			matcher.removeEventListener('change', update);
		};
	});
}
