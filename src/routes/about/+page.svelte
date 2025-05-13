<script lang="ts">
    import aboutImg from "$lib/img/author/author.png?run&width=400&lqip=0";
    import Img from '@zerodevx/svelte-img';
</script>

<svelte:head>
    <title>About Pointless Project</title>
    <meta name="description" content="About Pointless Project"/>
    <meta name="og:title" content="About Pointless Project"/>
    <meta name="og:description" content="About Pointless Project"/>
</svelte:head>

<div class="p-narrow">
    <Img src={aboutImg} class="authorImg" alt="Bobby" loading="eager"/>
    <h1>About</h1>
    <p>
        Hi y'all, I'm Bobby, the Pointless Project Guy. For an accounting of what this site is all about
        and why I created it, check out <a href="blog/hello-world">post 0</a>! 
    </p>
</div>

<style>
    h1 {
        margin: 2.0rem;
    }

    p a {
        color: var(--text-color);
    }
</style>
