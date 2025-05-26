<script lang="ts">
    let { isDark, func } = $props()
</script>

<button aria-label="Dark Mode Toggle" onclick={func}>
    <svg height={22} width={22}>
        {#if isDark}
            <use href="/icon-sun.svg#icon"></use>
        {:else}
            <use href="/icon-moon.svg#icon"></use>
        {/if}
    </svg>
</button>

<style lang="scss">
    @use "../utils.scss" as *;

    button {
        background: var(--neutral-17);
        border: none;
        padding: 6px;
        border-radius: 8px;
        line-height: 0;
        cursor: pointer;

        @include transition(scale);
        &:hover,
        &:focus-visible {
            scale: 1.2;
        }
        @media (min-width: 556px) {
            padding: 11px;
        }
    }
</style>
