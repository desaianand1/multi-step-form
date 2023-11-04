<script lang="ts">
	// components:
	import FormCard from '$lib/components/form-card.svelte';
	import NavBar from '$lib/components/nav-bar.svelte';
	import Sidebar from '$lib/components/sidebar.svelte';
	// stores:
	import { queryMediaType } from '$lib/stores/media-query-store';

	const isMobile = queryMediaType('mobile');
</script>

<div class="flex h-screen flex-col items-center bg-magnolia md:flex-row md:justify-center">
	{#if $isMobile}
		<Sidebar>
			<FormCard>
				<slot />
			</FormCard>
		</Sidebar>
		<NavBar/>
	{:else}
		<!-- FormCard is a 3-col grid -->
		<FormCard>
			<!-- Sidebar takes up one col -->
			<Sidebar />
			<!--slot content takes up remaining 2 cols -->
			<div class="col-span-2 flex flex-col justify-between bg-green-600 px-24 pt-12">
				<slot />
				<NavBar/>
			</div>
		</FormCard>
	{/if}
</div>
