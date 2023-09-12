<script lang="ts">
    import type { location } from "./location.interface";


    export let locations : location[];

</script>

<div>
    {#each locations as location}
        {location.street_name} {location.street_number} <br>
        {location.postal_code} {location.city}<br><br>
    {/each}
</div>

<style lang="scss">

</style>