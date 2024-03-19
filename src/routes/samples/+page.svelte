<script lang="ts">
  import Strudel from "$lib/Strudel.svelte";
  import Header from "$lib/Header.svelte";
  import data from "$lib/strudel.json";
  const examples = data["note"];
</script>

<div>
  <Header />
  <h3 class="pagetitle">SAMPLES( )</h3>
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


  <Strudel 
    title="stack()" 
    url={examples[0]}
  />
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
