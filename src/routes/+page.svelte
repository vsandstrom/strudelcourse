<script lang="ts" type="module">
	// import Strudel from "$lib/Strudel.svelte";
	import Header from '$lib/Header.svelte';
	import ShortCut from '$lib/ShortCut.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<svelte:head>
	<title>Home</title>
  <meta name="title" content="Creative Coding Chalmers">
  <meta name="description" content="Course in programming using the Strudel music live-coding language">
  <meta name="keywords" content="programming, course, creative, music, chalmers">
  <meta name="robots" content="index, follow">
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta name="language" content="English">
  <meta name="revisit-after" content="14 days">
  <meta name="author" content="Viktor Sandström">
</svelte:head>

<section class="welcome">
	<h1>{'Welcome to Creative Coding!'}</h1>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome h1 {
		font-size: 4em;
		margin-top: 20%;
		margin-bottom: 8%;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 80%;
		top: 0;
		display: block;
	}
</style>
