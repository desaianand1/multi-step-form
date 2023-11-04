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
	$: currentStep = $step;
</script>

<ul class="flex gap-4 pt-12 md:absolute md:top-0 md:flex-col md:gap-8 md:pt-8 md:ps-8 lg:pt-10 lg:ps-10 ">
	{#each steps as step (step.number)}
		<li class="flex items-center gap-4">
			<StepIndicator isActiveStep={currentStep === step.number} stepNumber={step.number} />
			<div class="hidden md:flex-col uppercase md:flex">
				<span class="text-xs text-pastel-blue tracking-wide">Step {step.number}</span>
				<p class="text-sm font-medium tracking-widest text-alabaster">{step.title}</p>
			</div>
		</li>
	{/each}
</ul>
