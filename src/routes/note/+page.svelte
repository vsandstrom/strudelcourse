<script lang="ts">
  import {base} from '$app/paths';
	import Header from "$lib/Header.svelte";
  import Strudel from "$lib/Strudel.svelte";
  import Piano from "$lib/Piano.svelte";
  import {onMount} from 'svelte';
  import { writable } from 'svelte/store';
  import { type Writable } from 'svelte/store';

  let ctxstore: Writable<AudioContext | null> = writable(null);


  const initCtx = () => {
    const AudioContext = window.AudioContext;
    let ctx = new AudioContext();
    ctxstore.set(ctx);
    return ctxstore;
  }

  import data from "$lib/strudel.json";
  const examples = data["note"];

  onMount(() => initCtx());

</script>

<div>
  <Header />
  <h3 class="pagetitle" id="note">NOTE(  )</h3>
  <div class="links">
    <a href="#vocabulary">Vocabulary</a>
    <a href="#piano">Piano keys</a>
  </div>
  <div class="links examples">
    Examples: 
    <a href="#note1">1</a>
    <a href="#note2">2</a>
    <a href="#note3">3</a>
    <a href="#note4">4</a>
  </div>

  <div id="note1">
  <p>
    1. This is the <b>note( )</b> command. It is used to make melodies. For
    those familiar with music notation the symbols might seem familiar. With
    Capital letters from A to G, we represent all musical notes, although we
    sometimes put a <b>#</b> or a <b>b</b> to alter them slightly. 
  </p>
  <p id="note1-2">
    Right off the bat, we introduce the <b>.slow( )</b> command. This makes a
    pattern go slower, as the name implies. You divide the patterns tempo by the
    number you put in. <b>.slow(2)</b> halves the tempo, <b>.slow(3)</b> divides
    the tempo by 3.
  </p>
  <p id="note1-3">
    There is an opposite is the <b>.fast( )</b> command. The way it works is
    that it multiplies the tempo by the number you put in. <b>.fast(2)</b>
    doubles, and <b>.fast(3)</b> triples the tempo.
  </p>
  </div>
  <Strudel 
    title="note()" 
    url={examples[0]}
  />

  <div id="piano">
    <p id="piano-info">
      This is supposed to look like a piano. Try pressing a key, and you will
      hear a musical note. You can use this to figure out melodies. There is a
      button below that makes you be able to play it *like a piano* with your
      computer keys.
    </p>
    <!-- svelte-ignore will be init -->
    {#if $ctxstore}
      <Piano ctxstore={ctxstore} />
    {/if}
  </div>

  <div id="note2">
  <p>
    2. Notice on the piano above, the note <b>C</b> repeats. Imagine that the
    pianos keys repeats both to the left and right. To distinguish which note we
    mean we add a number to the name. The default, when you do not add a number
    to <b>C</b>, Strudel assumes it is the <b>C3</b> note. To play a lower note,
    choose a lower number, and an higher for a higher note. In the example
    below, we use a <b>B2</b>, which is lower than the regular <b>B</b> (B3).
  </p>
  <p id="note2-2">
    There is also a new symbol in the pattern below. The <b>(~)</b> is a
    super-useful symbol that symbolizes taking a rest. When it occurs in the pattern,
    nothing plays, the sound takes a break.
  </p>
  </div>
  <Strudel 
    title="note()" 
    url={examples[1]}
    height={400}
  />

  <div id="note3">
  <p>
    3. As you saw from the previous example, the length of the program can get
    quite long when you keep on writing on the same line. Fortunatly the people
    who made Strudel has thought about this. Below you see three lines, but the
    commands on line 2 and three are connected to line 1 through the dot.
  </p>
  </div>
  <Strudel 
    title="note()" 
    url={examples[2]}
  />

  <div id="note4">
  <p>4.</p>
  </div>
  <Strudel 
    title="note()" 
    url={examples[3]}
    height={380}
  />

  <h3>Vocabulary:</h3>
  <div id="vocabulary">
    <h4>Commands:</h4>
      <ul><li>
        <b><a href="#note">note()</a></b> - the command we use to program melodies.
      </li>
      <li> 
        <b><a href="#note1-2">.slow( )</a></b> - makes the pattern go slower.
      <i>[ slow(2) = half the speed ]</i> 
      </li>
      <li> 
        <b><a href="#note1-3">.fast( )</a></b> - makes the pattern go faster.
      <i>[ fast(2) = double the speed  ]</i>
      </li>
      <li> 
        <b><a href="{base}/sound">.sound( )</a></b> - allows you to change the
      sound of the notes playing. This is the same command as last lesson, but
      it can be used in combination with <b>note( )</b>.
      </li>
      </ul>
    <h4>Syntax:</h4>
    <ol>
      <li> <b><a href="#note2-2">~</a></b> - the rest, inserts a step in the
      pattern of silence. </li>
      <li> <b><a href="#note4">("A4 B3 C2")</a></b> - note names and octave
      numbers </li>
    </ol>
  </div>

</div>

<style>
.pagetitle {
  margin-left: 0;
} 

#vocabulary {
  margin-left: 1.5em;
}

ol > li {
  margin-bottom: 0.6em;
}

table {
  width: 80%;
  margin: 3em 2em 4em 2em;
}

th {
  text-align: left;
  font-size: 1.2em;
  border-bottom:groove;
  padding: 0.4em 0;
  margin-left: -0.2em;
}

td:last-child {
  font-weight:bold;
  
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

</style>
