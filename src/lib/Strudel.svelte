<script lang="ts" type="module">
  export let title: string;
  export let url: string;
  export let height: number = 240;

  console.log(`strudel example loaded: \n${url}`);
</script>

<div class="strudel">
  <iframe 
    title={title} 
    src={url}
    height={height}
    scrolling="auto"
    loading="lazy"
  />
</div>


<style>
  .strudel {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 5em;

  }
</style>


