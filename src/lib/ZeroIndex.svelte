<script lang="ts">
  import {base} from '$app/paths'

</script>

<div id="content">
	<h3>Zero Index</h3>
	<p id="zeroindex">
		Imagine a youtube video that you want to play from the beginning, you would play it from <b
			class="cmd">00:00</b
		>, which is position <b class="cmd">0</b>. The first slice is the part between
		<b class="cmd">0</b>
		and <b class="cmd">1</b>, the second between <b class="cmd">1</b> and <b class="cmd">2</b>, and
		so on. The fourth slice would be between <b class="cmd">3</b> and <b class="cmd">4</b>. If we
		try to play something from the position of <b class="cmd">4</b>, we are trying to continue
		playing after the clip has ended. There is nothing there.
	</p>
	<p>
		We reference the slices by their distance to the beginning. Since the first slice starts at the
		beginning, there is no distance, hence the position is <b class="cmd">0</b>. This is called
		<i>zero indexing</i>
		and is a common concept across many programming languages. It is useful to know about in
		programming in general. You can think of the word <i>index</i> as a fancy word for position.
	</p>
	<img src="{base}/zeroidx.png" alt="Graphic explaining zero index" />
</div>

<style>
	#content {
		margin: 3em 2% 2em 2%;
	}
	#content p {
		margin: 0 2% 1em 2%;
	}
	img {
		width: 100%;
		margin-top: 2em;
		margin-bottom: 5em;
	}
</style>
