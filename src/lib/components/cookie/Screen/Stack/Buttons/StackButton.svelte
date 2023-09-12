<script lang="ts">
    import type { ScreenOptions } from "../../Screen.options.interface";
    import { directions } from "../Stack.directions.enum";

    // Get the direction that the flex box should follow
    export let direction : directions = directions.row;
    export let buttons : ScreenOptions[];
    export let closeFUNC : () => void;
    // Flex Direction [fd]
    const fd : string = `flex-direction:${direction}` 
</script>

<div class="stack" style="{fd}">
    {#each buttons as btn}
    <button style="z-index: 4; margin: 1rem; background-color:{btn.color}" on:click={() => {
        closeFUNC();
    }}>
        {btn.name}
    </button>
    {/each}
</div>

<style lang="scss">

    .stack {
        display: flex;
        row-gap: 10px;
        button {
            color: rgb(209, 209, 209);
        }
    }

</style>