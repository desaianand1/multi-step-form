<script lang="ts">
	import { step } from '$lib/stores/step-store';
	$: currentStep = step;
</script>

<form name="form-step-{$currentStep}" method="post" class="w-full md:aspect-[16/10] md:max-w-5xl">
	<slot />
</form>
