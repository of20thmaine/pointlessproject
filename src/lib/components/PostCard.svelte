<script lang="ts">
    import * as postcards from "$lib/scripts/postcardimages";
    import Img from '@zerodevx/svelte-img';

    export let url: string;
    export let post: Post;

    // @ts-ignore
    let cardImg = postcards[post.imgKey];
</script>

<a href={"blog/" + url}>
    <div class="card">
        <Img src={cardImg} class="postcardImg" alt={post.title}/>
        <div class="cardText">
            <div class="title">{post.title}</div>
            <div class="description">{post.description}</div>
        </div>
    </div>
</a>

<style>
    a {
        text-decoration: none;
        color: var(--text-color);
    }

    .card {
        max-width: 400px;
        margin: 0 auto;
    }

    .cardText {
        text-align: center;
        font-size: 1.1rem;
        padding: 0.5rem;
    }

    .title {
        font-size: 1.5rem;
        font-weight: 700;
    }

    .description {
        padding: 0 0.25rem;
    }
</style>