<script lang="ts">
    let { letter, absolute, percentage } = $props()
</script>

<div class="letter">
    {letter.toUpperCase()}
</div>
<div class="bar">
    <div style:width={`${percentage}%`}></div>
</div>
<div class="amount">
    {absolute} ({percentage}%)
</div>

<style lang="scss">
    @use "../utils.scss" as *;

    .bar {
        height: 12px;
        width: 100%;
        background: var(--neutral-18);
        border-radius: 99px;
        div {
            height: 100%;
            background: var(--purple-400);
            min-width: 4px;
            border-radius: 99px;
        }
    }

    .letter {
        width: 16px;
        @include text4();
    }

    .amount {
        width: 90px;
        text-align: right;
        @include text4();
    }
</style>
