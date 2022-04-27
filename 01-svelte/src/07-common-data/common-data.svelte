<script lang="ts">
  import {FullnameStore} from './fullname-store';
  import Name from './name.svelte';
  import Lastname from './lastname.svelte';
</script>

<h1>Common data demo</h1>

<h2>Fullname: {$FullnameStore.name} {$FullnameStore.lastname}</h2>

<Name/>
<Lastname/>