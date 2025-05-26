<script lang="ts">
    import { Parse } from "./lib/Count.svelte"
    import Switch from "@components/Switch.svelte"
    import LimitSwitch from "@components/Limit.svelte"
    import Header from "@components/Header.svelte"
    import DataDisplay from "@components/DataDisplay.svelte"
    import LetterBarWrapper from "./components/LetterBarWrapper.svelte"
    import { onMount } from "svelte"

    const debounce = (callback: Function, wait = 300) => {
        let timeout: ReturnType<typeof setTimeout>

        return (...args: any[]) => {
            clearTimeout(timeout)
            timeout = setTimeout(() => callback(...args), wait)
        }
    }

    let startingText =
        "Design is the silent ambassador of your brand. Simplicity is key effective communication, creating clarity in every interaction. great design transforms complex ideas into elegant solutions, them easy to understand. It blends aesthetics and seamlessly."

    let input = $state(startingText)

    let outputData = $state({
        letters: new Map(),
        lengthAbsolute: 0,
        length: 0,
        words: 0,
        sentences: 0,
    })
    let overflow = $state({ toggled: false, amount: 0 })
    let skipSpaces = $state(false)

    let isOverlimit = $derived.by(() => {
        if (overflow.toggled) {
            return overflow.amount < outputData.lengthAbsolute
        }
    })

    let toggleSpaces = () => (skipSpaces = !skipSpaces)

    let update = () => {
        outputData = Parse(input)
    }
    onMount(() => update())

    let darkMode = $state(true)
    let switchMode = () => (darkMode = !darkMode)

    let readingTime = $derived(outputData.length / 200)
    let readingTimeRound = $derived(Math.round(readingTime))
</script>

<div class="themeWrapper" class:dark={darkMode} class:light={!darkMode}>
    <Header className="container" {darkMode} func={switchMode} />
    <main class="container">
        <h1>Analyze your text in real-time.</h1>
        <textarea
            class:overlimit={isOverlimit}
            bind:value={input}
            onkeyup={debounce(update)}
            placeholder="Start typing here… (or paste your text)"
        ></textarea>
        <div class="errorbar" style:display={isOverlimit ? "flex" : "none"}>
            <svg width={14} height={18}>
                <use href="/icon-info.svg#icon"></use>
            </svg>
            Limit reached! Your text exceeds {overflow.amount} characters.
        </div>
        <div class="inforbar">
            <div class="inforbarSwitches">
                <Switch id="space" name="Exclude Spaces" func={toggleSpaces} />
                <LimitSwitch
                    id="limit"
                    name="Set Character Limit"
                    bind:overlimit={overflow}
                />
            </div>
            <p>
                Approx. reading time: {readingTime > 0 && readingTime < 1
                    ? "<1 minute"
                    : `${readingTimeRound} ${readingTimeRound == 1 ? "minute" : "minutes"}`}
            </p>
        </div>
        <div class="databar">
            {#if skipSpaces}
                <DataDisplay
                    number={outputData.length}
                    text="Total Characters"
                    textSmall=" (no space)"
                    variant="purple"
                />
            {:else}
                <DataDisplay
                    number={outputData.lengthAbsolute}
                    text="Total Characters"
                    variant="purple"
                />
            {/if}
            <DataDisplay
                number={outputData.words}
                text="Word Count"
                variant="orange"
            />
            <DataDisplay
                number={outputData.sentences}
                text="Sentence Count"
                variant="red"
            />
        </div>
        <h2>Letter Density</h2>
        {#if outputData.letters.size}
            <LetterBarWrapper
                map={Array.from(outputData.letters.entries())}
                length={outputData.length}
            />
        {:else}
            <p>No characters found. Start typing to see letter density.</p>
        {/if}
    </main>
</div>

<style lang="scss">
    @use "./utils.scss" as *;

    h1 {
        max-width: 510px;
        text-align: center;
        margin: 48px auto;
        color: var(--neutral-91);
        @include text1();
    }

    h2 {
        margin: 24px 0 20px;
        @include text2();
    }

    textarea {
        width: 100%;
        resize: none;
        height: 200px;

        background: var(--neutral-18);
        // placholder color, set inline
        border: 2px solid var(--neutral-27);
        border-radius: 12px;
        padding: 20px;
        font-family: inherit;
        color: var(--neutral-72);

        box-shadow: 0px 0px 10px transparent;
        @include text3();
        @include transition(background-color, border-color, box-shadow);

        &:hover {
            background: var(--neutral-27);
            border-color: var(--neutral-26);
        }
        &:focus-visible {
            border-color: var(--purple-500);
            box-shadow: 0px 0px 10px var(--purple-400);
            outline: none;
        }
        &.overlimit {
            border-color: var(--orange-58);
            box-shadow: 0px 0px 8px var(--orange-58);
        }
        &::placeholder {
            color: var(--neutral-72);
        }
    }

    .inforbar {
        display: flex;
        justify-content: space-between;
        margin: 16px 0 48px;
        gap: 12px;
        flex-direction: column;
        @media (min-width: 556px) {
            align-items: center;
            flex-direction: row;
        }
        &Switches {
            display: flex;
            gap: 12px;
            flex-direction: column;
            @media (min-width: 556px) {
                gap: 24px;
                flex-direction: row;
            }
        }
    }

    .errorbar {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-top: 16px;
        color: var(--orange-58);
        @include text4();
    }

    .databar {
        display: flex;
        gap: 16px;
        flex-direction: column;
        @media (min-width: 556px) {
            flex-direction: row;
        }
    }
</style>
