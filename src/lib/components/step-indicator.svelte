<script lang="ts">
	export let isActiveStep: boolean;
	export let stepNumber: number;
</script>

<div
	class="flex h-8 w-8 md:w-10 md:h-10 items-center justify-center rounded-full border border-magnolia bg-transparent"
	class:active={isActiveStep}
>
	<span class="text-sm md:text-base font-semibold text-magnolia" class:active={isActiveStep}>{stepNumber}</span
	>
</div>

<style lang="postcss">
	div.active {
		@apply border-light-blue bg-light-blue;
	}

	span.active {
		@apply text-marine-blue;
	}
</style>
