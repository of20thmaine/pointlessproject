<script lang="ts">
    import * as headers from "$lib/scripts/headerimages";
    import Img from '@zerodevx/svelte-img';
    import type { PageData } from './$types';
    
    export let data: PageData;

    // @ts-ignore
    let postImg = headers[data.post.imgKey];
</script>

<svelte:head>
    <title>{data.post.title}</title>
    <meta name="description" content={data.post.description}/>
</svelte:head>

<div class="articleHeader p-narrow">
    <div class="articleTitle">{data.post.title}</div>
    <div class="articleAuthor">By <a href="../about">Bobby Palmer</a></div>
</div>

<div class="p-med">
    <Img src={postImg} alt={data.post.title} class="headerImg"/>
</div>

<div class="p-narrow">
    <svelte:component this={data.component} />
</div>

<style>
    .articleHeader {
        margin-top: 2.0rem;
        padding: 0 1.0rem;
    }

    .articleTitle {
        font-size: 2.6rem;
        font-weight: 600;
    }

    .articleAuthor {
        margin-top: 0.5rem;
        font-size: 1.4rem;
    }

    .articleAuthor:hover {
        text-decoration: underline;
    }

    .articleAuthor a {
        text-decoration: none;
    }

    .articleAuthor a {
        color: var(--text-color);
    }

    @media only screen and (max-width: 742px) {
        .articleTitle {
            font-size: 2.4rem;
        }

        .articleAuthor {
            font-size: 1.2rem;
        }
    }

    @media only screen and (max-width: 636px) {
        .articleTitle {
            font-size: 2.0rem;
        }

        .articleAuthor {
            font-size: 1.2rem;
        }
    }
</style>
