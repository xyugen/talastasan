import { shortenedStory } from '@/data';
import type { PageLoad } from './$types';
export const load: PageLoad = () => {
	return {
		shortenedStory
	};
};
