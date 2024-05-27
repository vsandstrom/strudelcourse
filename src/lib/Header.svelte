<script lang="ts">
	import { base } from '$app/paths';
	import ShortCut from './ShortCut.svelte';
  import { goto } from '$app/navigation';
  
  const noid = "javascript:void(0);";

  const route = (e: any) => {
    if (e.currentTarget.id == "home") {
      goto(`${base}/`);
    } else {
      goto(`${base}/${e.currentTarget.id}/`);
    }
  }
	console.log('header loaded');
</script>

<section id="header">
	<a id="home" title="Home directory" href={noid} on:click={route}>Home</a>
	<a id="sound" title="sound()"       href={noid} on:click={route}>sound()</a>
	<a id="note" title="note()"         href={noid} on:click={route}>note()</a>
	<a id="stack" title="stack()"       href={noid} on:click={route}>stack()</a>
	<a id="samples" title="samples()"   href={noid} on:click={route}>samples()</a>
	<!-- <a href="{base}/ping_pong">ping pong</a> -->
	<ShortCut />
</section>

<style>
	#header {
		display: flex;
		gap: 1.4em;
		font-size: 1.5em;
		margin: 1.8em 0 2em;
		border-bottom: solid;
	}

	a {
		height: 1.5em;
		font-family: monospace;
		font-size: 1.4em;
	}

	#home {
		font-size: 2.2em;
		margin-top: -0.3em;
	}
</style>
