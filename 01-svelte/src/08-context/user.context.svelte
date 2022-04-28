<script lang="ts">
  import { setContext } from "svelte";
  import { userStore } from "./user.store";

  // setContext has a key / value
  // whatchout we should avoid using magic strings
  setContext("user-info", userStore);
</script>

<slot />
