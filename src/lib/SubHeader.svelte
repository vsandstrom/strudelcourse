<script lang="ts">
  // Page title
  export let pageid: string;
  // Number of examples on page
  export let numExamples: number;
  // Any special links or sections on page i.e. Piano or drum cheat sheet
  export let extras: {id: string, content: string}[];

  const range = (num: number, start: number) => {
    return [...Array(num).keys()].map(i => i + start);
  };

  const catchNonMethods = (id: string) => {
    if (id == "pingpong") return "PING PONG";
    if (id == "tutorial") return "TUTORIAL";
    return `${id.toUpperCase()}(  )`;
  };

  console.log(`subheader ${pageid} loaded`);
</script>
  
<h3 class="pagetitle" id={pageid}>{catchNonMethods(pageid)}</h3>
<div class="links">
  <a href="#vocabulary">Vocabulary</a>
  {#each extras as extra} 
  <a href="#{extra.id}">{extra.content}</a>
  {/each}
</div>
<div class="links examples">
  Examples: 
  {#each range(numExamples, 1) as example}
  <a href="#{pageid}{example}">{example}</a>
  {/each}
</div>

<style>
  .pagetitle {
    margin-left: 0;
  } 

  .links {
    display: flex;
    gap: 1.4em;
    margin-left: 0em;
  }

  .examples {
    margin-top: 1em;
    margin-bottom: 2em;
  }
</style>
