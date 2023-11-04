<script>
	// assets:
	import mobileSidebar from '$lib/images/bg-sidebar-mobile.svg';
	import desktopSidebar from '$lib/images/bg-sidebar-desktop.svg';
	// components:
	import StepCollection from '$lib/components/step-collection.svelte';
</script>

<div class="relative h-48 w-full md:h-full">
	<img
		src={desktopSidebar}
		alt="desktop sidebar bg"
		class="absolute hidden h-full w-full rounded-xl object-cover md:block"
	/>
	<img
		src={mobileSidebar}
		alt="mobile sidebar bg"
		class="absolute block h-full w-full object-cover md:hidden"
	/>
	<div class="relative flex flex-col items-center gap-8 md:block">
		<StepCollection />
		<slot />
	</div>
</div>
