<script lang="ts">
    import { activePage, pageId,pageSwaps } from "../../../store";
    import Home from "../pages/home.svelte";
    import { navOptions } from "./pageOptions.svelte";
    import Profile from "./profile.svelte";

    const webpage = document.URL;

    let selectedID : number = 0;
    pageId.subscribe(value => {
        selectedID = value;
    });

    function storePage(elementId) {
        pageId.set(elementId);
        activePage.set(navOptions[elementId]);
        pageSwaps.increment();
    }

    function changeComponent(event) {
        storePage(event.srcElement.id);
    }

    const screenWidth : number = window.screen.width;
    let icons : boolean = false;

    if (screenWidth <= 425) {
        icons = true;
    }


</script>

<main>
    <Profile />
    <ul>
        {#each navOptions as no , i}
            <button 
            id={i.toString()} 
            class={i == selectedID ? "active" : ""}
            on:click={changeComponent} 
            >
            {#if icons}
                <img id={i.toString()} src={no.icon} alt="" sizes="512x512"><br>
                {no.page}
            {:else}
                {no.page}
            {/if}
                
            </button>
        {/each}
    </ul>
</main>

<style lang="scss">
    main {   
            // Viewing type
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

            //Margins left and right for nice positioning
        margin-left: 10%;
        margin-right:  10%;
        ul {
                // For an active element
            .active {
                border: 2px solid blue;
                opacity: 1;
            }
                // Standard buttons lay-out
            button {
                opacity: 0.6;
                margin-left: 5px;
                background-color: transparent;

                transition: opacity 0.15s ease, border-color 0.15s ease;
            }
                // Button hover override
            button:hover {
                opacity: 0.8;
            }
                // Standard Image styling
            img {
                max-width: 50px;
            }
        }
        a {
            color: rgb(255, 255, 255);
            font-size: larger;
            min-width: 7.5rem;
            width: 10%;
            margin-left: 20px;
            margin-top: 5px;
        }

        // ONLY Mobile view
        @media (max-width: 425px) {
            ul {
                button {
                    font-size: 10px;
                }
            }
        }
        // ONLY Tablet view
        @media (max-width: 768px) and (min-width: 426px) {
            ul {
                button {
                    font-size: large;
                }
            }
        }
        // Everything that needs to look like from Tablet view and down
        @media (max-width: 960px) {
            margin-left: 0%;
            margin-right:  0%;

            ul {
                    // Color and paddings with margins
                background-color: rgb(27, 27, 27);
                padding: 10px;
                margin-bottom: 0px;
                    // Scale and display type
                width: 100%;
                display: flex;
                justify-content: space-evenly;
                    // Positioning
                padding-left: 0;
                position: fixed;
                bottom: 0;
                button {
                    width: 22%;
                    img {
                        width: 80%;
                    }
                }
            }
        }
        

    }
</style>