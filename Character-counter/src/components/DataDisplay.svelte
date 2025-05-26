<script lang="ts">
    let { number, text, textSmall = "", variant } = $props()

    let formatNumber = $derived(String(number).padStart(2, "0"))
</script>

<div class={variant}>
    <span class="number">
        {formatNumber}
    </span>
    {text} <span class="small">{textSmall}</span>
</div>

<style lang="scss">
    @use "../utils.scss" as *;

    div {
        flex: 1;
        padding: 26px 16px;
        border-radius: 12px;
        color: var(--neutral-900);

        background-repeat: no-repeat;
        background-position: calc(100% + 30px) center;
        @include text3();

        .number {
            margin-bottom: 5px;
            display: block;
            @include text1();
        }

        .small {
            @include text4();
        }

        @media (min-width: 556px) {
            background-position: calc(100% + 30px) 0;
        }
    }

    .orange {
        background-image: url("/pattern-word-count.svg");
        background-color: var(--yellow-500);
    }

    .purple {
        background-image: url("/pattern-character-count.svg");
        background-color: var(--purple-400);
    }

    .red {
        background-image: url("/pattern-sentence-count.svg");
        background-color: var(--orange-500);
    }
</style>
