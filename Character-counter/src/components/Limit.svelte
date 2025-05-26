<script lang="ts">
    import Switch from "./Switch.svelte"
    let { name, id, overlimit = $bindable() } = $props()

    let showLimit = $state(false)

    let switchShowLimit = () => {
        showLimit = !showLimit
        overlimit.toggled = showLimit
    }
    let width = $derived(overlimit.amount.toString().length)
</script>

<div>
    <Switch {name} {id} func={switchShowLimit} />
    {#if showLimit}
        <input
            type="text"
            style:width={`calc( 26px + ${width}ch )`}
            bind:value={overlimit.amount}
        />
    {/if}
</div>

<style lang="scss">
    @use "../utils.scss" as *;

    div {
        display: flex;
        gap: 10px;
        height: 30px;
        input {
            min-width: calc(26px + 3ch);
            max-width: calc(26px + 8ch);

            border: 1px solid var(--neutral-600);
            border-radius: 6px;
            padding: 4px 12px;

            background: var(--neutral-09);
            color: var(--neutral-90);
            @include text4();
        }
    }
</style>
