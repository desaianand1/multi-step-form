import { writable } from 'svelte/store';

const INITIAL_STEP = 1;
const FINAL_STEP = 4;
export const step = writable<number>(INITIAL_STEP);

export function advanceStep() {
	step.update((step) => {
		if (step + 1 > FINAL_STEP) {
			return step;
		}
		return step + 1;
	});
}

export function resetSteps() {
	step.set(INITIAL_STEP);
}

export function revertStep() {
	step.update((step) => {
		if (step - 1 < INITIAL_STEP) {
			return step;
		}
		return step - 1;
	});
}
