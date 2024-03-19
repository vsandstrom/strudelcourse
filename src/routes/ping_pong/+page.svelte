<script lang="ts">
  import Strudel from "$lib/Strudel.svelte";
  import Header from "$lib/Header.svelte";
  import data from "$lib/strudel.json";
  type Strdata = typeof data;
  const examples = data["pingpong"];
</script>

<div>
  <Header />
  <h3 class="pagetitle">PING PONG</h3>
  <div class="links">
    <a href="#vocabulary">Vocabulary</a>
  </div>
  <div class="links examples">
    Examples: 
    <a href="#pingpong1">1</a>
  </div>

  <div id="pingpong1">
    <p>
      5. Just for fun, here is a strudel-program using all of the techniques we
      learned at the "sound( )"-page. It contains 5 different examples which takes the previous example and adds something to it. To run each example, remove the <b>'//'</b> in front of each row of text.
    </p>
      <ol>
        <li>
          The first example plays 4 <b>B</b>ass<b>D</b>rums.
        </li>
        <li>
          The second uses sub-patterns to play a <b>B</b>ass<b>D</b>rum 
          and a <b>S</b>nare<b>D</b>rum at the same time.
        </li>
        <li>
          Adding <b>H</b>i<b>H</b>ats between the other drums from the above
          example.
        </li>
        <li>
          Adding even more <b>H</b>i<b>H</b>ats, now using sub-patterns to 
          play at the same time as the <b>B</b>ass<b>D</b>rum 
          <b>S</b>nare<b>D</b>rum.
        </li>
        <li>
          This last example is the most complex, repeating some drums with the 
          <b>'*'</b>, and even making sub-patterns WITHIN sub-patterns! 
        </li>
      </ol>
      <p>
          The possibilities are endless!
      </p>
  </div>
  <Strudel title="sound()" url={examples[0]} height={800} />

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

#concepts {
  margin-left: 1.5em;
}

ol > li {
  margin-bottom: 0.6em;
}

table {
  width: 80%;
  margin: 3em 2em 4em 2em;
}

th {
  text-align: left;
  font-size: 1.2em;
  border-bottom:groove;
  padding: 0.4em 0;
  margin-left: -0.2em;
}

td:last-child {
  font-weight:bold;
  
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
