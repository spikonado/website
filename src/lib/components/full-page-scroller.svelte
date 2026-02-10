<script lang="ts">
	import { onMount } from 'svelte';

	let { children } = $props();
	let container: HTMLDivElement | undefined = $state();

	function handleKeydown(e: KeyboardEvent) {
		if (!container) return;
		// Only handle keys if the user isn't typing in an input
		if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement?.tagName || '')) return;

		const scrollAmount = window.innerHeight;
		if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
			e.preventDefault();
			container.scrollBy({ top: scrollAmount, behavior: 'smooth' });
		} else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
			e.preventDefault();
			container.scrollBy({ top: -scrollAmount, behavior: 'smooth' });
		} else if (e.key === 'Home') {
			e.preventDefault();
			container.scrollTo({ top: 0, behavior: 'smooth' });
		} else if (e.key === 'End') {
			e.preventDefault();
			container.scrollTo({ top: container.scrollHeight, behavior: 'smooth' });
		}
	}

	onMount(() => {
		window.addEventListener('keydown', handleKeydown);
		return () => window.removeEventListener('keydown', handleKeydown);
	});
</script>

<div
	bind:this={container}
	class="scroller h-screen w-full snap-y snap-mandatory overflow-y-auto scroll-smooth outline-none"
>
	{@render children?.()}
</div>

<style>
	/* Target direct children of the scroller */
	.scroller > :global(*) {
		scroll-snap-align: start;
		scroll-snap-stop: always;
	}

	/* Hide scrollbar for cleaner look */
	.scroller {
		scrollbar-width: none; /* Firefox */
		-ms-overflow-style: none; /* IE/Edge */
	}
	.scroller::-webkit-scrollbar {
		display: none; /* Chrome/Safari */
	}
</style>
