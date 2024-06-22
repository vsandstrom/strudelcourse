<script lang="ts">
	import { base } from '$app/paths';
  const drumkit_info = "Drumkit audition tool and abbreviation lexicon";
  const piano_info = "Piano roll, playable with computer keyboard and mouse";
  const freesound_info = "Freesound.org link converter, making a link usable in Strudel"
  
</script>
<div id="shortcut">
	<p id="shortcuttitle">Shortcuts:</p>
	<div id="sc">
		<a title={drumkit_info} href="{base}/sound#drums">Drum Kit</a>
		<a id="pianoshortcut"title={piano_info} href="{base}/note#piano">Piano Keys</a>
		<a title={freesound_info} href="{base}/samples#fps">Freesound -> Strudel</a>
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

  @media only screen and (max-width: 680px) {
    #shortcuttitle {
      display: none;
    }

    #shortcut a {
      font-size: 1.4em;
      margin-top: 0.7em;
    }

    #pianoshortcut {
      display: none;
    }
  }
</style>
