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
  
  <div id="stack2">
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
  />
  
  
  <Vocabulary commands={voc.cmd} syntaxes={voc.stx} />

</div>
