import type { ColorCodes } from "$lib/types/Color.types"
import type { Path } from "$lib/types/Path.types"

export interface IStyling {
    width:number,              // Measured in VW
    minimum_width?: number,    // Measured in pixels
    height:number,             // Measured in VH
    minimum_height?: number,   // Measured in pixels
    edge_radius?: number,      // Measured in pixels
    display?:string

    background?: {
        data: ColorCodes | Path
    }
    text?: {
        data: ColorCodes
    }

    border?: {
        size: number,         // Measured in pixels
        style: string,
        color:string,
    }

    padding?: number |
    {
        top?: number,          // Measured in pixels          
        bottom?: number,         // Measured in pixels
        left?: number,         // Measured in pixels
        right?: number,        // Measured in pixels
    }

    margin?: number |
    {
        top?: number,          // Measured in pixels
        bottom?: number,         // Measured in pixels
        left?: number,         // Measured in pixels
        right?: number,        // Measured in pixels
    }

    animation?: {
        width?: boolean;
        height?: boolean;
        opacity?: boolean;
    }
}

export function ProcessIStylingToCSS(styling : IStyling) : string {
    let CSSrules : string= "";
    function addSingleRule(property : string, value : string | number | boolean | undefined, datatype : string = '') {
        CSSrules += value !== undefined ? `${property}: ${value}${datatype};` : '';
    }
    
    

    if (styling.background !== undefined) {
        let data : ColorCodes | Path  = styling.background.data;
        if (data.includes("path")) {
            CSSrules += `background-image: ${data.replace("path:", "")}`
        }
        addSingleRule("background-color", data);
    }

    if (styling.text !== undefined) {
        let data : ColorCodes  = styling.text.data;
        addSingleRule("color", data);
    }


    if (styling.border !== undefined) {
        let color_data = styling.border.color;
        let size_data = styling.border.size;
        let style_data = styling.border.style;
    
        addSingleRule("border-color", color_data);
        addSingleRule("border-width", size_data, 'px');
        addSingleRule("border-style", style_data);
    }


    if (styling.padding !== undefined) {
        let Data : number | {top?: number, right ?: number, bottom?: number, left?: number} = styling.padding;
        if (typeof(Data) === 'object') {
            if (Data.left !== undefined) {
                addSingleRule("padding-left", Data.left, 'vw');
            }
            if (Data.right !== undefined) {
                addSingleRule("padding-right", Data.right, 'vw');
            }
            if (Data.top !== undefined) {
                addSingleRule("padding-top", Data.top, 'vh');
            }
            if (Data.bottom !== undefined) {
                addSingleRule("padding-bottom", Data.bottom, 'vh');
            }
        } else {
            addSingleRule("padding", Data, 'rem');
        }
    }


    if (styling.margin !== undefined) {
        let Data : number | {top?: number, right ?: number, bottom?: number, left?: number} = styling.margin;
        if (typeof(Data) === 'object') {
            if (Data.left !== undefined) {
                addSingleRule("margin-left", Data.left, 'vw');
            }
            if (Data.right !== undefined) {
                addSingleRule("margin-right", Data.right, 'vw');
            }
            if (Data.top !== undefined) {
                addSingleRule("margin-top", Data.top, 'vh');
            }
            if (Data.bottom !== undefined) {
                addSingleRule("margin-bottom", Data.bottom, 'vh');
            }
        } else {
            addSingleRule("margin", Data, 'rem');
        }
    }

    if (styling.animation !== undefined) {
        let values : string = "";
        if (styling.animation?.height) {
            values += "height,"
        }
        if (styling.animation?.width) {
            values += "width,"
        }
        if (styling.animation?.opacity) {
            values += "opacity,"
        }
        addSingleRule("transition", values, " 0.5s");
    }
    
    
    //addSingleRule("width", styling.width, 'vw');
    //addSingleRule("height", styling.height, 'vh');
    //addSingleRule("min-height", styling.minimum_height, 'px');
    //addSingleRule("min-width", styling.minimum_width, 'px');
    addSingleRule("border-radius", styling.edge_radius, 'px');

    

    return CSSrules;
}