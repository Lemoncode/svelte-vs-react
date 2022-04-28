<script lang="ts">
  import UserContext from "./user.context.svelte";
  import Login from "./login.svelte";
  import ShowUser from "./showuser.svelte";
</script>

<h1>Place holder context demo ***</h1>

<UserContext>
  <Login />
  <ShowUser />
</UserContext>
