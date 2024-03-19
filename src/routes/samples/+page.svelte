<script lang="ts">
  import Strudel from "$lib/Strudel.svelte";
  import Header from "$lib/Header.svelte";
  import data from "$lib/strudel.json";
  const examples = data["samples"];
</script>

<div>
  <Header />
  <h3 class="pagetitle">SAMPLES( )</h3>
  <div class="links">
    <a href="#vocabulary">Vocabulary</a>
  </div>
  <div class="links examples">
    Examples: 
    <a href="#samples1">1</a>
  </div>

  <div id="samples1">
    <p>
    </p>
  </div>
  <Strudel 
    title="samples()" 
    url={examples[0]}
  />

  <h3>Vocabulary:</h3>
  <div id="vocabulary">
    <h4>Commands:</h4>
      <ul>
      </ul>
    <h4>Syntax:</h4>
    <ol>
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
