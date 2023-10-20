<script lang="ts" context="module">
	export interface Step {
		title: string;
		number: number;
	}
</script>

<script lang="ts">
	import { steps as stepsData } from '$lib/data/steps.json';
	import { step } from '$lib/stores/step-store';
	import StepIndicator from './step-indicator.svelte';

	const steps: Step[] = stepsData;
	const currentStep = $step;
</script>

<div class='relative flex flex-row z-0 gap-4 my-10 md:flex-col md:absolute md:top-0'>
	{#each steps as step (step.number)}
		<StepIndicator isActiveStep={currentStep === step.number} stepNumber={step.number} />
	{/each}
</div>
