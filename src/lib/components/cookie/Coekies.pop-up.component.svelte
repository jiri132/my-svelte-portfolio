<script lang="ts">
    import Screen from "./Screen/Screen.component.svelte";
    import { ProcessIStylingToCSS, type IStyling } from "./Screen/Styling.interface";
    import type { ScreenSettings } from "./Screen/Screen.interface";
    import { ScreenType } from "./Screen/Screen.type.enum";

    export let title :string = "Website Cookies";
    export let description: string = "This website uses cookies to look how much you enjoy the time on this website and to track records of how many times you have visited the site to help us improve our site.";


    let settings : ScreenSettings = {
        ScreenControls : {
            Type: ScreenType.Bottom,     // The type that the screen corresponds to
            Abstract:true,                  // Does the position need to be abstract from everything else
        },

        Content : {
            title :title,                   // The main text shown big onto the screen when the screen opens
            description :description,       // The description that you get when you see the screen
            route: "/coekies.html",                     // The route that you get when you click on the button
            options : [{name:"accept all", function: "close()", color: "#008000"}, {name: "accept necessary", function: "close()"}],     // The options that you could get wen this window opens
        },

        Styling : {
            width: 60,
            minimum_width: 200,
            height: 36,
            edge_radius: 20,

            margin: {
                top: 10,
                left: 20
            },

            animation: {
                // width: true,
                height:true,
            }
        }
    }

</script>


<Screen screenSetting={settings}/>