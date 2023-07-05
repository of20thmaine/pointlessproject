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
    <div class="postList">
        <h1>Post List</h1>
        <ul class="posts">
            {#each data.posts as post, i}
                <li class="postLink"><a href={"blog/" + post.slug}>{post.title}</a></li>
            {/each}
        </ul>
    </div>
</div>

<style>
    .postList {
        margin: 0 1.0rem 2.0rem 1.0rem;
    }

    h1 {
        margin: 2.0rem 0;
        font-size: 2.0rem;
    }

    ul li {
        list-style-position: inside;
    }

    .postLink {
        color: var(--text-color);
        font-size: 1.3rem;
        margin-bottom: 1.0rem;
    }

    .posts a {
        color: var(--text-color);
    }

    @media only screen and (max-width: 420px) {
        h1 {
            font-size: 1.5rem;
        }

        .postLink {
            font-size: 1.1rem;
        }
    }
</style>
