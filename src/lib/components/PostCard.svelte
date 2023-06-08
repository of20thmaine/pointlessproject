<script lang="ts">
    export let url: string;
    export let post: Post;
</script>

<a href={"blog/" + url}>
    <div class="card">
        <img class="cardImg" src={"img/posts/postcards/" + post.imgPath} alt={post.title} width="400" height="300">
        <div class="cardText">
            <div class="title">{post.title}</div>
            <div class="description">{post.metaDescription}</div>
        </div>
    </div>
</a>

<style>
    a {
        text-decoration: none;
        color: var(--text-color);
    }

    .cardImg {
        height: auto;
        width: 100%; 
        border-radius: 8px;
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