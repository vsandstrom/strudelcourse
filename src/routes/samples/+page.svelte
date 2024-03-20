<script lang="ts">
  import Strudel from "$lib/Strudel.svelte";
  import Header from "$lib/Header.svelte";
  import data from "$lib/strudel.json";
	import SubHeader from "$lib/SubHeader.svelte";
  import Vocabulary from "$lib/Vocabulary.svelte";
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

  <div id="samples1">
    <p>
    </p>
  </div>
  <Strudel 
    title="samples()" 
    url={examples[0]}
  />

  <Vocabulary 
    commands={voc.cmd}
    syntaxes={voc.stx}
  />

</div>

<style>

</style>
