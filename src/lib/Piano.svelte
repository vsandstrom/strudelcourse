<script lang="ts">
  import {onMount} from 'svelte';
	import type { Gain } from 'tone';
  export let ctx: AudioContext;
  let out = ctx.destination;

  let playing = Array.from({length:13}, (_, i) =>  false);

  type notes = "c" | "db" | "d" | "eb" | "e" | "f" | "gb" | "g" | "ab" | "a" | "bb" | "b" | "c2";
  const blkkeys: string[] = ["db", "eb", "gb", "ab", "bb"];
  const whtkeys: string[] = [ "c", "d", "e", "f", "g", "a", "b", "c2" ];

  const t = { "c": 0, "db":1, "d":2, "eb":3, "e":4, "f":5, "gb":6, "g":7, "ab":8, "a":9, "bb":10, "b":11, "c2":12, };
  const c = { "c":"C", "db":"Db", "d":"D", "eb":"Eb", "e":"E", "f":"F", "gb":"Gb", "g":"G", "ab":"Ab", "a":"A", "bb":"Bb", "b":"B", "c2":"C"};

  const freq: number[] = [
    130.81, // C
    138.59, // Db 
    146.83, // D  
    155.56, // Eb 
    164.81, // E  
    174.61, // F  
    185.00, // Gb 
    196.00, // G  
    207.65, // Ab 
    220.00, // A  
    233.08, // Bb 
    246.94, // B  
    261.63  // C2 
  ];
  
  let gainopt: GainOptions = {
    gain: 0.0, 
    channelCount: 1,
    channelCountMode: "max",
    channelInterpretation: "speakers"
  };
  
  let g: GainNode[] = Array.from({length: 13}, (_, i) => {
    let node = new GainNode(ctx, gainopt);
    node.connect(out);
    return node;
  });

  const synth: OscillatorNode[] = Array.from({length: 13}, (_, i) => {
      let s = new OscillatorNode(ctx);
      s.type = "triangle";
      s.frequency.setValueAtTime(freq[i], ctx.currentTime); 
      s.connect(g[i]);
      s.start();
      return s;
    }
  );

onMount(() => {
    const audiostarter = document.getElementById("audiobtn");
    audiostarter?.addEventListener("click", () => {
      if (ctx.state === "suspended") {
        ctx.resume().then(()=>{
          console.log(ctx.state);
        });
      }
    });
  })


const release = (g: GainNode, t: number, rel: number) => {
  g.gain.cancelScheduledValues(t);
  g.gain.linearRampToValueAtTime(0.0, t+rel);
}

const attack = (g: GainNode, t: number, curve: Float32Array, atk: number) => {
  g.gain.cancelScheduledValues(t);
  g.gain.setValueCurveAtTime(curve, t, atk);
}

const noteoff = (e: Event) => {
  e.stopPropagation();
  const el = e.target as HTMLElement;
  let id = el.id;
  if (!id) {
    // @ts-ignore
    id = el.parentNode?.parentElement?.id;
  }
  g[t[id as notes]].gain.linearRampToValueAtTime(0.0, ctx.currentTime+0.4);
};

const noteon = (e: Event) => {
  e.stopPropagation();
  const el = e.target as HTMLElement;
  let id = el.id;
  if (!id) {
    // @ts-ignore
    id = el.parentNode?.parentElement?.id;
  }
  g[t[id as notes]].gain.linearRampToValueAtTime(0.4, ctx.currentTime+1);
};

const kbnoteon = (e: KeyboardEvent) => {
  e.stopPropagation();
  let time = ctx.currentTime;
  let curve = new Float32Array([0.01, 0.4]);
  let i = -1;
  switch (e.key) {
    case "a": i = 0; break;
    case "w": i = 1; break;
    case "s": i = 2; break; 
    case "e": i = 3; break; 
    case "d": i = 4; break; 
    case "f": i = 5; break;
    case "t": i = 6; break; 
    case "g": i = 7; break; 
    case "y": i = 8; break;
    case "h": i = 9; break;
    case "u": i = 10; break;
    case "j": i = 11; break;
    case "k": i = 12; break;
  };
  if (!playing[i]) {
    attack(g[i], time, curve, 0.1);
    playing[i] = true;
  }
  console.log(e.key.toString());
}

const kbnoteoff = (e: KeyboardEvent) => {
  e.stopPropagation();
  let time = ctx.currentTime;
  let i = -1;
  switch (e.key) {
    case "a": i = 0; break;
    case "w": i = 1; break;
    case "s": i = 2; break; 
    case "e": i = 3; break; 
    case "d": i = 4; break; 
    case "f": i = 5; break;
    case "t": i = 6; break; 
    case "g": i = 7; break; 
    case "y": i = 8; break;
    case "h": i = 9; break;
    case "u": i = 10; break;
    case "j": i = 11; break;
    case "k": i = 12; break;
  };
  if (playing[i]) {
    release(g[i], time, 0.4);
    playing[i] = false;
  }
  console.log(e.key.toString());
}

const keyson = (e: Event & {currentTarget: EventTarget & HTMLInputElement}) => {
  e.preventDefault();
  let el = e.currentTarget;
  if (el.checked){
    document.addEventListener("keypress", kbnoteon);
    document.addEventListener("keyup", kbnoteoff);
  }else {
    document.removeEventListener("keypress", kbnoteon);
    document.removeEventListener("keyup", kbnoteoff);
  }
};

</script>

<div>
  <div class="piano">
    <div class="key-row" id="black">
      <div class="blank"> </div>
      {#each [
      {id: "db", text: "C# Db"}, 
      {id: "eb", text: "D# Eb"}] as bk}
      <div class="key top" id={bk.id}
        on:mousedown={noteon} 
        on:mouseup={noteoff}
        on:mouseleave={noteoff}>
        <b><p
        on:mousedown={noteon} 
        on:mouseup={noteoff}
        on:mouseleave={noteoff}>
        {bk.text}</p><b>
      </div>
      {/each}

      <div class="blank gap"> </div>

      {#each [
      {id: "gb", text: "F# Gb"}, 
      {id: "ab", text: "G# Ab"}, 
      {id: "bb", text: "A# Bb"}] as bk}
      <div class="key top" id={bk.id}
        on:mousedown={noteon} 
        on:mouseup={noteoff}
        on:mouseleave={noteoff}>
        <b><p
        on:mousedown={noteon} 
        on:mouseup={noteoff}
        on:mouseleave={noteoff}>
        {bk.text}</p><b>
      </div>
      {/each}

      <div class="blank"> </div>
    </div>

    <div class="key-row" id="white">
      {#each [
      {id: "c", text: "C"}, 
      {id: "d", text: "D"},
      {id: "e", text: "E"}, 
      {id: "f", text: "F"},
      {id: "g", text: "G"}, 
      {id: "a", text: "A"},
      {id: "b", text: "B"}, 
      {id: "c2", text: "C"}] as wt}
      <div class="key" id={wt.id} 
        on:mousepressed={noteon} 
        on:mouseup={noteoff}
        on:mouseleave={noteoff}>
        <b><p
        on:mousedown={noteon} 
        on:mouseup={noteoff}
        on:mouseleave={noteoff}>
        {wt.text}</p></b> 
      </div> 
      {/each}
    </div>
  </div>
  <div class="audioctl">
    <button id="audiobtn"></button>
    <input type="checkbox" on:change={keyson} name="keyboardon" id="kbbtn">
  </div>
</div>

<style>
.key-row {
  display: flex;
  flex-direction: row;
  width: 80%;
}

.key {
  border: solid;
  height: 8.5em;
  width: 5em;
  text-align: center;
  user-select: none;
  align-content: center;
  justify-content: center;
  border-radius: 14px;
  font-size: 1.2em;
}

.top {
  /* padding: 2em 0.9em; */
  background-color: black;
  color: white;

}

.blank {
  margin: 1.6em;
}

.gap {
  margin: 3.2em;
}

.audioctl{
  width: 20%;
  height: 30px;
}

</style>
