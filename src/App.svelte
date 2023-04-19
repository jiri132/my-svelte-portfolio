<script lang="ts">
  import Navbar from "./lib/components/navbar/navbar.svelte";
  import Content from "./lib/components/content/content.svelte";

</script>

<main>
  <Navbar />
  <Content />
</main>

<style lang="scss">
  main {
    display: flex;
    flex-direction: column;
  }
</style>
