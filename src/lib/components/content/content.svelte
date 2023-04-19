<script lang="ts">
    import { navOptions } from "../navbar/pageOptions.svelte";
    import { activePage } from "../../../store";
  
    let component : {page : string,icon : string, iconOrigin : string ,pageComponent} = navOptions[0];
  
    activePage.subscribe(newPage => {
      component = newPage;
    });
</script>

<div class="margin-s-t">
    <svelte:component this={component.pageComponent} />
</div>