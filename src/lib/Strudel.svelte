<script lang="ts" type="module">
  export let title: string;
  export let url: string;
  export let height: number = 600;
</script>

<div class="strudel">
  <iframe 
    title={title} 
    src={url}
    height={height}
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


