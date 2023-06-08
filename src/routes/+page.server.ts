import type { PageServerLoad } from './$types';
import { posts } from '$lib/scripts/posts';

export const load: PageServerLoad = async () => {
    return {
        posts
    };
};
