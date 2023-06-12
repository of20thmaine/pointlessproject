<script lang="ts">
    import aboutImg from "$lib/img/author/author.png?run&width=400&lqip=0";
    import Img from '@zerodevx/svelte-img';
</script>

<div class="p-narrow">
    <!-- <img class="authorImg" src="/img/author/author.png" alt="Bobby" width="400" height="400"> -->
    <Img src={aboutImg} class="authorImg" alt="Bobby" />

    <h1>About</h1>
    <p>
        Hi y'all, I'm Bobby, the Pointless Project Guy. For an accounting of what this site is all about
        and why I created it, check out <a href="blog/hello-world">post 0</a>! 
    </p>
    <p>
        In other news, I am currently seeking gainful employment, so if you or anybody you know are
        looking for a software engineer to hire, <a href="https://www.bobbypalmer.dev/">check out my portfolio</a>!
    </p>
</div>

<style>
    h1 {
        margin: 2.0rem;
    }

    /* .authorImg {
        float: right;
        width: 40%;
        height: auto;
        border-radius: 50%;
        padding: 1.5rem;
    } */

    p a {
        color: var(--text-color);
    }
</style>
