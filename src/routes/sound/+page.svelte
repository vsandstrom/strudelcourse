<script lang="ts">
	import Strudel from '$lib/Strudel.svelte';
	import Header from '$lib/Header.svelte';
	import SubHeader from '$lib/SubHeader.svelte';
	import Vocabulary from '$lib/Vocabulary.svelte';
	import Drums from '$lib/Drums.svelte';

	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import { type Writable } from 'svelte/store';

	let ctxstore: Writable<AudioContext | null> = writable(null);
	const initCtx = () => {
		const AudioContext = window.AudioContext;
		let ctx = new AudioContext();
		ctxstore.set(ctx);
		return ctxstore;
	};

	onMount(() => initCtx());

	const examples = data['sound'];
	import data from '$lib/strudel.json';

	const voc = {
		cmd: [
			{ cmd: 'sound()', link: 'sound', desc: 'the command we run to play sounds.' },
			{ cmd: '.gain()', link: 'sound2-3', desc: 'the volume command.' },
			{ cmd: '.pianoroll()', link: 'sound4-2', desc: 'visualizes the patterns.' }
		],
		stx: [
			{ cmd: '" "', link: 'sound1', desc: 'grouping sounds into a pattern' },
			{ cmd: '[ ]', link: 'sound2-2', desc: 'grouping sounds into a sub-pattern' },
			{ cmd: ',', link: 'sound3', desc: 'allowing sounds to be played simultaneously' },
			{ cmd: '*', link: 'sound4', desc: 'repeating a particular sound (ex: "bd*4")' }
		]
	};
</script>

<div>
	{#if $ctxstore}
		<SubHeader
			pageid={'sound'}
			numExamples={4}
			extras={[{ id: 'drums', content: 'Drum cheat-sheet' }]}
		/>
	{/if}

	<div id="sound1">
		<p>
			1. In this first example we are using some built in drums to create a simple rhythm.<br /> The
			weird notation below, the <b class="cmd">bd</b> and the
			<b class="cmd">sd</b> are often used to abbreviate drums, as in <b>B</b>ass<b>D</b>rum and
			<b>S</b>nare<b>D</b>rum.
		</p>
		<p>
			Everything within the quotes <b class="cmd" id="quotes-pattern">" "</b> is interpreted as a pattern.
			The space between each word is there so the program knows how many sounds is in the pattern.
		</p>
	</div>
	<Strudel title="sound()" url={examples[0]} />

	<div id="sound2">
		<p>
			2. Others that we can use per default are <b class="cmd">cb</b> and <b class="cmd">hh</b>
			among others, which stand for <b>C</b>ow<b>B</b>ell and <b>H</b>i<b>H</b>at. These are common
			names for the different drums and cymbals of a drum kit:
		</p>

		{#if $ctxstore}
			<Drums {ctxstore} />
		{/if}

		<p id="sound2-2">
			In this example we have added the brackets <b class="cmd">([ ])</b>. They are used for
			grouping sounds into sub-patterns. All the sounds inside the <b class="cmd">[ ]</b>
			will play within the time it takes for one sound outside the <b class="cmd">[ ]</b>
			to play.
		</p>
		<p id="sound2-3">
			The <b class="cmd">.gain( )</b> command on the end of the line is a useful command. It is used
			to ajust the volume of what is playing. The regular value, the one that is on by default, is
			<b class="cmd">1</b>. If you set the gain to <b class="cmd">0.5</b>, that is the half of the
			volume, and set to <b class="cmd">2</b> we double the volume. With the gain set to
			<b class="cmd">0.0</b> makes it silent.
		</p>
	</div>
	<Strudel title="sound()" url={examples[1]} />

	<div id="sound3">
		<p>
			3. There is also the comma <b class="cmd">(,)</b> which makes sounds play on top of eachother
			at the same time. Notice the difference between grouping with a space:
			<b class="cmd">[hh cb]</b>
			and grouping with a comma: <b class="cmd">[bd, hh]</b>.
		</p>
	</div>
	<Strudel title="sound()" url={examples[2]} />

	<div id="sound4">
		<p>
			4. There is one more thing. To repeat a sound, you can use the multiplication symbol <b
				class="cmd">'*'</b
			>. Combined with a number <b class="cmd">'*5'</b> and written close to the name of a sound, it
			tells the sound to play that many times during its normal duration.
		</p>
		<p id="sound4-2">
			To help visualize this, there is a tool called <b class="cmd">{'.pianoroll()'}</b> that we can
			use. It makes a graphical representation of the sounds, and it is more easy to see what each
			of the different sound are doing. It is special in that you need to write
			<b class="cmd">{'.pianoroll({fold: 1})'}</b> to make it work, for reasons we won't cover here.
		</p>
	</div>
	<Strudel title="sound()" url={examples[3]} height={320} />

	{#if $ctxstore}
		<Vocabulary commands={voc.cmd} syntaxes={voc.stx} />
	{/if}
</div>

<style>
	.cmd {
		font-family: monospace;
		font-size: 1.2em;
	}
</style>
