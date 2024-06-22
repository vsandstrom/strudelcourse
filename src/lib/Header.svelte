<script lang="ts">
	import { base } from '$app/paths';
	import ShortCut from './ShortCut.svelte';
  import { goto } from '$app/navigation';
  
  const noid = "javascript:void(0);";

  const route = (e: any) => {
    let el = document.getElementById("dropdown");
    if (el) { el.style.display = "none"; }
    if (e.currentTarget.id == "home") {
      goto(`${base}/`);
    } else {
      goto(`${base}/${e.currentTarget.id}/`);
    }
  }
	console.log('header loaded');

  const showdropdown = () => {
    let el = document.getElementById("dropdown");
    if (el) {
      if (el.style.display == "none") {
        el.style.display = "inline-flex";
      } else {
        el.style.display = "none";
      }
    }
  }

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
  
  
<section id="header-mobile">
  <a id="home" title="Home directory" href={noid} on:click={route}>Home</a>
    <div id="showdropdown" on:click={showdropdown}>
      <div class="bar" id="topbar"> </div>
      <div class="bar" id="middlebar"> </div>
      <div class="bar" id="bottombar"> </div>
    </div>
    <div id="dropdown">
      <div id="shortcuttitle">chapters:</div>
      <a id="sound" title="sound()"       href={noid} on:click={route}>sound()</a><br>
      <a id="note" title="note()"         href={noid} on:click={route}>note()</a><br>
      <a id="stack" title="stack()"       href={noid} on:click={route}>stack()</a><br>
      <a id="samples" title="samples()"   href={noid} on:click={route}>samples()</a><br>
      <div id="shortcuttitle">shortcuts:</div>
      <ShortCut />
    </div>
</section>

<style>
	#header {
		display: flex;
		gap: 1.4em;
		font-size: 1.5em;
		margin: 1.8em 0 2em;
		border-bottom: solid;
	}

  #header-mobile {
    display: none;
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

  @media only screen and (max-width: 680px) {
    #header {
      display: none;
      gap: 1.4em;
      font-size: 1.5em;
      margin: 1.8em 0 2em;
      border-bottom: solid;
    }
    
    #home {
      margin: 1em 0 0;
      font-size: 3em;
    }

    #header-mobile {
      position: relative;
      display: inline-flex;
    }
    
    #dropdown {
      z-index: 999;
      position: absolute;
      display: none;
      flex-direction: column;
      padding: 8px;
      margin: 6.6em 64% 1.2em;
      width: 9em;
      gap: 0.6em;
      border-radius: 5px;
      font-size: 1em;
		  font-family: monospace;
      background-color: rgb(202, 216, 228);
      border: solid;
    }

    .bar{
      background-color: black;
      height: 3px;
      border-radius: 2px;
      margin-top: 8px;
    }

    #showdropdown {
      z-index: 999;
      margin-top: 2.4em;
      width: 35px;
      height: 35px;
      margin-left: 55%;
    }

    #shortcuttitle {
      border-bottom: solid;
      font-size: 1.2em;
    }
  }
</style>
