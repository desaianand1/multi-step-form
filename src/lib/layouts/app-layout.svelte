<script lang="ts">
	// components:
	import Card from '$lib/components/card.svelte';
	import Form from '$lib/components/form.svelte';
	import NavBar from '$lib/components/nav-bar.svelte';
	import Sidebar from '$lib/components/sidebar.svelte';
	// stores:
	import { queryMediaType } from '$lib/stores/media-query-store';

	const isMobile = queryMediaType('mobile');
</script>

<div class="flex h-screen flex-col items-center bg-magnolia md:flex-row md:justify-center">
	<Form>
	{#if $isMobile}
			<Sidebar>
				<Card>
					<slot />
				</Card>
			</Sidebar>
			<NavBar />
	{:else}
			<!-- Card is a 3-col grid -->
			<Card>
				<!-- Sidebar takes up one col -->
				<Sidebar />
				<!--slot content takes up remaining 2 cols -->
				<div class="col-span-2 flex flex-col justify-between px-24 pt-12">
					<slot />
					<NavBar />
				</div>
			</Card>
	{/if}
	</Form>
</div>
