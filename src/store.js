import { writable } from 'svelte/store';
import { navOptions } from './lib/components/navbar/pageOptions.svelte';

/// Creating a page swap data current session
function createPageSwaps(T) {
    const { subscribe, set, update } = writable(T);

    return {
        subscribe,
        increment: () => update(c => c + 1),
        reset: () => set(0)
    }
}

///page stores
export const pageSwaps = createPageSwaps(0);
export const pageId = writable(0);
export const activePage = writable( navOptions[0]);