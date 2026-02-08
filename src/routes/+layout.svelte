<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/logo.png';
	import Navbar from '$lib/components/navbar.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Spikonado - Build Your Own Future</title>
</svelte:head>

<Navbar />
{@render children()}
