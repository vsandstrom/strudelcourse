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
      { cmd: "stack()", link: "note4", desc: 
        "lets you put several <b class=\"cmd\">note( )</b> and <b class=\"cmd\">sound( )</b> commands together "
        + "<br> &emsp;&emsp;&emsp;&emsp; to make more complex patterns" },
      { cmd: ".slow()", link: "note1-2", 
        desc: "makes the pattern go slower. &emsp; <i>[ .slow(2) = half the speed ]</i>"},
      { cmd: ".fast()", link: "note1-3", 
        desc: "makes the pattern go faster. &emsp; <i>[ .fast(2) = double the speed ]</i>"},
      { cmd: ".color()", link: "note3-2", desc: "colors the pianoroll"}
    ],
    stx: [
      { cmd: "~", link: "note2-2", 
        desc: "the musical rest, inserts a step of silence."},
      { cmd: "//", link: "note4-2", desc: "the comment symbol, makes Strudel " +
      "skip the code on that line" },
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
      1. This is the <b class="cmd">note()</b> command. It is used to make melodies. For
      those familiar with music notation the symbols might seem familiar. With
      Capital letters from A to G, we represent all musical notes, although we
      sometimes put a <b class="cmd">#</b> or a <b class="cmd">b</b> to alter them slightly. 
    </p>
    <p id="note1-2">
      Right off the bat, we introduce the <b class="cmd">.slow()</b> command. This makes a
      pattern go slower, as the name implies. You divide the patterns tempo by the
      number you put in. <br><b class="cmd">.slow(2)</b> halves the tempo, <b class="cmd">.slow(3)</b> divides
      the tempo by 3.
    </p>
    <p id="note1-3"> 
      There is an opposite is the <b class="cmd">.fast()</b> command. The way it works is
      that it multiplies the tempo by the number you put in. <br> <b class="cmd">.fast(2)</b>
      doubles, and <b class="cmd">.fast(3)</b> triples the tempo.
    </p>
  </div>
  <Strudel 
    title="note()" 
    url={examples[0]}
  />

  <div id="piano">
    <p id="piano-info">
      This is supposed to look like a piano. Try pressing a key, and you will
      hear a musical note. You can use this to figure out melodies.<br>
      You need to turn on the sound by pressing the <i>Start Audio</i> button.
      You can now klick the <i>keys</i> on the piano to hear a note.<br>
      If you check the box named <i>Keyboard Playing</i>, 
      you are also able to play the computer keys <i>*like a piano*</i>.
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
      2. Notice on the piano above, the note <b class="cmd">C</b> repeats. The pianos keys 
      repeats both to the left and right. To distinguish which note we mean we add
      a number to the name. The default, when you do not add a number to <b class="cmd">C</b>,
      Strudel assumes it is the <b class="cmd">C3</b> note. To play a lower note, choose a
      lower number, and an higher for a higher note. In the example below, we use
      a <b class="cmd">B2</b>, which is lower than the regular <b class="cmd">B</b> (B3).
    </p>
    <p id="note2-2">
      There is also a new symbol in the pattern below. The tilde <b class="cmd">'~'</b> is a
      super-useful symbol that represents the musical rest. When it occurs in the pattern,
      there is a step of silence.
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
      quite long when you keep on writing on the same line. Fortunately the people
      who made Strudel has thought of this. Below, you see three lines, and some
      commands on the following lines. This is called "chaining", and you can
      chain some commands together even over several lines. The link that chains
      them together is symbolized by a dot.
    </p>
    <p id="note3-2">
      We can make the pianoroll change color with the <b class="cmd">.color()</b> command. 
      Write the name of a color within <b class="cmd">" "</b> in the 
      <b class="cmd">.color()</b> command and the color of the notes changes.
      Try changing it from <b class="cmd">"magenta"</b> to some other color of
      your choice.
    </p>
  </div>
  <Strudel 
    title="note()" 
    url={examples[2]}
    height={360}
  />

  <div id="note4">
    <p>
      4. The very last command for this chapter, which we will explore more in the
      next, is the <b class="cmd">stack()</b> command. It makes it possible to play more than
      one pattern at once. You can layer them on top of each other and make more
      complex beats. You can think of <b class="cmd">stack()</b> as the bread of a
      sandwich that you want to fill with stuff that tastes good together.
    </p>
    <p id="note4-2">
      The example below uses a stack, which contains two <b
      class="cmd">note()</b> and one <b class="cmd">sound()</b> pattern. The 
      <b class="cmd">'//'</b> in front of some of the lines marks a <b>comment</b>, telling the
      program that the code after them, <i>on the same line</i>, are not to be
      played. Notice how the window turn the text gray to tell us which code is
      not active.<br> Try removing the <b class="cmd">'//'</b> one line at a
      time to activate the code and make each part sound.
    </p>
  </div>
  <Strudel 
    title="note()" 
    url={examples[4]}
    height={400}
  />

  <Vocabulary 
    commands={voc.cmd}
    syntaxes={voc.stx}
  />
</div>

<style>
  .cmd {
    font-family: monospace;
    font-size: 1.2em;
  }
</style>
