import type { IStyling } from "$lib/interfaces/Styling.interface"
import type { directions } from "../Stack/Stack.directions.enum"
import type { ScreenOptions } from "./Screen.options.interface"
import type { ScreenType } from "./Screen.type.enum"





export interface ScreenSettings {
    ScreenControls? : {
        Type:ScreenType,    // The type that the screen corresponds to
        Abstract:boolean,    // Does the position need to be abstract from everything else
    },

    Content : {
        title :string,             // The main text shown big onto the screen when the screen opens
        route?:string,              // The title his route where it goes to
        description? :string,       // The description that you get when you see the screen
        direction? : directions     // The direction options are going
        options? :ScreenOptions[],  // The options that you could get wen this window opens
    }

    Styling : IStyling;
};

