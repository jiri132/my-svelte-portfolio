import type { ColorCodes } from "$lib/types/Color.types";

export interface ScreenOptions {
    name : string,
    route?: string,
    function? : string,
    color? : ColorCodes,
};