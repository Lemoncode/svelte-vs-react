<script lang="ts">
  import {FullnameStore} from './fullname-store';
</script>

<input type="text" placeholder="enter lastname" bind:value={$FullnameStore.lastname}/>
