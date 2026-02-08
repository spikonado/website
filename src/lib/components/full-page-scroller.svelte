<script lang="ts">
	import { onMount } from 'svelte';

	let { children } = $props();

	let container: HTMLDivElement;
	let currentIndex = 0;
	let isTransitioning = false;
	let sectionCount = 0;

	function scrollToSection(index: number) {
		if (index < 0 || index >= sectionCount || isTransitioning) return;

		isTransitioning = true;
		currentIndex = index;

		if (container) {
			container.scrollTo({
				top: index * window.innerHeight,
				behavior: 'smooth'
			});
		}

		// Cooldown to prevent skipping sections
		setTimeout(() => {
			isTransitioning = false;
		}, 550);
	}

	function handleWheel(e: WheelEvent) {
		e.preventDefault();
		if (Math.abs(e.deltaY) < 12) return;

		if (e.deltaY > 0) {
			scrollToSection(currentIndex + 1);
		} else {
			scrollToSection(currentIndex - 1);
		}
	}

	let touchStartY = 0;
	function handleTouchStart(e: TouchEvent) {
		touchStartY = e.touches[0].clientY;
	}

	function handleTouchMove(e: TouchEvent) {
		if (e.cancelable) e.preventDefault();
	}

	function handleTouchEnd(e: TouchEvent) {
		const touchEndY = e.changedTouches[0].clientY;
		const deltaY = touchStartY - touchEndY;

		if (Math.abs(deltaY) < 30) return;

		if (deltaY > 0) {
			scrollToSection(currentIndex + 1);
		} else {
			scrollToSection(currentIndex - 1);
		}
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
			e.preventDefault();
			scrollToSection(currentIndex + 1);
		} else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
			e.preventDefault();
			scrollToSection(currentIndex - 1);
		} else if (e.key === 'Home') {
			e.preventDefault();
			scrollToSection(0);
		} else if (e.key === 'End') {
			e.preventDefault();
			scrollToSection(sectionCount - 1);
		}
	}

	onMount(() => {
		if (container) {
			sectionCount = container.children.length;
		}

		window.addEventListener('wheel', handleWheel, { passive: false });
		window.addEventListener('touchstart', handleTouchStart, {
			passive: true
		});
		window.addEventListener('touchmove', handleTouchMove, {
			passive: false
		});
		window.addEventListener('touchend', handleTouchEnd, { passive: true });
		window.addEventListener('keydown', handleKeydown);

		return () => {
			window.removeEventListener('wheel', handleWheel);
			window.removeEventListener('touchstart', handleTouchStart);
			window.removeEventListener('touchmove', handleTouchMove);
			window.removeEventListener('touchend', handleTouchEnd);
			window.removeEventListener('keydown', handleKeydown);
		};
	});
</script>

<div bind:this={container} class="h-screen overflow-hidden">
	{@render children?.()}
</div>
