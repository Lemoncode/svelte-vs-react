<script lang="ts">
  let name = "";
  let lastname = "";

  console.log("Hey Rerender going on !!");
</script>

<h1>Update name and lastname = name + lastname</h1>

<input bind:value={name} />
<input bind:value={lastname} />

{name}&nbsp;{lastname}
