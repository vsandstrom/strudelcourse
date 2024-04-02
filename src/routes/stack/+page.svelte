<script lang="ts">
  import Strudel from "$lib/Strudel.svelte";
  import Header from "$lib/Header.svelte";
  import SubHeader from "$lib/SubHeader.svelte";
  import Vocabulary from "$lib/Vocabulary.svelte";
  import data from "$lib/strudel.json";
  const examples = data["stack"];
  
  const voc = { 
    cmd: [
      { cmd: ".cpm()", link: "stack1-2", 
        desc: "Used to set the tempo of a certain pattern, or a stack. \
        It uses the formula: <br><b style=\"font-family: monospace; fontsize: 1.2em\"> \
        [ bpm / bpc = cpm]"
      }
    ], 
    stx: [
      { cmd: "let", link: "stack2-2", 
        desc: 
        "Lets you save something in a variable with a name \
        that you can use elsewhere in the program \
        <br>&emsp; <i>[&emsp;ex:&emsp; </i>\
        <b style=\"font-family: monospace; font-size: 1.2em\"> \
        let someNotes = \"A B [A, C]\"</b><i>,&emsp; or </i>\
        <b style=\"font-family: monospace; font-size: 1.2em\"> \
        &emsp;&emsp;let tempo = 120/4</b><i>&emsp;] </i>"
      }

    ] 
  };

  let bpm: number;
  let bpc: number;
  $: cpm = bpc ? bpm / bpc : "cpm";

</script>

<div>
  <Header />
  <SubHeader 
    pageid=stack 
    numExamples={1}
    extras={[]}
  />

  <div id="stack1">
    <p> 
      1. We continue with the <b class="cmd">stack()</b> command. It is a way
      to, as the name implies, stack patterns on top of each other, that play
      together in sync. With that said, the patterns does not always line up the
      way you like. They might have different lengths and different tempos which
      you might not have intended. We are going to look at some of the ways to
      help fix that.
    </p>
    <p id="stack1-2">
      The <b class="cmd">.cpm()</b> command, that we use below, is a bit tricky.
      It is short for <b>C</b>ycles <b>P</b>er <b>M</b>inute. If you
      think of one pass through a pattern as <i>one cycle</i>, the <b
      class="cmd">.cmd()</b> sets how many passes it does each minute. A
      convention in music is to count the beats in a cycle (<i>measure</i>), and a common one is 4
      beats. A usual way to measure tempo is <b>B</b>eats <b>P</b>er
      <b>M</b>inute or <b>bpm</b>. Unfortunately <b>Strudel</b> does not understand
      <b>bpm</b> directly, only patterns, so we have to keep track of the number of beats
      in the pattern ourselves. The formula for calculating it looks like this:<br> 
      <b class="cmd">[ beats per minute / beats per cycle = cycles per minute ]</b>
      <br>
    </p>
  <div id="cpmcalculator">
    <input 
      type="number"
      name="bpm"
      id="bpm"
      bind:value={bpm} 
      placeholder="bpm"
    >
    /
    <input 
      type="number" 
      name="bpc"
      id="bpc"
      bind:value={bpc}
      placeholder="bpc"
    >
    =
    <span id="cpm">{cpm}</span>
  </div>
  <p>
    Fortulately for us, <b class="cmd">Strudel</b> can do the math for us.
  </p>
  <Strudel 
    title="stack()"
    url={examples[0]}
    height={380}
  />
  </div>
  <div id="stack2">
    <p id="stack2-2">
      One popular way to do this is to use the same tempo everywhere. You can do
      this by creating a <i>variable</i>, a kind of place-holder for a value
      that you can reuse throughout you program. In <b class="cmd">Strudel</b>
      the way you create a variable is with the <b class="cmd">let</b> word.
      Below is the same program written with and without a variable to store and
      reuse a tempo. The variable is called <b class="cmd">tempo</b> because we
      chose it. It can be called pretty much anything, but it is good to choose
      a word that is associated with how we use it.
    </p>
    <p>
      The power to use this technique is seen in the example below. If you want
      to change the tempo of the song, you change the value of the variable <b
      class="cmd">tempo</b>, and the value of <b class="cmd">tempo</b> will
      change in all patterns throughout. You change it on one place rather than
      every line.
    </p>
  </div>
  <Strudel 
    title="stack()"
    url={examples[0]}
    height={420}
  />
  
  <div id="stack3">
    <p>
      4. Notice that the <b class="cmd">sound( )</b> command has made a return. This time it
      is written with a dot in front of it, telling us it is chained to the
      <b class="cmd">note( )</b> command. It makes us be able to change the sound of the notes
      playing. There are a lot of built-in sounds that you can try out. This time
      we chose <b>"gm_acoustic_guitar_nylon"</b>, the sound of a guitar, 
      obviously.
    </p>
  </div>
  <Strudel 
    title="stack()"
    url={examples[1]}
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

  #cpmcalculator {
    margin-bottom: 1.5em;
    margin-top: 1em;
    font-family: monospace;
    font-size: 1.4em;
  }

  #cpmcalculator > input {
    width: 16.5%;
    margin-left: 1em;
    margin-right: 0.4em;
  }

  #cpmcalculator > input:nth-of-type(2) {
    width: 12.7%;
    margin-left: 0.5em;
  }

#cpm {
margin-left: 1em;
}


</style>
