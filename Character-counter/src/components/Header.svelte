<script lang="ts">
    import LightModeButton from "./LightModeButton.svelte"

    let { darkMode, func, className, ...props } = $props()
</script>

<header class={`header ${className}`} {...props}>
    <svg height={44} width={251}>
        <use
            href={darkMode
                ? "/logo-dark-theme.svg#logo"
                : "/logo-light-theme.svg#logo"}
        ></use>
    </svg>
    <LightModeButton isDark={darkMode} {func} />
</header>

<style lang="scss">
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 32px;
    }
</style>
