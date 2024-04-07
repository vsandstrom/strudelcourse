
<script lang="ts">
	import Page from "../routes/+page.svelte";

let url = '';

let mp3 = '< Copy link from here >';

$: output = mp3;

const post = async (url: string) => {
  console.log(url);
  const res: Response = await fetch(url)
  const t: string = await res.text();
  console.log(t);
  let dp = new DOMParser();
  return dp.parseFromString(t, 'text/html');
}

const parse = async () => {
  const valid = /(https:\/\/?(www.)?)?(freesound.org\/people\/.+\/sounds\/\d+(\/?))/g;
  if (valid.test(url)) {
    const doc = await post(url);
    const val = doc.getElementById("share-link")
                   ?.getAttribute("data-static-file-url");
    console.log(val);
    if (val) {
      mp3 = val;
    }
  }
}
</script>

<div>
  <h3>
    Freesound Parser
  </h3>
  <div>
    <p>
      There is a great website called <a href="https://freesound.org">
      freesound.org</a> where you can find all sorts of different sounds that
      people around the world have recorded. We can use these in <b
      class="cmd">Strudel</b>, but we need to do some things to make it work.
    </p>
    <p> 
      When you found a sound that you like, you copy the address to the page, <i>(
      the address bar at the top of you web browser )</i>. This link cannot be
      used in <b class="cmd">Strudel</b> directly, we have to transform it. Below
      is a tool that can do just that. Paste it in the text field, it
      will do some magic and post the useful link below.
    
    </p>
  </div>
  <div id="fsp">
  <div>
    <input 
      id="freesoundparser" 
      type="text"
      bind:value={url}
      on:change={parse} 
      placeholder="Paste link from freesound.org here"
    >
  </div>
  <div >
    <p id="output">{output}</p>
  </div>
  </div>
</div>

<style>
#fsp {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 15%;
  margin-right: 15%;
}


#freesoundparser {
  width: 85%;
  height: 2em;
  font-family: monospace;
  font-size: 1.2em;
  padding-left: 0.5em;
}

#output {
  display: flex;
  font-family: monospace;
  font-size: 1.2em;
}

.cmd {
  font-family: monospace;
  font-size: 1.2em;
}
</style>
