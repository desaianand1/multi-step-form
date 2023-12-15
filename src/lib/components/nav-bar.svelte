<script lang="ts">
	import {
		step,
		advanceStep,
		revertStep,
		FINAL_STEP,
		INITIAL_STEP
	} from '$lib/stores/step-store';
	import { fade } from 'svelte/transition';

	$: currentStep = $step;
	$: isFinalStep = currentStep === FINAL_STEP;
	$: isInitialStep = currentStep === INITIAL_STEP;
	$: ctaText = isFinalStep ? 'Confirm' : 'Next Step';
	$: confirmClass = isFinalStep ? 'bg-purplish-blue hover:bg-purplish-blue/60' : '';
</script>

<nav
	class="absolute bottom-0 flex h-20 w-full items-center justify-between bg-white px-5 md:relative md:px-0"
	class:justify-btn-end={isInitialStep}
>
	{#if !isInitialStep}
		<button
			name="go-back"
			type="button"
			transition:fade
			on:click={revertStep}
			class="text-base bg-transparent rounded-md py-3 font-medium capitalize text-cool-gray transition-colors hover:text-marine-blue md:text-lg"
		>
			Go Back
		</button>
	{/if}

	<button
		name="next-step"
		type="button"
		on:click={advanceStep}
		class="text-base w-28 rounded-md bg-marine-blue py-3 font-medium capitalize text-alabaster transition-colors hover:bg-[#174a8b] md:w-32 md:text-lg {confirmClass}"
	>
		{ctaText}
	</button>
</nav>

<style lang="postcss">
	.justify-btn-end {
		justify-content: flex-end;
	}
</style>
