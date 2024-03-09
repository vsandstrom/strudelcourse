<script lang="ts">
	import Header from "$lib/Header.svelte";
  import Strudel from "$lib/Strudel.svelte";
  import data from "$lib/strudel.json";
  const examples = data["note"];
</script>

<div>

<Header></Header>
  <Strudel 
    title="note()" 
    url={examples[0]}
  />
</div>
