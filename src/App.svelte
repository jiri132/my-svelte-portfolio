<script lang="ts">
  import Navbar from "./lib/components/navbar/navbar.svelte";
  import Content from "./lib/components/content/content.svelte";
  import Coekies from "./lib/components/cookie/Coekies.pop-up.component.svelte";

</script>

<Coekies title="Website Cookies" description="This website uses cookies to look how much you enjoy the time on this website and to track records of how many times you have visited the site to help us improve our site. Get a free cookie on the house" />

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
