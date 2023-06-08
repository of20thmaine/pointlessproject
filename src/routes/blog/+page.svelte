<script lang="ts">
    import type { PageServerData } from './$types';

    export let data: PageServerData;
</script>

<svelte:head>
    <title>Post List - Pointless Project</title>
    <meta name="description" content="The site about nothing."/>
    <meta name="og:title" content="Pointless Project Posts List"/>
    <meta name="og:description" content="The site about nothing."/>
</svelte:head>

<div class="p-narrow">
    <h1>Post List</h1>
    <ol class="posts">
        {#each data.posts as post, i}
            <a href={"blog/" + post.slug}>
                <li class="postLink">{post.title}</li>
            </a>
        {/each}
    </ol>
</div>

<style>
    h1 {
        margin: 2.0rem 0;
    }

    .postLink {
        color: var(--text-color);
        font-size: 1.3rem;
        margin-bottom: 1.0rem;
        text-decoration: underline;
    }

    .posts a {
        text-decoration: none;
    }
</style>
