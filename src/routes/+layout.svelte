<script lang="ts">
	import './styles.css';
</script>

<div class="app">
	<main>
		<slot />
	</main>

  <footer></footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 70rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
    height: 6em;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}

  .pagetitle {
    margin-left: 0;
  } 

  #vocabulary {
    margin-left: 1.5em;
  }

  ol > li {
    margin-bottom: 0.6em;
  }

  .links {
    display: flex;
    gap: 1.2em;
    margin-left: 0em;
  }

  .examples {
    margin-top: 1em;
    margin-bottom: 2em;
  }
</style>
