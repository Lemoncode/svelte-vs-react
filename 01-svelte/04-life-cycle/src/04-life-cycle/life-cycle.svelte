<script lang="ts">
  // Debounce example
  // https://svelte.dev/repl/818b4b38293a4a67901473d6d4f60230?version=3.32.3
  import { getMovies } from "./api";
  import { Movie } from "./model";
  let search = "";
  let movies: Movie[] = [];

  $: search &&
    getMovies(search).then((result) => {
      movies = result;
    });

  console.log(movies);
</script>

<h1>Place holder life cycle code demo</h1>

<ul>
  <input placeholder="move title" bind:value={search} />

  {#each movies as movie}
    <li>{movie.title}</li>
  {/each}
</ul>
