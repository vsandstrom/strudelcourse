<script lang="ts">
  export let commands: {cmd: string, link: string, desc: string}[];
  export let syntaxes: {cmd: string, link: string, desc: string}[];

console.log("vocabulary loaded")

</script>

<h3>Vocabulary</h3>
<div id="vocabulary">
  <h4>Commands: </h4>
    <ul>
    {#each commands as c}
      <li>
        <b><a href="#{c.link}">{c.cmd}</a></b> - {c.desc}
      </li> 
    {/each}
    </ul>

  <h4>Syntax: </h4>
    <ol>
      {#each syntaxes as s}
      <li>
        <b><a href="#{s.link}">{s.cmd}</a></b> - {s.desc}
      </li> 
      {/each}
    </ol>
</div>

<style>
  #vocabulary {
    margin-left: 1.5em;
  }

  ol li, ul li {
    margin-bottom: 0.6em;
  }
</style>
