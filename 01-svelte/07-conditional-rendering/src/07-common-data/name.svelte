<script lang="ts">
  import {FullnameStore} from './fullname-store';
</script>

<input type="text" placeholder="enter name" bind:value={$FullnameStore.name}/>
