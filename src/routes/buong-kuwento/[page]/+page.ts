import type { PageLoad } from './$types';
import { fullStoryChapters } from '@/data';

export const load: PageLoad = ({ params }) => {
	if (params.page) {
		const index = fullStoryChapters.findIndex((chapter) => chapter.link.includes(params.page));

		if (index !== -1) {
			const chapter = fullStoryChapters[index];
			const nextChapter = fullStoryChapters[index + 1] || null; // Get the next chapter if it exists
			const previousChapter = fullStoryChapters[index - 1] || null; // Get the previous chapter if it exists

			return {
				chapter,
				next: nextChapter,
				previous: previousChapter
			};
		}
	}

	// Return an empty object if no chapter matches
	return {};
};