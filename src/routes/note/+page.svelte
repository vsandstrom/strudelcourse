<script lang="ts">
  import {base} from '$app/paths';
	import Header from "$lib/Header.svelte";
  import SubHeader from '$lib/SubHeader.svelte';
  import Vocabulary from '$lib/Vocabulary.svelte';
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

  onMount(() => initCtx());

  $: innerWidth = 0;
  $: outerHeight = 0;

  import data from "$lib/strudel.json";
  const examples = data["note"];

  const voc = {
    cmd: [
      {cmd: "note()", link: "note", desc: "the command we use to program melodies."},
      { cmd: ".slow( )", link: "note1-2", 
        desc: "makes the pattern go slower. <i>[ slow(2) = half the speed ]</<"},
      { cmd: ".fast( )", link: "note1-3", 
        desc: "makes the pattern go faster. <i>[ fast(2) = double the speed ]</i>"},
      { cmd: ".color( )", link: "note3-2", desc: "colors the pianoroll"}
    ],
    stx: [
      { cmd: "~", link: "note2-2", 
        desc: "the rest, inserts a step in the pattern of silence."},
      { cmd: "(\"A4 B3 C2\")", link: "note4", desc: "note names and octave numbers" }
    ]
  };
</script>

<svelte:window bind:innerWidth bind:outerHeight />

<div>
  <Header />
  <SubHeader 
    pageid={"note"}
    numExamples={4}
    extras={[{id: "piano", content: "Piano Keys"}]}
  />

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
    {#if $ctxstore && innerWidth > 1000}
      <Piano ctxstore={ctxstore} />
    {:else}
      <p>
        <b>[ Put browser in fullscreen mode to view piano ]</b>
      </p>
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
    who made Strudel has thought about this. Below you see three lines, and some
    commands on the following lines. This is called "chaining", and you can
    chain some commands together even over several lines.
  </p>
  <p id="note3-2">
    There is also a new command, the <b>.color( )</b> command. It makes the
    <b>.pianoroll( )</b> command change color of the notes. Write the name of a
    color within <b>" "</b> in the <b>.color( )</b> command and the pianoroll
    changes.
  </p>

  </div>
  <Strudel 
    title="note()" 
    url={examples[2]}
    height={360}
  />

  <div id="note4">
  <p>
    4. Notice that the <b>sound( )</b> command has made a return. This time it
    is written with a dot in front of it, telling us it is chained to the
    <b>note( )</b> command. It makes us be able to change the sound of the notes
    playing. There are a lot of built-in sounds that you can try out. This time
    we chose <b>"gm_acoustic_guitar_nylon"</b>, the sound of a guitar, 
    obviously.
  </p>
  </div>
  <Strudel 
    title="note()" 
    url={examples[3]}
    height={380}
  />

  <Vocabulary 
  commands={voc.cmd}
  syntaxes={voc.stx}
  />
</div>

