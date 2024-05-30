<script lang="ts">
	import './styles.css';
	import { inject } from '@vercel/analytics';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';

	inject();
	injectSpeedInsights();
</script>

<svelte:head>
	<title>Home</title>
	<meta name="title" content="Creative Coding Chalmers" />
	<meta
		name="description"
		content="Course in programming using the Strudel music live-coding language"
	/>
	<meta name="keywords" content="programming, course, creative, music, chalmers" />
	<meta name="robots" content="index, follow" />
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="language" content="English" />
	<meta name="revisit-after" content="14 days" />
	<meta name="author" content="Viktor Sandström" />
</svelte:head>

<div class="app">
	<main>
		<Header />
		<slot />
		<Footer />
	</main>

	<footer></footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		/* min-height: 100vh; */
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 70%;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
		height: 6em;
	}

	footer a {
		font-weight: bold;
	}


	.pagetitle {
		margin-left: 0;
	}

	ol > li {
		margin-bottom: 0.6em;
	}

	.links {
		display: flex;
		gap: 1.2em;
		margin-left: 0em;
	}

	.examples {
		margin-top: 1em;
		margin-bottom: 2em;
	}

	.cmd {
		font-family: monospace;
		font-size: 1.2em;
	}
	
  @media only screen and (max-width: 680px) {
		footer {
			padding: 12px 0;
		}
    main {
      max-width: 85%;
    }


	}
</style>
