<script>
	import { queryMediaType } from '$lib/stores/media-query-store';

	import MobileLayout from '$lib/layouts/mobile-layout.svelte';
	import DesktopLayout from '$lib/layouts/desktop-layout.svelte';

	const isMobile = queryMediaType('mobile');
</script>

<div class="flex h-screen flex-col items-center bg-magnolia md:flex-row md:justify-center">
	{#if $isMobile}
		<MobileLayout />
	{:else}
		<DesktopLayout />
	{/if}
</div>
