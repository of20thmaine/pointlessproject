<script lang="ts">
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import "$lib/styles/style.css";
</script>

<Header />
<article>
    <slot />
</article>
<Footer />

<style>
    article {
        font-family: 'Lora', 'Garamond', serif;
    }
</style>
