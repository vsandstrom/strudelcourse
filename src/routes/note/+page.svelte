<script lang="ts">
	import Header from "$lib/Header.svelte";
  import Strudel from "$lib/Strudel.svelte";
  import Piano from "$lib/Piano.svelte";

  import data from "$lib/strudel.json";
  const examples = data["note"];
  
  const AudioContext = window.AudioContext;
  const ctx = new AudioContext();
</script>

<div>
  <Header />
  <h3 class="pagetitle">NOTE(  )</h3>
  <div class="links">
    <a href="#concepts">Concepts</a>
    <a href="#piano">Piano note</a>
  </div>
  <div class="links examples">
    Examples: 
    <a href="#note1">1</a>
    <a href="#note2">2</a>
    <a href="#note3">3</a>
    <a href="#note4">4</a>
  </div>
  <div id="note1">
  <p>1.</p>
  </div>
  <Strudel 
    title="note()" 
    url={examples[0]}
  />
  <div id="piano">
    <Piano ctx={ctx}/>
    



  </div>
  <div id="note2">
  <p>2.</p>
  </div>
  <Strudel 
    title="note()" 
    url={examples[1]}
  />
  <div id="note3">
  <p>3.</p>
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
  <div id="concepts">
    <h4>Commands:</h4>
      <ul><li>
        <b>note()</b> - the command we use to program melodies.
      </li>
      <li> 
        <b><a href="#note1">.slow( )</a></b> - makes the pattern go slower.
      <i>[ slow(2) = half the speed ]</i> 
      </li>
      <li> 
        <b><a href="#note1">.fast( )</a></b> - makes the pattern go faster.
      <i>[ fast(2) = double the speed  ]</i>
      </li>
      <li> 
        <b><a href="#note3">.sound( )</a></b> - allows you to change the
      sound of the notes playing. This is the same command as last lesson, but
      it can be used in combination with <b>note( )</b>.
      </li>
      </ul>
    <h4>Syntax:</h4>
    <ol>
      <li> <b><a href="#note2">~</a></b> - the rest, inserts a step in the
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

#concepts {
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
