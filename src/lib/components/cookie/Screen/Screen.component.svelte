<script lang="ts">
    import { ProcessIStylingToCSS} from "./Styling.interface";
    import StackLink from "./Stack/Links/StackLink.svelte";
    import StackButton from "./Stack/Buttons/StackButton.svelte"
    import type { ScreenSettings } from "./Screen.interface";
    import { directions } from "./Stack/Stack.directions.enum";

    
    // The exported variable to push in all the screen settings
    export let screenSetting : ScreenSettings = {Content:{title:"input title"}, Styling:{width:0, height:0}};


    // get the inActive value from the local storage
    function isActiveFromMemory() : boolean {
        const name = screenSetting.Content.title + screenSetting.Content.description;
        const value : string | null = localStorage.getItem(name);

        // Inverted output because of wronlgy setted input 
        if (value === "true") {
            return true;
        }else { 
            return false;
        }
    }

    // Looks if the screen is inActive or not
    let inActive : boolean = isActiveFromMemory();

    

    console.log(screenSetting.Content.title + " : "  + inActive)

    // IStyling of settings translated to css
    let cssRule = ProcessIStylingToCSS(screenSetting.Styling);

    // Some basic variables
    let width : number = screenSetting.Styling.width;
    let min_width : number = screenSetting.Styling.minimum_width === undefined? 0: screenSetting.Styling.minimum_width;
    let height : number = screenSetting.Styling.height;

    if (inActive) {
        width = 0;
        height = 0;
    }

    // Effect queue
    // Applies the effects to the variables
    function EffectQueue(variables: [number,string][], values : [number,number][]) {
        variables.forEach((e,i) => {
            if (inActive) {
                variables[i][0] = values[i][1];
            }else {
                variables[i][0] = values[i][0];
            }
        });
        ApplyEffects(variables);
    }

    // Effect objects
    // Returns the variables that need to be changed
    function EffectObjects() : [number,string][] {
        let objects : [number,string][] = [];
        
        if (screenSetting.Styling.animation !== undefined) {
            if (screenSetting.Styling.animation.width) {
                objects.push([width, "width"]);
                objects.push([min_width, "min_width"]);
            }
            if (screenSetting.Styling.animation.height) {
                objects.push([height, "height"]);
            }
            if (screenSetting.Styling.animation.opacity) {
                // objects.push(opacity);
            }
        }

        return objects;
    }

    // Effect objects values
    // Returns the values that need to be changed
    function EffectObjectsValues() :[number,number][] {
        const obj : [number,string][] = EffectObjects();
        let values : [number, number][] = [];

        obj.forEach((e : [number,string],i) => {
            values.push([e[0],0]);
        });

        return values;
    }

    // Apply effects
    // Applies the effects to the variables
    function ApplyEffects(variables : [number,string][]) {
        variables.forEach((e,i) => {
            switch (e[1]) {
                case "width": 
                    width = e[0];
                    break;
                case "min_width": 
                    min_width = e[0];
                    break;
                case "height": 
                    height = e[0];
                    break;
            }
        });
    }

    function close() {
        inActive = !inActive;   
        EffectQueue(EffectObjects(),EffectObjectsValues()); 
        localStorage.setItem((screenSetting.Content.title + screenSetting.Content.description),inActive.toString());        
    }
</script>


<!-- The main visual of the screen component -->
<div 
    class="default-screen"
    style="
    z-index:10;
    {screenSetting.ScreenControls?.Abstract === true ? "position: absolute;": "position: relative;"}
    {screenSetting.ScreenControls?.Type !== 'fullscreen' ? screenSetting.ScreenControls?.Type + ":0;" : 'top:0;' + "position:fixed;" }
    width:{width}vw; 
    height:{height}vh;
    min-width:{min_width}px;
    {cssRule}
    "
> 
<!-- The content of the screen -->
    <div class="padding">
        
    <!-- Display Header or Header with link -->
        <h1>
            {#if screenSetting.Content?.route !== undefined} 
            <a href={screenSetting.Content.route}>{screenSetting.Content?.title}</a>
            {:else}
            {screenSetting.Content?.title}
            {/if}
        </h1>
            
    
    <!-- view the description -->
        {#if screenSetting.Content?.description !== undefined}
            <p>{screenSetting.Content.description}</p>
        {/if}
    </div>
    

    <!-- if there are options display them -->
        {#if screenSetting.Content?.options !== undefined}
        
        <!-- Display Links -->
            {#if screenSetting.Content.options[0].route !== undefined} 
                <StackLink links={screenSetting.Content.options} direction={directions.column}/>
        
        <!-- Display Buttons -->
            {:else} 
                <StackButton buttons={screenSetting.Content.options} closeFUNC={close}/>
            {/if}
        {/if}

        
</div> 

<style lang="scss">
    .padding {
        padding: 1rem;
    }
    .default-screen {
        z-index: 3;
        overflow-x: hidden;
        overflow-y: auto;
        transition: 0.5s;
        transition-timing-function: cubic-bezier(0.42, 0, 1, 1);
        background-color: #232323;
    }
    
    
    ::-webkit-scrollbar {
        width: 0;
    }

    /* .default-screen {
        position: absolute;
        margin: 10vw 10vh;
        padding: 1rem;
       
        width: 80vw;
        height: 50vh;
        top: 0;
        border: 2px rgb(97, 97, 97) solid;
        border-radius: 10px;
    } */
</style>