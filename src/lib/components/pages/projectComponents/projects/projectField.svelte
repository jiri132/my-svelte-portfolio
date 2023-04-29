<script lang="ts">
  import loadLinkIcons from "./icons.link";
  import loadLangIcons from "./icon.lang";
    import { onMount } from "svelte/internal";
    import ProjectCard from "./projectCard.svelte";
    import { projects, projectList } from "./projects";
    import type { Project } from "./project";

    loadLinkIcons();
    loadLangIcons();
    $: project = <Array<Project>>[];

    function getProjects() : void {
        let p : Project[] = [];

        for (let i = 0; i < projectList.length; i++) {
            const _project : Project = projects[projectList[i]];

            p.push(_project);
        }
        project = p;
        console.log(project);
    }


    onMount(() => {
        getProjects();
    });

</script>

<section class="projects">
    <div class="title">Projects & Contributions</div>
    {#each project as project}
      <ProjectCard repo={project} />
    {/each} 
  </section>
<style lang="scss">
.projects {
  padding: 0px 16px;
  margin-top: 100px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.title {
  position: relative;
  width: 100%;
  text-align: center;
  font-family: IBM Plex Mono, monospace;
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 16px;
  color: #ddd;
}
</style>