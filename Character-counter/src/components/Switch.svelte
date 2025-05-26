<script lang="ts">
    let { name, id, func } = $props()

    let isOn = $state(false)
</script>

<label for={id}>
    <input
        {id}
        bind:checked={isOn}
        onclick={() => func()}
        type="checkbox"
        name={id}
    />
    <span class:active={isOn}>
        {#if isOn}
            <svg height={12} width={12}>
                <use href="/icon-check.svg#icon"></use>
            </svg>
        {/if}
    </span>
    {name}
</label>

<style lang="scss">
    @use "../utils.scss" as *;

    label {
        display: flex;
        gap: 10px;
        align-items: center;
        cursor: pointer;
        @include text4();
    }

    input {
        position: absolute;
        height: 0;
        width: 0;

        z-index: -10;
        &:focus-visible + span {
            box-shadow:
                0px 0px 0px 2px #ffffff,
                0px 0px 0px 4px #d3a0fa;
        }
    }

    span {
        border-radius: 4px;
        width: 16px;
        height: 16px;
        display: grid;
        place-items: center;
        border: 1px solid var(--neutral-72);
        &.active {
            background: var(--purple-400);
            border-color: var(--purple-400);
        }
    }
</style>
