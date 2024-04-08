<script lang="ts">
  import { onMount } from "svelte";
  import Strudel from "$lib/Strudel.svelte";
  import Header from "$lib/Header.svelte";
  import data from "$lib/strudel.json";
	import SubHeader from "$lib/SubHeader.svelte";
  import Vocabulary from "$lib/Vocabulary.svelte";
  import FreeSound from "$lib/FreeSound.svelte";
  import imgsrc from "$lib/zeroidx.png";
	import type { onMount } from "svelte";
  const examples = data["samples"];
  let mounted = false;

  $: mount = mounted;

  const voc = {
    cmd: [ 
      { cmd: "samples()", link: "samples", 
        desc: "A command that helps you import sounds to use in your compositions" }, 
      { cmd: ".slice()", link: "samples1-2", desc: `Cuts a sound up in several
        pieces and lets you play them with a pattern. \ 
        <br>&emsp;&emsp;&emsp;&emsp; <i>[ ex: </i><b \
        style="font-family:monospace;font-size:1.2em">sound(\"snd\").slice(4,\
        ${"\"0 1 2 3\""})</b><i> ]</i>`},
      { cmd: ".splice()", link: "samples1-3", desc: `Same as <b
      style="font-family:monospace;font-size:1.2em">.slice()</b>, but stretches
      the sound to fit the pattern.`
      }

    ],
    stx:[ 
      { cmd: "@", link: "sample3", desc: `Used in a pattern it can change the
      duration of a subpattern or sound. <b
      style="font-family:monospace;font-size:1.2em">bd@2</b> makes duration of the bass drum
      twice as long. <b
      style="font-family:monospace;font-size:1.2em">sd@0.5</b> makes the
      duration of the snare drum
      half as long. 
      <br>&emsp;&emsp;&emsp;&emsp; \
      <i>[ ex: </i><b style="font-family:monospace;font-size:1.2em">sound(\"bd
      sd@2 bd sd@0.5\")</b><i> ]</i>`},
      { cmd: "!", link: "sample3", desc: `Similar to the <b
      style="font-family:monospace;font-size:1.2em">*</b> operator, but it
      repeats a subpattern or sound instead of subdivide them. 
      <br>&emsp;&emsp;&emsp;&emsp; \
      <i>[ listen to the difference: </i><b
      style="font-family:monospace;font-size:1.2em">sound(\"bd*4 bd!4\")</b><i> ]</i>`},
    ]
  }

  onMount(() => {
    mounted = true;
  })

</script>

<div>
  <Header />
  {#if mount}
    <SubHeader 
      pageid={"samples"}
      numExamples={1}
      extras={[]}
    />
  {/if}

  <div id="samples1">
    <p>
      1. The <b class="cmd">samples()</b> command is a tool to allow you to use
      your own sounds in your compositions. 

      There as several ways to use sounds, but we are going to use a technique using the website <a
      href="https://freesound.org"> freesound.org</a>. There you can find all sorts of different sounds that
      people around the world have recorded. 
    </p>
    <FreeSound />
    <p id="samples1-2">
      Below we have an example using a very famous drum sound called the <b
      class="cmd">Amen Break</b>, which was a foundation for several musical
      genres, most notably <b class="cmd">Jungle</b> and <b class="cmd">Drum and
      Bass</b>. We use the command <b class="cmd">.slice</b> to cut the sound
      to even pieces, and then play them using a pattern.
    </p> 
    <p id="samples1-3">
      A good exercise would be to go to <a
      href="https://freesound.org"> freesound.org</a> and search for a
      drum sample to use. Try it out, and switch between <b
      class="cmd">.slice()</b> and another similar command, <b class="cmd">.splice()</b>
      and listen to the difference.
    </p>
  </div>
  <Strudel 
    title="samples()" 
    url={examples[1]}
    height={400}
  />
    
    <p>
      There is a quirk though, and you might have noticed already. To play the
      slices, and you have 4 slices of a sound, we can use the numbers 0 to 3.
      Why not 1 to 4? 
    </p>
    <p id="samples2">
      Imagine a youtube video that you want to play from the beginning, you
      would play it from <b class="cmd">00:00</b>, which is position <b
      class="cmd">0</b>. The first slice is the part between <b
      class="cmd">0</b> and <b class="cmd">1</b>. Then the fourth slice would be
      between <b class="cmd">3</b> and <b class="cmd">4</b>. If we try to play
      something from the position of <b class="cmd">4</b>, we are trying to
      continue playing the clip after it has ended. There is nothing there.
    </p>
    <img src={imgsrc} alt="Graphic explaining zero index">

    <div id="samples2">
     2.
    </div>
    <Strudel
      title="sample()"
      url={examples[2]}
    />
    
    <div id="samples3">
      3.
    </div>
    <Strudel
      title="sample()"
      url={examples[2]}
    />

  {#if mount}
    <Vocabulary 
      commands={voc.cmd}
      syntaxes={voc.stx}
    />
  {/if}
</div>

<style>
  .cmd {
    font-family: monospace;
    font-size: 1.2em;
  }

  img {
    width: 100%;
    margin-top: 2em;
    margin-bottom: 5em;
  }
</style>
