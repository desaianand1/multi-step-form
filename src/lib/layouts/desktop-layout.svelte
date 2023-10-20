<script>
	// assets:
	import desktopSidebar from '$lib/images/bg-sidebar-desktop.svg';
	// components:
	import FormCard from '$lib/components/form-card.svelte';
	import StepContainer from '$lib/components/step-container.svelte';
</script>

<FormCard>
	<img src={desktopSidebar} alt="desktop sidebar bg" class="-z-2 h-full w-auto" />
	<StepContainer />
</FormCard>
