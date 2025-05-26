<script lang="ts" module>
    let alphabet = [..."abcdefghijklmnopqrstuvwxyz"]
    let ignored = [" "]
    function Parse(i: string) {
        let chars = 0
        let charsSpaces = 0
        let words = 0
        let sentences = 0
        let inWord = false
        let letterData: Map<string, number> = new Map()

        for (let index = 0; index < i.length; index++) {
            if (i[index - 1] == " " && inWord) {
                words++
                inWord = false
            }

            if (i[index] == "\n") continue

            if (!ignored.includes(i[index])) {
                let currentLetter = i[index].toLowerCase()

                chars++
                charsSpaces++
                inWord = true
                // edgecase for the first word
                if (inWord && words == 0) {
                    words++
                }

                if (alphabet.includes(currentLetter)) {
                    if (!letterData.get(currentLetter)) {
                        letterData.set(currentLetter, 1)
                    } else {
                        letterData.set(
                            currentLetter,
                            letterData.get(currentLetter) + 1,
                        )
                    }
                }

                if (i[index] == ".") {
                    sentences++
                }
            } else {
                charsSpaces++
            }
        }

        letterData = new Map(
            [...letterData.entries()].sort(([, v1], [, v2]) => v2 - v1),
        )
        return {
            letters: letterData,
            lengthAbsolute: charsSpaces,
            length: chars,
            words: words,
            sentences: sentences,
        }
    }

    export { Parse }
</script>
