<script lang="ts">
  import Strudel from "$lib/Strudel.svelte";
  import Header from "$lib/Header.svelte";
  import SubHeader from "$lib/SubHeader.svelte";
  import Vocabulary from "$lib/Vocabulary.svelte";
  import data from "$lib/strudel.json";
  const examples = data["stack"];
  
  const voc = { 
    cmd: [
    ], 
    stx: [
      { cmd: "let", link: "stack1-1", 
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
      to, as the name implies, stack patterns on top of eachother, that play
      together in sync. With that said, the patterns does not always line up the
      way you like. They might have different lengths and different tempos which
      you might not have intended. We are going to look at some of the ways to
      help fix that.
    </p>
    <p id="stack1-1">
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

  <div id="stack2">
    <p>
      2. The <b class="cmd">.cpm()</b> command, that we used in the example
      above is a bit tricky. It is an abbreviation for <b>C</b>ycles <b>P</b>er
      <b>M</b>inute. If you think of one pass through the pattern as <i>one
      cycle</i>, the <b class="cmd">.cmd()</b> sets how many passes it does each
      minute. A convention in music is to count the beats in a pass, and a
      common one is 4 beats per pass. A usual way to measure tempo is
      <b>B</b>eats <b>P</b>er <b>M</b>inute or <b>bpm</b>. <b>Strudel</b> does
      not understand <b>bpm</b>, only patterns, so we have to keep track of the
      number of beats in the pattern. An example would be:<br>
      <b class="cmd">[ beats per minute / beats in pattern = cycles per minute ]</b>
    </p>
  </div>
  <Strudel 
    title="stack()"
    url={examples[1]}
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
</style>
