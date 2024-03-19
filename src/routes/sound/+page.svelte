<script lang="ts">
  import Strudel from "$lib/Strudel.svelte";
  import Header from "$lib/Header.svelte";
  import data from "$lib/strudel.json";
  type Strdata = typeof data;
  const examples = data["sound"];
</script>

<div>
  <Header />
  <h3 class="pagetitle" id="sound">SOUND(  )</h3>
  <div class="links">
    <a href="#vocabulary">Vocabulary</a>
    <a href="#drums">Drum cheat-sheet</a>
  </div>
  <div class="links examples">
    Examples: 
    <a href="#sound1">1</a>
    <a href="#sound2">2</a>
    <a href="#sound3">3</a>
    <a href="#sound4">4</a>
  </div>


  <div id="sound1">
    <p>
      1. In this first example we are using some built in drums to create a
      simple rhythm.<br> The weird notation below, the <b>bd</b> and the
      <b>sd</b> are often used to abbreviate drums, as in <b>B</b>ass<b>D</b>rum
      and <b>S</b>nare<b>D</b>rum. </p>
    <p>
      Everything within the quotes <b id="quotes-pattern">(" ")</b> is interpreted as a pattern. The space
      between each word is there so the program knows how many sounds is in the
      pattern.
    </p>
  </div>
  <Strudel title="sound()" url={examples[0]} />

  <div id="sound2">
    <p>
      2. Others that we can use per default are <b>cb</b> and <b>hh</b> among
      others, which stand for <b>C</b>ow<b>B</b>ell and <b>H</b>i<b>H</b>at.
      These are common names for the different drums and cymbals of a drum kit.
    </p>
    <table id="drums">
      <thead>
      <tr>
        <th>Real drum names</th><th>Strudel short-hand</th>
      </tr>
      </thead>
      <tbody id="drumnames">
      <tr>
        <td><b>B</b>ass<b>D</b>rum</td> <td>bd</td>
      </tr>
      <tr>
        <td><b>S</b>nare<b>D</b>rum</td> <td>sd</td>
      </tr>
      <tr>
        <td><b>RIM</b>shot</td> <td>rim</td>
      </tr>
      <tr>
        <td><b>H</b>i<b>H</b>at (closed)</td> <td>hh</td>
      </tr>
      <tr>
        <td><b>O</b>pen hi<b>H</b>at</td> <td>oh</td>
      </tr>
      <tr>
        <td><b>CR</b>ash</td> <td>cr</td>
      </tr>
      <tr>
        <td><b>R</b>i<b>D</b>e</td> <td>rd</td>
      </tr>
      <tr>
        <td><b>H</b>igh, <b>M</b>edium and <b>L</b>ow <b>T</b>oms </td> <td>ht, mt, lt</td>
      </tr>
      <tr>
        <td><b>C</b>ow<b>B</b>ell</td> <td>cb</td>
      </tr>
      </tbody>
    </table>
    <p id="sound2-2">
      In this example we have added the brackets <b>([  ])</b>. They are used for
      grouping sounds into sub-patterns. All the sounds inside the <b>[  ]</b>
      will play within the time it takes for one sound outside the <b>[  ]</b>
      to play.
    </p>
    <p id="sound2-3">
      The <b>.gain( )</b> command on the end of the line is a useful command. It
      is used to ajust the volume of what is playing. The regular value, the one
      that is on by default, is <b>1</b>. If you set the gain to <b>0.5</b>,
      that is the half of the volume, and set to <b>2</b> we double the volume.
      With the gain set to <b>0.0</b> makes it silent.
    </p>
  </div>
  <Strudel title="sound()" url={examples[1]} />

  <div id="sound3">
    <p>
      3. There is also the comma <b>(,)</b> which makes sounds play on top of
      eachother at the same time. Notice the difference between grouping with
      a space: <b>[hh cb]</b> and grouping with a comma: <b>[bd,
      hh]</b>.
    </p>
  </div>
  <Strudel title="sound()" url={examples[2]} />

  <div id="sound4">
    <p>
      4. There is one more thing. To repeat a sound, you can use the
      multiplication symbol <b>(*)</b>. Combined with a number <b>(*5)</b> and written
      close to the name of a sound, it tells the sound to play that many times
      during its normal duration.
    </p>
    <p id="sound4-2">
      To help visualize this, there is a tool called <b>{".pianoroll( )"}</b> that we
      can use. It makes a graphical representation of the sounds, and it is more
      easy to see what each of the different sound are doing. It is special in
      that you need to write <b>{".pianoroll({fold: 1})"}</b> to make it work.
    </p>
  </div>
  <Strudel title="sound()" url={examples[3]} height={320} />

  <h3>Vocabulary:</h3>
  <div id="vocabulary">
    <h4>Commands:</h4>
    <ul>
      <li>
        <b><a href="#sound">sound( )</a></b> - the command we run to play sounds.
      </li>
      <li>
        <b><a href="#sound2-3">gain( )</a></b> - the volume command. 
      </li>
      <li>
        <b><a href="#sound4-2">{"pianoroll( )"}</a></b> - visualize the patterns.
      </li>
    </ul>
    <h4>Syntax:</h4>
    <ol>
      <li> <b><a href="#sound1">" "</a></b> - grouping sounds into a pattern. </li>
      <li> <b><a href="#sound2-2">[ ]</a></b> - grouping sounds into a sub-pattern. </li>
      <li> <b><a href="#sound3">,</a></b> - allowing sounds to be played simultaneously </li>
      <li> <b><a href="#sound4">*</a></b> - repeating a perticular sound (ex: "bd*4") </li>
    </ol>
  </div>
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

/* .links { */
/*   display: flex; */
/*   gap: 1.2em; */
/*   margin-left: 0em; */
/* } */
/**/
/* .examples { */
/*   margin-top: 1em; */
/*   margin-bottom: 2em; */
/* } */

</style>
