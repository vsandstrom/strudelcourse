<script lang="ts">
	import { base } from '$app/paths';
</script>

<div id="shortcut">
	<p>Shortcuts:</p>
	<div id="sc">
		<a href="{base}/sound#drums">Drum Kit</a>
		<a href="{base}/note#piano">Piano Keys</a>
		<a href="{base}/samples#fps">Freesound -> Strudel</a>
	</div>
</div>

<style>
	#sc {
		display: flex;
		justify-content: right;
		flex-direction: column;
	}

	#shortcut {
		display: flex;
		width: 100%;
		flex-direction: row;
		justify-content: flex-end;
		padding-bottom: 0.3em;
		margin-top: -1em;
		font-family: monospace;
		font-size: 0.8em;
	}

	#shortcut a {
		padding-bottom: 0.5em;
	}

	#shortcut p {
		margin-top: -0.2em;
		margin-right: 1.4em;
	}
</style>
