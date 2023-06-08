<script lang="ts">
    import type { PageServerData } from './$types';
    import PostCard from "$lib/components/PostCard.svelte";

    export let data: PageServerData;
</script>

<svelte:head>
    <title>Pointless Project</title>
    <meta name="description" content="The site about nothing."/>
    <meta name="og:title" content="Pointless Project"/>
    <meta name="og:description" content="The site about nothing."/>
</svelte:head>

<div class="posts p-med">
    {#each data.posts as post}
        <PostCard
            url={post.slug}
            post={post}
        />
    {/each}
</div>

<style>
    .posts {
        padding: 2.0rem 1.0rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        row-gap: 1.0rem;
        column-gap: 1.0rem;
    }

    @media only screen and (max-width: 500px) {
        .posts {
            padding: 1.0rem;
            display: grid;
            grid-template-columns: 1fr;
        }
    }
</style>
