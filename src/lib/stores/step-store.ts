import { writable } from "svelte/store";

const DEFAULT_STEP = 1;
export const step = writable<number>(DEFAULT_STEP);