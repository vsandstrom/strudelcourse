<script lang="ts">
	import Strudel from '$lib/Strudel.svelte';
	import Header from '$lib/Header.svelte';
	import SubHeader from '$lib/SubHeader.svelte';
	import Vocabulary from '$lib/Vocabulary.svelte';

	import data from '$lib/strudel.json';
	const examples = data['pingpong'];
	const voc = { cmd: [], stx: [] };
</script>

<div>
	<SubHeader pageid={'pingpong'} numExamples={1} extras={[]} />

	<div id="pingpong1">
		<p>
			1. Just for fun, here is a strudel-program using all of the techniques we learned at the
			"sound( )"-page. It contains 5 different examples which takes the previous example and adds
			something to it. To run each example, remove the <b>'//'</b> in front of each row of text.
		</p>
		<ol>
			<li>
				The first example plays 4 <b>B</b>ass<b>D</b>rums.
			</li>
			<li>
				The second uses sub-patterns to play a <b>B</b>ass<b>D</b>rum and a <b>S</b>nare<b>D</b>rum
				at the same time.
			</li>
			<li>
				Adding <b>H</b>i<b>H</b>ats between the other drums from the above example.
			</li>
			<li>
				Adding even more <b>H</b>i<b>H</b>ats, now using sub-patterns to play at the same time as
				the <b>B</b>ass<b>D</b>rum
				<b>S</b>nare<b>D</b>rum.
			</li>
			<li>
				This last example is the most complex, repeating some drums with the
				<b>'*'</b>, and even making sub-patterns WITHIN sub-patterns!
			</li>
		</ol>
		<p>The possibilities are endless!</p>
	</div>
	<Strudel title="sound()" url={examples[0]} height={800} />

	<Vocabulary commands={voc.cmd} syntaxes={voc.stx} />
</div>

<style>
	table {
		width: 80%;
		margin: 3em 2em 4em 2em;
	}

	th {
		text-align: left;
		font-size: 1.2em;
		border-bottom: groove;
		padding: 0.4em 0;
		margin-left: -0.2em;
	}

	td:last-child {
		font-weight: bold;
	}
</style>
