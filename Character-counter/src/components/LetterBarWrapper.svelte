<script lang="ts">
    import LetterBar from "./LetterBar.svelte"

    let { map, length } = $props()

    let expanded = $state(false)

    let switchExpanded = () => (expanded = !expanded)

    let shortMap = $derived(map.slice(0, 5))
</script>

<div class="letterWrapper">
    {#if expanded}
        {#each map as [key, value]}
            <LetterBar
                letter={key}
                absolute={value}
                percentage={((value / length) * 100).toFixed(2)}
            />
        {/each}
    {:else}
        {#each shortMap as [key, value]}
            <LetterBar
                letter={key}
                absolute={value}
                percentage={((value / length) * 100).toFixed(2)}
            />
        {/each}
    {/if}
</div>
{#if map.length > 5}
    <button onclick={switchExpanded}>
        {#if expanded}
            See less
            <svg
                width={10}
                height={5}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 11 6"
            >
                <path
                    fill="currentColor"
                    d="m5.273.14 4.625 4.563c.157.156.157.406 0 .531l-.625.625c-.125.157-.375.157-.53 0l-3.72-3.687-3.75 3.687a.36.36 0 0 1-.53 0l-.626-.625c-.156-.125-.156-.375 0-.53L4.742.14a.36.36 0 0 1 .531 0Z"
                />
            </svg>
        {:else}
            See more
            <svg
                width={10}
                height={5}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 11 6"
            >
                <path
                    fill="currentColor"
                    d="M4.742 5.86.117 1.265C-.039 1.14-.039.89.117.734L.742.141a.36.36 0 0 1 .531 0l3.75 3.687L8.743.141c.155-.157.405-.157.53 0l.625.593c.157.157.157.407 0 .532L5.273 5.859a.36.36 0 0 1-.53 0Z"
                />
            </svg>
        {/if}
    </button>
{/if}

<style lang="scss">
    @use "../utils.scss" as *;

    .letterWrapper {
        display: grid;
        grid-template-columns: 21px 1fr max-content;
        align-items: center;
        gap: 12px 14px;
    }

    button {
        border: none;
        background: transparent;
        margin-top: 20px;
        display: flex;
        gap: 8px;
        align-items: center;
        color: inherit;
        cursor: pointer;
        @include text3();
    }
</style>
