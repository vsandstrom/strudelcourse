<script lang="ts">
  import github from '$lib/gh.png';
</script>


<div id="footer">
  <a href="https://github.com/vsandstrom/strudelcourse">
    <img src={github} alt="Github Icon" title="Page source code">
  </a>
</div>


<style>
  img {
    width: 3.8em;
  }

img:hover {
  opacity: 40%;
    }

  #footer {
    height: 2em;
    width: 60%;
    margin: 6em 50% 0 50%;
    padding-bottom: 0em;

  }

  #footer a {
    display: flex;
    flex-direction: row;
  }
</style>
