<script lang="ts">
	import TextRotator from '$lib/components/text-rotator.svelte';
	import FullPageScroller from '$lib/components/full-page-scroller.svelte';
	import Footer from '$lib/components/footer.svelte';

	const animatedWords = [
		'competition-winning solution',
		'demo',
		'MVP',
		'minimum evolvable product',
		'product',
		'shipped product'
	];
</script>

<FullPageScroller>
	<section
		class="relative flex min-h-screen scroll-mt-14 items-center justify-center overflow-hidden bg-background pt-14"
	>
		<div class="max-w-5xl px-6 text-center">
			<h1
				class="font-serif text-4xl leading-[1.1] tracking-tight text-foreground md:text-6xl md:leading-[1.1] lg:text-7xl"
			>
				Creating tech that transforms <br />
				your ideas into a <br />
				<TextRotator
					words={animatedWords}
					interval={2000}
					class="mt-2 grid bg-linear-to-r from-blue-400 via-blue-300 to-blue-200 bg-clip-text text-transparent"
				/>
			</h1>
			<p class="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
				Mind-blowing open-source hardware and software for creators, learners, and researchers.
			</p>
		</div>
	</section>

	<section
		id="vario"
		class="relative flex min-h-screen scroll-mt-14 items-center justify-start overflow-hidden border-t border-border/10 bg-background pt-14"
	>
		<div
			class="pointer-events-none absolute inset-0 bg-linear-to-b from-blue-500/5 to-transparent"
		></div>
		<div class="relative max-w-5xl px-12 md:px-24 lg:px-32">
			<h2
				class="font-serif text-4xl leading-[1.1] tracking-tight text-foreground md:text-6xl lg:text-7xl"
			>
				Vario
			</h2>
			<p class="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
				Modular robotics hardware supporting a wide varitey of use-cases.
			</p>
		</div>
	</section>

	<section
		id="sprocket"
		class="relative flex min-h-screen scroll-mt-14 items-center justify-start overflow-hidden border-t border-border/10 bg-background pt-14"
	>
		<div
			class="pointer-events-none absolute inset-0 bg-linear-to-b from-blue-500/5 to-transparent"
		></div>
		<div class="relative max-w-5xl px-12 md:px-24 lg:px-32">
			<h2
				class="font-serif text-4xl leading-[1.1] tracking-tight text-foreground md:text-6xl lg:text-7xl"
			>
				Sprocket
			</h2>
			<p class="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
				A platform that simplifies every step of robotics development.
			</p>
		</div>
	</section>

	<Footer />
</FullPageScroller>
