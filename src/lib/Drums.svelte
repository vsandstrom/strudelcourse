<script lang="ts">
  import {onMount} from 'svelte';
	import type { Writable } from "svelte/store";
  export let ctxstore: Writable<AudioContext|null>;
  let ctx = $ctxstore!;
  let out: AudioDestinationNode = ctx.destination;
  
  const dp =
    "https://raw.githubusercontent.com/" +
    "ritchse/tidal-drum-machines/main/" +
    "machines/EmuSP12/emusp12-";

  type drumtypes = 
    "bd" | "sd" | "rim" | "cp" |
    "hh" | "oh" |  "cr" | "rd" |
    "lt" | "mt" |  "ht" | "cb"; 

  const snds: {[key in drumtypes]: HTMLAudioElement} = {
    bd:  new Audio(`${dp}bd/Bassdrum-01.wav`  ),
    sd:  new Audio(`${dp}sd/Snaredrum-01.wav` ),
    rim: new Audio(`${dp}rim/zRim Shot-01.wav`),
    cp:  new Audio(`${dp}cp/Clap.wav`         ),
    hh:  new Audio(`${dp}hh/Hat Closed-01.wav`),
    oh:  new Audio(`${dp}oh/Hhopen1.wav`      ),
    cr:  new Audio(`${dp}cr/Crash.wav`        ),
    rd:  new Audio(`${dp}rd/Ride.wav`         ),
    lt:  new Audio(`${dp}lt/Tom L-01.wav`     ),
    mt:  new Audio(`${dp}mt/Tom M-01.wav`     ),
    ht:  new Audio(`${dp}ht/Tom H-01.wav`     ),
    cb:  new Audio(`${dp}cb/Cowbell.wav`      ),
  }

  const play = (e: MouseEvent) => {
    let el = e.target as HTMLElement;
    console.log(snds[el.id as drumtypes]);
    snds[el.id as drumtypes].play();
  }

  console.log("drum sheet loaded");
  
  onMount(() => {
    const audiostarter = document.getElementById("audiobtn");
    audiostarter?.addEventListener("click", () => {
      if (ctx.state === "suspended") {
        ctx.resume().then(()=>{
          console.log(ctx.state);
        });
      }
    })
  });

</script>

<table id="drums">
  <thead> 
    <tr>
      <th>Real drum names</th>
      <th>Strudel short-hand names</th>
    </tr> 
  </thead>

  <tbody id="drumnames">
    <tr> 
      <td><b>B</b>ass<b>D</b>rum</td>
      <!-- <td>bd</td>  -->
      <td><button on:click={play} id="bd">bd</button></td>
    </tr>

    <tr> 
      <td><b>S</b>nare<b>D</b>rum</td>
      <!-- <td>sd</td>  -->
      <td><button on:click={play} id="sd">sd</button></td>
    </tr>

    <tr> 
      <td><b>RIM</b>shot</td>
      <!-- <td>rim</td>  -->
      <td><button on:click={play} id="rim">rim</button></td>
    </tr>
    
    <tr> 
      <td>Hand<b>C</b>la<b>P</b></td>
      <!-- <td>cp</td>  -->
      <td><button on:click={play} id="cp">cp</button></td>
    </tr>

    <tr> 
      <td>Closed <b>H</b>i<b>H</b>at, <b>O</b>pen hi<b>H</b>at </td> 
      <!-- <td>hh, oh</td>  -->
      <td>
        <button on:click={play} id="hh">hh</button>
        <button on:click={play} id="oh">oh</button>
      </td>
    </tr>

    <tr> 
      <td><b>CR</b>ash Cymbal</td>
      <!-- <td>cr</td>  -->
      <td><button on:click={play} id="cr">cr</button></td>
    </tr>

    <tr> 
      <td><b>R</b>i<b>D</b>e Cymbal</td>
      <!-- <td>rd</td>  -->
      <td><button on:click={play} id="rd">rd</button></td>
    </tr>

    <tr> 
      <td><b>L</b>ow, <b>M</b>edium and <b>H</b>igh <b>T</b>oms </td>
      <!-- <td>lt, mt, ht</td>  -->
      <td>
      <button on:click={play} id="lt">lt</button>
      <button on:click={play} id="mt">mt</button>
      <button on:click={play} id="ht">ht</button></td>
    </tr>

    <tr> 
      <td><b>C</b>ow<b>B</b>ell</td>
      <!-- <td>cb</td>  -->
      <td><button on:click={play} id="cb">cb</button></td>
    </tr>
  </tbody>
</table>

<style>
  table {
    width: 80%;
    margin: 3em 10% 4em 10%;
  }

  th {
    text-align: left;
    font-size: 1.2em;
    border-bottom:groove;
    padding: 0.4em 0;
    margin-left: -0.2em;
  }

  td:nth-child(2) {
    font-weight:bold;
   }

  td button {
    height: 28px;
    font-weight:bold;
    margin-right: 0.8em;
    max-width: 100%;
    min-width: calc(32% - 0.8em - 0.8em - 0.8em);
  }

  .audioctl{
    display: flex;
    /* flex-direction: row; */
    margin-top: 1em;
    margin-left: 2em;
    width: 100%;
    height: 30px;
    gap: 2em;
  }
</style>
