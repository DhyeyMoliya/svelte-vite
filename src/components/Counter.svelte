<script lang="ts">
    export let value: number = 1;
</script>

<button on:click={() => value++}>Counter : {value}</button>
