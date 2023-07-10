<script lang="ts">
    import logoDark from "$lib/img/logo/pointlessproject_dark.png?run&width=600&lqip=0";
    import logoLight from "$lib/img/logo/pointlessproject_light.png?run&width=600&lqip=0";
    import Img from '@zerodevx/svelte-img';
    import { onMount } from "svelte";

    let darkModeState = false;

    onMount(() => {
        if (window.CSS && CSS.supports("color", "var(--background-color)")) {
            darkModeSetup();
        } else {
            document.getElementById("darkModeToggle")!.style.display = "none";
        }
    });

    /**
     * Run on component mount to set up event handling for the dark mode
     * toggle whilst checking what mode should be on already.
     */
    function darkModeSetup() {
        const switcher =  document.getElementById("darkModeToggle");
        const useDark = window.matchMedia("(prefers-color-scheme: dark)");

        darkModeState = localStorage.getItem("color-mode") === "dark" ||
				(useDark.matches && !localStorage.getItem("color-mode"));

        function toggleDarkMode(state: any) {
            if (state) {
                document.documentElement.setAttribute("color-mode", "dark");
                localStorage.setItem("color-mode", "dark");
            } else {
                document.documentElement.setAttribute("color-mode", "light");
                localStorage.setItem("color-mode", "light");
            }
        }

        useDark.addEventListener("change", (e) => {
            toggleDarkMode(e.matches);
        });

        toggleDarkMode(darkModeState);

        function switchListener() {
            darkModeState = !darkModeState;
            toggleDarkMode(darkModeState);
        }

        switcher?.addEventListener("click", switchListener);
    }
</script>

<div class="headerContainer">
    <div class="header p-big ">
        <div class="g1">
            <a href="/" class="logoContainer">
                {#if darkModeState}
                    <Img src={logoDark} class="logo" alt="Pointless Project" loading="eager" width={600} height={213}/>
                {:else}
                    <Img src={logoLight} class="logo" alt="Pointless Project" loading="eager" width={600} height={213}/>
                {/if}
            </a>
        </div>
        <div class="g2">
            <nav>
                <ul>
                    <li><a href="/blog">All Posts</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
            </nav>
        </div>
        <div class="g3">
            <div class="navBtns">
                <a href="https://www.threads.net/@bobby.palmer" class="navBtn" title="Threads">
                    <svg class="navSVG" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192">
                        <path class="x19hqcy" d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 45.7381 153.317C35.2355 139.966 29.8077 120.682 29.6052 96C29.8077 71.3178 35.2355 52.0336 45.7381 38.6827C56.9538 24.4249 74.2039 17.11 97.0132 16.9405C119.988 17.1113 137.539 24.4614 149.184 38.788C154.894 45.8136 159.199 54.6488 162.037 64.9503L178.184 60.6422C174.744 47.9622 169.331 37.0357 161.965 27.974C147.036 9.60668 125.202 0.195148 97.0695 0H96.9569C68.8816 0.19447 47.2921 9.6418 32.7883 28.0793C19.8819 44.4864 13.2244 67.3157 13.0007 95.9325L13 96L13.0007 96.0675C13.2244 124.684 19.8819 147.514 32.7883 163.921C47.2921 182.358 68.8816 191.806 96.9569 192H97.0695C122.03 191.827 139.624 185.292 154.118 170.811C173.081 151.866 172.51 128.119 166.26 113.541C161.776 103.087 153.227 94.5962 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z" />
                    </svg>
                </a>
                <a href="https://www.instagram.com/bobby.palmer/" class="navBtn" title="Instagram">
                    <svg class="navSVG" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                    </svg>
                </a>
                <a href="mailto: bobby.palmer@outlook.com" class="navBtn" title="Email">
                    <svg class="navSVG" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M440 6.5L24 246.4c-34.4 19.9-31.1 70.8 5.7 85.9L144 379.6V464c0 46.4 59.2 65.5 86.6 28.6l43.8-59.1 111.9 46.2c5.9 2.4 12.1 3.6 18.3 3.6 8.2 0 16.3-2.1 23.6-6.2 12.8-7.2 21.6-20 23.9-34.5l59.4-387.2c6.1-40.1-36.9-68.8-71.5-48.9zM192 464v-64.6l36.6 15.1L192 464zm212.6-28.7l-153.8-63.5L391 169.5c10.7-15.5-9.5-33.5-23.7-21.2L155.8 332.6 48 288 464 48l-59.4 387.3z"/>
                    </svg>
                </a>
                <div class="navBtn" id="darkModeToggle" title="Toggle Dark/Light Modes">
                    <svg class="navSVG" id="darkModeSVG" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" stroke-width="1" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <path data-name="layer2"
                            d="M36.4 20.4a16 16 0 1 0 16 16 16 16 0 0 0-16-16zm0 28a12 12 0 0 1-10.3-5.8l2.5.3A13.7 13.7 0 0 0 42 25.8a12 12 0 0 1-5.6 22.6z"></path>
                        <path data-name="layer1"
                            d="M36.4 16.4a2 2 0 0 0 2-2v-8a2 2 0 1 0-4 0v8a2 2 0 0 0 2 2zm-20 20a2 2 0 0 0-2-2h-8a2 2 0 0 0 0 4h8a2 2 0 0 0 2-2zm3-14.1a2 2 0 0 0 2.8-2.8l-5.7-5.7a2 2 0 0 0-2.8 2.8zM59 13.8a2 2 0 0 0-2.8 0l-5.7 5.7a2 2 0 1 0 2.8 2.8l5.7-5.7a2 2 0 0 0 0-2.8zM19.4 50.5l-5.7 5.7a2 2 0 1 0 2.9 2.8l5.7-5.7a2 2 0 1 0-2.8-2.8z">
                        </path>
                    </svg>
                </div>
            </div>
        </div>
        <div class="g4 siteDescription">The site about nothing.</div>
    </div>
</div>

<style>
    .headerContainer {
        width: 100%;
        border-bottom: 3px solid var(--headerBorderColor);
    }

    .header {
        font-family: 'Fredoka', 'Arial', 'Verdana', sans-serif;
        font-weight: 500;
        padding: 2.0rem 3.0rem;
        color: var(--text-color);
        display: grid;
        grid-template-columns: 1fr max-content;
        grid-template-areas:
            "g1 g2"
            "g1 g3"
            "g1 g4";
    }

    .g1 {
        grid-area: g1;
        align-self: center;
    }

    .g2 {
        grid-area: g2;
        align-self: center;
    }

    .g3 {
        grid-area: g3;
        align-self: center;
    }

    .g4 {
        grid-area: g4;
        align-self: start;
    }

    .logoContainer {
        display: block;
        max-width: 440px;
        height: auto;
    }

    nav {
        margin-left: auto;
        width: fit-content;
        font-size: 1.6rem;
    }

    .navBtns {
        margin-left: auto;
        width: fit-content;
        padding: 0.4rem 0;
    }

    .siteDescription {
        text-align: right;
        font-size: 1.6rem;
    }

    .header a {
        color: var(--text-color);
        text-decoration: none;
    }

    nav ul {
        list-style: none;
    }

    nav ul li {
        border-bottom: 4px solid var(--headerBorderColor);
        margin-bottom: 0.25rem;
        padding: 0 2px;
    }

    nav ul li:hover {
        border-bottom: 4px solid var(--text-color);
    }

    .navBtn {
        position: relative;
        display: inline-block;
        cursor: pointer;
        border: 2px solid transparent;
        border-radius: 50%;
        background-color: transparent;
        height: 38px;
        width: 38px;
    }

    .navSVG {
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        padding: 2px;
    }

    .navSVG path {
        fill: var(--logoMain);
    }

    .navBtn:hover .navSVG path {
        fill: var(--logoSecondary);
    }

    #darkModeSVG path {
        fill: var(--logoSecondary);
        stroke: var(--logoSecondary);
    }

    #darkModeToggle:hover {
        background-color: var(--logoMain);
    }

    @media only screen and (max-width: 800px) {
        .header {
            padding: 1.5rem 2.0rem;
        }

        .logoContainer {
            max-width: 440px;
        }

        nav {
            font-size: 1.5rem;
        }

        .siteDescription {
            font-size: 1.5rem;
        }
    }

    @media only screen and (max-width: 742px) {
        .header {
            padding: 1.25rem 1.5rem;
        }

        .logoContainer {
            max-width: 380px;
        }

        .siteDescription {
            font-size: 1.3rem;
        }
    }

    @media only screen and (max-width: 636px) {
        .header {
            padding: 1.25rem 1.25rem 1.0rem 1.25rem;
            grid-template-areas:
                "g1 g2"
                "g1 g3"
                "g4 g4";
        }

        .logoContainer {
            max-width: 320px;
        }

        .g3 {
            grid-area: g3;
            justify-self: center;
            align-self: center;
        }

        .siteDescription {
            text-align: center;
        }
    }

    @media only screen and (max-width: 536px) {
        .header {
            grid-template-areas:
                "g1 g2"
                "g3 g3"
                "g4 g4";
        }

        .logoContainer {
            max-width: 240px;
        }

        nav {
            font-size: 1.4rem;
        }
    }

    @media only screen and (max-width: 400px) {
        .logoContainer {
            max-width: 220px;
        }
    }

    @media only screen and (max-width: 375px) {
        .logoContainer {
            max-width: 200px;
        }

        nav {
            font-size: 1.3rem;
        }
    }

    @media only screen and (max-width: 339px) {
        nav {
            margin-left: 8px;
            font-size: 1.2rem;
        }
    }
</style>
