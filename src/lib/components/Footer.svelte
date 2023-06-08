<script lang="ts">
    let year = new Date().getFullYear();
</script>

<footer>
    <p>&#169; {year}</p>
</footer>

<style>
    footer {
        margin-top: 1rem;
        border-top: 3px solid var(--headerBorderColor);
    }

    footer p {
        text-align: center;
        font-size: 1.25rem;
        font-weight: 500;
        margin: 4rem 0;
    }
</style>
