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
        &emsp;&emsp;<i>[ bpm / bpc = cpm]</i>"
      },
      { cmd: ".bank()", link: "stack2",
        desc: "Used with <b style=\"font-family: monospace; fontsize: 1.2em\">\
        sound()</b> to change the sound of drums and samples."
      },
      { cmd: ".sound()", link: "stack2-2",
        desc: "Used with <b style=\"font-family: monospace; fontsize: 1.2em\"> \
        note()</b> to change the sound of the melodies or chords."
      
      }
    ], 
    stx: [
      { cmd: "< >", link: "stack3", 
        desc: "Lets you do alternating parts inside a pattern, which changes \
        each time a pattern plays" },
      { cmd: "let", link: "stack4-2", 
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
  <SubHeader 
    pageid=stack 
    numExamples={4}
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
      class="cmd">.cpm()</b> sets how many passes it does each minute. A
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
      type="text"
      inputmode="numeric"
      pattern="[0-9]+"
      maxlength="3"
      name="bpm"
      id="bpm"
      bind:value={bpm} 
      placeholder="bpm"
    >
    /
    <input 
      type="text"
      inputmode="numeric"
      pattern="[0-9]+"
      maxlength="2"
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
    <p>
      2. Before we do anything else, we need to introduce two new commands. We
      have up until now only seen examples using the default sounds, and that can
      get quite boring. To be able to change the sounds of <b
      class="cmd">sound()</b> we use the command <b class="cmd">.bank()</b>.
      This swaps the default set of sounds for another that we assign. 
    </p>
    <p id="stack2-2">
      The other
      command we want to use is used in combination with <b class="cmd">note()</b>
      confusingly named <b class="cmd">.sound()</b>, and we need to remember
      that this is not the same as the command we use to create a drum pattern.
      You can tell them apart by the dot <b class="cmd">('.')</b> in front of <b
      class="cmd">.sound()</b> that shows it is belongs to <b class="cmd">note()</b>.
    </p>
    <p>
      Below we are using the same program as in example 1, with the exception
      of that the sounds now are switched out. You can check out more sounds at
      the <a href="https://strudel.cc">strudel.cc</a> website. Click on
      <i>"sounds"</i> at the bottom and a list of all built in sounds will show
      up.
    </p>
  </div>
  <Strudel 
    title="stack()" 
    url={examples[1]}
    height={500}
  />

  <div id="stack3">
    <p>
      3. Sometimes we want to repeat a pattern <i>*almost*</i> identical, but make
      some small change every other time it plays. <b class="cmd">Strudel</b>
      has a way to make this happen. The symbols <b class="cmd">{"<"}</b> and <b
      class="cmd">{">"}</b> creates an alternating subpattern. An example would
      be this:
      </p>
      <p style="margin-left: 3em;">
        <b class="cmd">"{"[ C D <E F> ]"}"</b>
      </p>
      <p>
        Here, the first time the pattern plays, it will play the <b
        class="cmd">E</b> inside the <b class="cmd">{"< >"}</b>, and the second
        time it plays the <b class="cmd">F</b>. When it plays the third time, it
        starts over to <b class="cmd">E</b>.
      </p>
      <p>
        See the example below, you can do longer parts of alternating notes.
        With more notes inside the <b class="cmd">{"< >"}</b>, it takes longer
        for the pattern to repeat itself.
      </p>

  </div>
  <Strudel 
    title="stack()"
    url={examples[3]}
    height={400}
  />
  
  <div id="stack4">
    <p id="stack4-2">
      4. One popular way to handle tempo is to use the same tempo everywhere. You
      can do this by creating a <i>variable</i>, a kind of place-holder for a
      value that you can reuse throughout you program. In <b
      class="cmd">Strudel</b> the way you create a variable is with the <b
      class="cmd">let</b> word.
    </p>
    <p>
      Below is the same program written with and
      without a variable to store and reuse a tempo. The variable is called <b
      class="cmd">tempo</b> because we chose it. It can be called pretty much
      anything, but it is good to choose a word that reminds you what is stored
      inside.
    </p>
    <p>
      The power to use this technique is seen in the example below. If you want
      to change the tempo of the song, you change the value of the variable <b
      class="cmd">tempo</b>, and the value of <b class="cmd">tempo</b> inside
      the <b class="cmd">.cpm()</b> commands will change in all patterns
      throughout. You can then change it on one place rather than at every line.
    </p>
  </div>
  <Strudel 
    title="stack()"
    url={examples[5]}
    height={820}
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
    width: 12.5%;
    margin-left: 1em;
    margin-right: 0.4em;
  }

  #cpmcalculator > input:nth-of-type(2) {
    width: 10.2%;
    margin-left: 0.5em;
  }

#cpm {
margin-left: 1em;
}


</style>
