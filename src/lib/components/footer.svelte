<script lang="ts">
	import { resolve } from '$app/paths';
	import logo from '$lib/assets/logo.png';
	import github_logo from '$lib/assets/github_logo.svg';
	import x_logo from '$lib/assets/x_logo.png';
	import youtube_logo from '$lib/assets/youtube_logo.png';
	import instagram_logo from '$lib/assets/instagram_logo.png';
	import facebook_logo from '$lib/assets/facebook_logo.png';

	const current_year = new Date().getFullYear();
</script>

<footer
	class="relative flex min-h-[60vh] flex-col justify-between overflow-hidden border-t border-border/10 bg-background px-8 pt-24 pb-12"
>
	<!-- Background Decorations -->
	<div
		class="pointer-events-none absolute inset-0 bg-linear-to-b from-blue-500/5 to-transparent"
	></div>
	<div
		class="pointer-events-none absolute -right-24 -bottom-24 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]"
	></div>

	<div
		class="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 text-center md:grid-cols-3 md:text-left"
	>
		<!-- Brand Section -->
		<div class="flex flex-col items-center space-y-4 md:items-start">
			<a
				href={resolve('/')}
				class="group flex items-center space-x-2 transition-transform duration-150 hover:scale-105"
			>
				<img src={logo} alt="Spikonado" class="h-8 w-8" />
				<span class="font-serif text-2xl tracking-tight text-foreground"> Spikonado </span>
			</a>
			<p class="text-muted-foreground">
				Empowering creators, learners, and researchers with mind-blowing open-source hardware and
				software.
			</p>
		</div>

		<!-- Navigation Section -->
		<div class="flex flex-col items-center space-y-4 md:col-start-2 md:items-start md:text-left">
			<h3 class="text-sm font-semibold tracking-wider text-muted-foreground/50 uppercase">
				Company
			</h3>
			<ul class="space-y-2">
				<li>
					<a href={resolve('/')} class="text-foreground hover:text-muted-foreground"> About </a>
				</li>
				<li>
					<a href={resolve('/')} class="text-foreground hover:text-muted-foreground">
						Privacy Policy
					</a>
				</li>
				<li>
					<a href={resolve('/')} class="text-foreground hover:text-muted-foreground">
						Terms of Service
					</a>
				</li>
			</ul>
		</div>
	</div>

	<div
		class="relative mx-auto mt-12 flex w-full max-w-7xl flex-col items-center justify-between gap-4 border-t border-border/10 pt-12 text-sm text-muted-foreground md:flex-row"
	>
		<p>&copy; {current_year} Spikonado Technologies</p>
		<div class="flex space-x-6 md:items-end">
			<a href="https://github.com/spikonado" target="_blank" rel="noopener">
				<img
					src={github_logo}
					alt="GitHub"
					class="h-6 w-auto transition-transform duration-150 hover:scale-105"
				/>
				<span class="sr-only">GitHub</span>
			</a>
			<a href="https://x.com/spikonado" target="_blank" rel="noopener">
				<img
					src={x_logo}
					alt="X"
					class="h-6 w-auto transition-transform duration-150 hover:scale-105"
				/>
				<span class="sr-only">X</span>
			</a>
			<a href="https://youtube.com/spikonado" target="_blank" rel="noopener">
				<img
					src={youtube_logo}
					alt="YouTube"
					class="h-6 w-auto transition-transform duration-150 hover:scale-105"
				/>
				<span class="sr-only">YouTube</span>
			</a>
			<a href="https://instagram.com/spikonado" target="_blank" rel="noopener">
				<img
					src={instagram_logo}
					alt="Instagram"
					class="h-6 w-auto transition-transform duration-150 hover:scale-105"
				/>
				<span class="sr-only">Instagram</span>
			</a>
			<a href="https://facebook.com/spikonado" target="_blank" rel="noopener">
				<img
					src={facebook_logo}
					alt="Facebook"
					class="h-6 w-auto transition-transform duration-150 hover:scale-105"
				/>
				<span class="sr-only">Facebook</span>
			</a>
		</div>
	</div>
</footer>
