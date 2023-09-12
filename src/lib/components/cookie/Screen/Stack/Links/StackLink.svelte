<script lang="ts">
    import type { ScreenOptions } from "../../Screen.options.interface";
    import { directions } from "../Stack.directions.enum";

    // Get the direction that the flex box should follow
    export let direction : directions = directions.row;
    export let links : ScreenOptions[];
    export let bold : boolean = true;

    // Flex Direction [fd]
    const fd : string = `flex-direction:${direction}` 
</script>

<div class="stack" style="{fd}">
    {#each links as link}
        <a style="background-color:{link.color}; {bold ? "font-weight:bold;" : "font-weight:normal; font-size:normal;"}" href={link.route}>
            {link.name}
        </a>
    {/each}
</div>

<style lang="scss"> 
    .stack {
        display: flex;
        row-gap: 10px;

        a {
            font-weight: bold;
            font-size:large;
            color: white;
            background-color: rgba(0,0,0,0.15);
            text-decoration: none;
            // font-size: 1rem;
            padding: 1rem;
            // border: 2px solid rgb(43, 43, 43);
            // border-radius: 10px;
            /* transition: 0.5s;  */
            /* transition-timing-function: cubic-bezier(0.42, 0, 1, 1);  */
        }
    }

</style>