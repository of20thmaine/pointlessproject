import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { posts } from '$lib/scripts/posts';

export const load: PageServerLoad = async ({ params }) => {
    const { post_url } = params;

    // get post with metadata
    const post = posts.find((post) => post_url === post.slug);

    if (!post) {
        throw error(404, 'Post not found');
    }

    return {
        post
    };
};
