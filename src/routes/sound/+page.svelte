<script lang="ts">
  import Strudel from "$lib/Strudel.svelte";
  import Header from "$lib/Header.svelte";
  import data from "$lib/strudel.json";
  type Strdata = typeof data;
  const examples = data["sound"];
</script>

<div>
<Header></Header>
  <h3 class="pagetitle">SOUND(  )</h3>
  <div>
    <p>
      1. In this first example we are using some built in drums to create a
      simple rhythm.<br> The weird notation below, the <b>bd</b> and the
      <b>sd</b> are often used to abbreviate drums, as in <b>B</b>ass<b>D</b>rum
      and <b>S</b>nare<b>D</b>rum. </p>
    <p>
      Everything within the quotes <b>(" ")</b> is interpreted as a pattern. The space
      between each word is there so the program knows how many sounds is in the
      pattern.
    </p>
  </div>
  <Strudel title="sound()" url={examples[0]} />
  <div>
    <p>
      2. Others that we can use per default are <b>cb</b> and <b>hh</b> among others,
      which stand for <b>CowBell</b> and <b></b>. These are common names for the
      different drums and cymbals of a drum kit.
      </p>
    <p>
      In this example we have added the brackets <b>([  ])</b>. They are used for
      grouping sounds into sub-patterns. All the sounds inside the <b>[  ]</b>
      will play within the time it takes for one sound outside the <b>[  ]</b>
      to play.
    </p>
  </div>
  <Strudel title="sound()" url={examples[1]} />
  <div>
    <p>
      3. There is also the comma <b>(,)</b> which makes sounds play on top of
      eachother at the same time. Notice the difference between grouping with
      a space: <b>[hh cb]</b> between and grouping with a comma: <b>[bd,
      hh]</b>.
    </p>
  </div>
  <Strudel title="sound()" url={examples[2]} />
  <div>
    <p>
      4. There is one more thing. To repeat a sound, you can use the
      multiplication symbol <b>(*)</b>. Combined with a number <b>(*5)</b> and written
      close to the name of a sound, it tells the sound to play that many times
      during its normal duration.
    </p>
  </div>
  <Strudel title="sound()" url={examples[3]} />
  <div>
    <p>
      5. Just for fun, here is a strudel-program using all of the above
      techniques to make a drum beat.
    </p>
  </div>
  <Strudel title="sound()" url={examples[3]} />
  <h3>Concepts:</h3>
  <div class="concepts">
    <h4>Commands:</h4>
      <ul><li>
        <b>sound()</b> - the command we run to use the built-in sounds.
      </li></ul>
    <h4>Syntax:</h4>
    <ol>
      <li> <b>" "</b> - grouping sounds into a pattern. </li>
      <li> <b>[ ]</b> - grouping sounds into a sub-pattern. </li>
      <li> <b>,</b> - allowing sounds to be played simultaneously </li>
      <li> <b>*</b> - repeating a perticular sound (ex: "bd*4") </li>
    </ol>
  </div>
</div>

<style>
.concepts {
  margin-left: 1.5em;
}
</style>
