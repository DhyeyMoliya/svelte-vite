<script lang="ts">
  export let value: number = 1;
</script>

<button class="btn btn-primary" on:click={() => value++}>
  <i class="bi-alarm" /> Counter : {value}
</button>
