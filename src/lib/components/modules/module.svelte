<script lang="ts">
	// data:
	import { modules } from '$lib/data/modules';
	// stores:
	import { step } from '$lib/stores/step-store';
	$:currentModule = modules[$step-1];
</script>

<div class="flex w-full flex-col gap-4 bg-red-500">
	<header class="flex flex-col gap-1">
		<h1 class="text-2xl font-bold text-marine-blue md:text-4xl">{currentModule.title}</h1>
		<p class="text-sm font-normal text-cool-gray md:text-lg">{currentModule.description}</p>
	</header>
	{currentModule.renderableComponent}
</div>
