<script lang="ts">
  import Strudel from "$lib/Strudel.svelte";
  import Header from "$lib/Header.svelte";
  import SubHeader from "$lib/SubHeader.svelte";
  import Vocabulary from "$lib/Vocabulary.svelte";
  import data from "$lib/strudel.json";
  const examples = data["stack"];
  
  const voc = { cmd: [ ], stx: [ ] };
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
    </p>
  </div>
  <Strudel 
    title="stack()"
    url={examples[0]}
  />
  
  <Vocabulary commands={voc.cmd} syntaxes={voc.stx} />

</div>
