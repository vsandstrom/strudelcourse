<script lang="ts">
  import Strudel from "$lib/Strudel.svelte";
  import Header from "$lib/Header.svelte";
  import data from "$lib/strudel.json";
  const examples = data["stack"];
</script>

<div>
<Header></Header>
  <Strudel 
    title="stack()"
    url={examples[0]}
  />
</div>
