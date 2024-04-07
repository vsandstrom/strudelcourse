<script lang="ts">
  import Strudel from "$lib/Strudel.svelte";
  import Header from "$lib/Header.svelte";
  import data from "$lib/strudel.json";
	import SubHeader from "$lib/SubHeader.svelte";
  import Vocabulary from "$lib/Vocabulary.svelte";
  import FreeSound from "$lib/FreeSound.svelte";
  const examples = data["samples"];

  const voc = {
    cmd: [ ],
    stx:[ ]
  }
</script>

<div>
  <Header />
  <SubHeader 
    pageid={"samples"}
    numExamples={1}
    extras={[]}
  />

  <FreeSound />
  <div id="samples1">
    <p>
    1. Drum n Bass
    </p>
  </div>
  <Strudel 
    title="samples()" 
    url={examples[1]}
  />

  <Vocabulary 
    commands={voc.cmd}
    syntaxes={voc.stx}
  />

</div>

<style>

</style>
