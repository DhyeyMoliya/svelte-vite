<script>
    import Counter from "$components/Counter.svelte";
    let counter = 1;
</script>

<h1>Hello</h1>
<p>Counter : {counter}</p>
<Counter bind:value={counter} />

<style lang="scss">
    h1 {
        color: orangered;
        font-size: 5rem;
        font-weight: 100;
    }
</style>
