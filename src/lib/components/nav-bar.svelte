<script lang="ts">
	import {
		step,
		advanceStep,
		revertStep,
		FINAL_STEP,
		INITIAL_STEP
	} from '$lib/stores/step-store';

	$: currentStep = $step;
	$: isFinalStep = currentStep === FINAL_STEP;
	$: isInitialStep = currentStep === INITIAL_STEP;
	$: ctaText = isFinalStep ? 'Confirm' : 'Next Step';
	$: confirmClass = isFinalStep
		? 'bg-purplish-blue hover:bg-purplish-blue/60'
		: 'bg-marine-blue-hover';
</script>

<nav
	class="absolute bottom-0 flex h-20 w-full items-center justify-between bg-white px-4 md:relative md:px-0"
	class:justify-btn-end={isInitialStep}
>
	<button
		name="go-back"
		on:click={revertStep}
		class="md:text-md bg-transparent py-3 text-sm font-medium capitalize text-cool-gray hover:text-marine-blue"
		class:hidden={isInitialStep}
	>
		Go Back
	</button>

	<button
		name="next-step"
		on:click={advanceStep}
		class="md:text-md w-28 rounded-md bg-marine-blue py-3 text-sm font-medium capitalize text-alabaster {confirmClass}"
	>
		{ctaText}
	</button>
</nav>

<style lang="postcss">
	.justify-btn-end {
		justify-content: flex-end;
	}

	.bg-marine-blue-hover:hover {
		background-color: #174a8b;
	}
</style>
