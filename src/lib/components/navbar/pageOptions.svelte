<script lang="ts" context="module">
    import Home from "../pages/home.svelte";
    import Projects from "../pages/projects.svelte";
    import Workflow from "../pages/workflow.svelte";
    
    

    export const navOptions = [
        { page: "Home"      ,icon: "/assets/icons/home.png",iconOrigin:"https://www.flaticon.com/free-icons/home-button"  , pageComponent: Home},
        { page: "Projects"  ,icon: "/assets/icons/project.png",iconOrigin:"https://www.flaticon.com/free-icons/project"      , pageComponent: Projects},
        { page: "Workflow"  ,icon: "/assets/icons/planning.png",iconOrigin:"https://www.flaticon.com/free-icons/workflow"     , pageComponent: Workflow}//,
    ];
</script>