<script lang="ts" context="module">
    import Contact from "../pages/contact.svelte";
    import Home from "../pages/home.svelte";
    import Projects from "../pages/projects.svelte";
    import Workflow from "../pages/workflow.svelte";
    
    

    export const navOptions = [
        { page: "Home"      ,icon: "src/assets/icons/home.png",iconOrigin:"https://www.flaticon.com/free-icons/home-button"  , pageComponent: Home},
        { page: "Projects"  ,icon: "src/assets/icons/project.png",iconOrigin:"https://www.flaticon.com/free-icons/project"      , pageComponent: Projects},
        { page: "Workflow"  ,icon: "src/assets/icons/planning.png",iconOrigin:"https://www.flaticon.com/free-icons/workflow"     , pageComponent: Workflow}//,
        //{ page: "Contact"   ,icon: "src/assets/icons/communicate.png",iconOrigin:"https://www.flaticon.com/free-icons/contact"      , pageComponent: Contact}
    ];
</script>