<script lang="ts">
    import type { PageData } from './$types';

    export let data: PageData;
</script>

<svelte:head>
    <title>{data.post.title}</title>
    <meta name="description" content={data.post.metaDescription}/>
</svelte:head>

<div class="articleHeader p-narrow">
    <div class="articleTitle">{data.post.title}</div>
    <div class="articleAuthor">By <a href="../about">Bobby Palmer</a></div>
</div>

<div class="p-med">
    <img class="headerImg" src={"/img/posts/headers/" + data.post.imgPath} alt={data.post.title} width="1200" height="800">
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

    .headerImg {
        max-width: 100%;
        height: auto;
        display: block;
        margin-left: auto;
        margin-right: auto;
        margin-top: 2.0rem;
        margin-bottom: 2.0rem;
        border-radius: 8px;
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
