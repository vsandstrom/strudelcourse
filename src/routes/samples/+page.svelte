<script lang="ts">
  import { onMount } from "svelte";
  import Strudel from "$lib/Strudel.svelte";
  import Header from "$lib/Header.svelte";
  import data from "$lib/strudel.json";
	import SubHeader from "$lib/SubHeader.svelte";
  import Vocabulary from "$lib/Vocabulary.svelte";
  import FreeSound from "$lib/FreeSound.svelte";
  import imgsrc from "$lib/zeroidx.png";
	import Page from "../+page.svelte";
	import ZeroIndex from "$lib/ZeroIndex.svelte";
  const examples = data["samples"];
  let mounted = false;

  $: mount = mounted;

  const voc = {
    cmd: [ 
      { cmd: "samples()", link: "samples", 
        desc: "A command that helps you import sounds to use in your compositions" }, 
      { cmd: ".slice()", link: "samples1-2", desc: `Cuts a sound up in several
        pieces and lets you play them with a pattern. \ 
        <br>&emsp;&emsp;&emsp;&emsp; <i>[ ex: </i><b \
        style="font-family:monospace;font-size:1.2em">sound(\"snd\").slice(4,\
        ${"\"0 1 2 3\""})</b><i> ]</i>`},
      { cmd: ".splice()", link: "samples1-3", desc: `Same as <b
      style="font-family:monospace;font-size:1.2em">.slice()</b>, but stretches
      the sound to fit the pattern.`
      },
      { cmd: ".room()", link: "samples3-2", 
        desc: `Makes the pattern sound as if it is in a large room. It adds
        reverb.`
      },
      { cmd: ".distort()", link: "samples3-3", 
        desc: `Makes the pattern sound as if it is distorted. It can sound more warm,
        or it can sound completely broken.`
      },
      { cmd: ".slider()", link: "samples3-4", 
        desc: `Creates a slider that can change values inside the code on the
        fly. Useful for when trying out if patterns sound good together, or when
        performing.`
      }

    ],
    stx:[ 
      { cmd: "@", link: "samples2-3", desc: `Used in a pattern it can change the
      duration of a subpattern or sound. <b
      style="font-family:monospace;font-size:1.2em">bd@2</b> makes duration of the bass drum
      twice as long. <b
      style="font-family:monospace;font-size:1.2em">sd@0.5</b> makes the
      duration of the snare drum
      half as long. 
      <br>&emsp;&emsp;&emsp;&emsp; \
      <i>[ ex: </i><b style="font-family:monospace;font-size:1.2em">sound(\"bd
      sd@2 bd sd@0.5\")</b><i> ]</i>`},
      { cmd: "!", link: "samples2-2", desc: `Similar to the <b
      style="font-family:monospace;font-size:1.2em">*</b> operator, but it
      repeats a subpattern or sound instead of subdivide them. 
      <br>&emsp;&emsp;&emsp;&emsp; \
      <i>[ listen to the difference: </i><b
      style="font-family:monospace;font-size:1.2em">sound(\"bd*4 bd!4\")</b><i> ]</i>`},
    ]
  }

  onMount(() => {
    mounted = true;
  })

</script>

<div>
  <Header />
  {#if mount}
    <SubHeader 
      pageid={"samples"}
      numExamples={3}
      extras={[
        {id: "freesound", content: "Freesound -> Strudel" },
        {id: "zeroindex", content: "Zero Indexing"}
      ]}
    />
  {/if}

  <div id="samples1">
    <p>
      1. The <b class="cmd">samples()</b> command is a tool to allow you to use
      your own sounds in your compositions. 

      There as several ways to use sounds, but we are going to use a technique using the website <a
      href="https://freesound.org"> freesound.org</a>. There you can find all sorts of different sounds that
      people around the world have recorded. 
    </p>
    <div id="freesound">
    <FreeSound />
    </div>
    <p id="samples1-2">
      Below we have an example using a very famous drum sound called the <b
      class="cmd">Amen Break</b>, which was a foundation for several musical
      genres, most notably <b class="cmd">Jungle</b> and <b class="cmd">Drum and
      Bass</b>. We use the command <b class="cmd">.slice</b> to cut the sound
      to even pieces, and then play them using a pattern.
    </p> 
    <p id="samples1-3">
      A good exercise would be to go to <a
      href="https://freesound.org"> freesound.org</a> and search for a
      drum sample to use. Try it out, and switch between <b
      class="cmd">.slice()</b> and another similar command, <b class="cmd">.splice()</b>
      and listen to the difference.
    </p>
    <p>
      There is a quirk though, and you might have already noticed it. If we have
      4 slices, we use the numbers 0 to 3. Why not 1 to 4? 
  </p>
  </div>
  <Strudel 
    title="samples()" 
    url={examples[1]}
    height={400}
  />
   
    <div id="freesound">
    <ZeroIndex />
    <!-- <h3>Zero Index</h3> -->
    <!-- <p id="zeroindex"> -->
    <!--   There is a quirk though, and you might have already noticed it. If we have -->
    <!--   4 slices, we use the numbers 0 to 3. Why not 1 to 4?  -->
    <!-- </p> -->
    <!-- <p> -->
    <!--   Imagine a youtube video that you want to play from the beginning, you -->
    <!--   would play it from <b class="cmd">00:00</b>, which is position <b -->
    <!--   class="cmd">0</b>. The first slice is the part between <b -->
    <!--   class="cmd">0</b> and <b class="cmd">1</b>. Then the fourth slice would be -->
    <!--   between <b class="cmd">3</b> and <b class="cmd">4</b>. If we try to play -->
    <!--   something from the position of <b class="cmd">4</b>, we are trying to -->
    <!--   continue playing the clip after it has ended. There is nothing there. -->
    <!-- </p> -->
    <!-- <img src={imgsrc} alt="Graphic explaining zero index"> -->
    </div>

    <div id="samples2">
      <p>
      2. In previous examples, if we wanted to repeat a sound or note, we had to
      spell it out, each sound or note at a time. We did have the <b
      class="cmd">*</b> symbol, which creates a subpattern of one sound or
      note, but that is not equal to repetition.
      </p>
      <p id="samples2-2">
        There is an symbol that will make a sound repeat as if we wrote it
        several times in a row. It is the <b class="cmd">!</b> symbol. If you
        have a melody which repeats the same note, as <b class="cmd">"A A A
        A"</b>, you can use the <b class="cmd">!</b> to make the code shorter
        and more compact like this: <b class="cmd">"A!4"</b>. The two does the
        same thing.
      </p>
      <p id="samples2-3">
        When we have wanted to let a sound ring, or add space after it, we have
        been using the <b class="cmd">~</b> symbol, the musical rest. This is
        great if you actually want silence, but there is a symbol that makes a
        sound have a longer duration that we can use instead in certain cases.
        It is the <b class="cmd">@</b> symbol, and you tell it how many beats
        you want a particular sound to sound. For example, <b class="cmd">"A
        ~"</b> has the same duration as <b class="cmd">"A@2"</b>, but where the
        musical rest adds silence, the <b class="cmd">@</b> makes the note
        extend and sound longer.
      </p>
    </div>
    <Strudel
      title="sample()"
      url={examples[2]}
      height={560}
    />
    
    <div id="samples3">
    <p>
      3. This last example shows how a song could be created using only samples.
      This way we can choose any sound we like and make a song out of it. There
      are even entire genres of music where the songs are created from sampling other
      pieces of music. This can sometimes lead to legal issues of <b
      class="cmd">copyright©</b>. That is why we use <a
      href="https://freesound.org">freesound.org</a>, because the sounds there are
      free to use.
    </p>
    <p id="samples3-2">
      There are several new commands in the example below that could be fun to
      know. The <b class="cmd">.room()</b> command adds a bit of reverb to the
      pattern, as if it were played in a large room. The higher the value the
      larger the room.
    </p>
    <p id="samples3-3">
      The <b class="cmd">.distort()</b> adds a bit of distortion to a pattern.
      It can sound a bit warmer, or it can sound completely broken, depending on
      how high you set its value.
    </p>
    <p id="samples3-4">
      Lastly there is the <b class="cmd">.slider()</b> command, which produces
      an actual slider inside your code, which you can move. This is useful in a
      performance, when you might not want everything to sound all the time, or
      if you want to change something in the code on the fly. We have only used
      it within the <b class="cmd">.gain()</b> below, but it can be used with a
      lot of things, like the <b class="cmd">.room()</b> or the <b
      class="cmd">.distort()</b> commands. It needs 3 values, a starting value,
      a minimum value and a maximum value.
    </p>
    </div>
    <Strudel
      title="sample()"
      url={examples[3]}
      height={700}
    />

  {#if mount}
    <Vocabulary 
      commands={voc.cmd}
      syntaxes={voc.stx}
    />
  {/if}
</div>

<style>
  .cmd {
    font-family: monospace;
    font-size: 1.2em;
  }

  img {
    width: 100%;
    margin-top: 2em;
    margin-bottom: 5em;
  }
</style>
