# Application services

## Responsibility

Contains the obfuscation logic, character replacement maps, and clipboard operations.

## Location

`js/text-obfuscator.js`

## Replacement maps

### identicalGroupReplacements

Multi-character sequences replaced with visually identical Unicode equivalents.

```javascript
var identicalGroupReplacements = {
    "**": "ᕯ",
    "!!": "‼",
    "!?": "⁉",
    "??": "⁇",
    "?!": "⁈",
    "?!": "⁈",  // duplicate key
    "...": "…",
    " ": "     ",  // multiple space variants
}
```

**Processing**: Iterated first. Each group has a 60% chance of replacement. Replacement is a single random character from the candidate string.

### approximateGroupReplacements

Multi-character sequences replaced with visually similar Unicode equivalents (enabled by checkbox).

```javascript
var approximateGroupReplacements = {
    "II": "Ⅱ", "III": "Ⅲ", "IV": "Ⅳ", "VI": "Ⅵ", "VII": "Ⅶ",
    "VIII": "Ⅷ", "IX": "Ⅸ", "IX": "Ⅸ", "XI": "Ⅺ", "XII": "Ⅻ",
    "ii": "ⅱ", "iii": "ⅲ", "iv": "ⅳ", "vi": "ⅵ", "vii": "ⅶ",
    "viii": "ⅷ", "ix": "ⅸ", "xi": "ⅺ", "xii": "ⅻ",
    "DZ": "Ǳ", "Dz": "ǲ", "IJ": "Ĳ", "LJ": "Ǉ", "Lj": "ǈ",
    "NJ": "Ǌ", "Nj": "ǋ",
    "ae": "æӕ", "bl": "Ы", "dz": "ǳ", "dz": "ʣ", "ij": "ĳ",
    "lj": "ǉ", "lm": "㏐", "ln": "㏑", "log": "㏒", "ls": "ʪ",
    "lx": "㏓", "lz": "ʫ", "mb": "㏔", "mil": "㏕", "mol": "㏖",
    "nj": "ǌ", "oy": "ѹ", "Oy": "Ѹ", "ts": "ʦ"
}
```

**Processing**: Iterated second (if checkbox checked). Same 60% probability per group.

### identicalReplacements

Single-character replacements with visually identical Unicode equivalents.

```javascript
var identicalReplacements = {
    "`": "՝",
    ",": "͵",
    ":": "։꞉",
    ";": ";",
    "'": "′´ʹ‘’",
    "\"": "”″",
    "|": "ǀ",
    "ǀ": "|",
    "/": "⁄⧸",
    "\\": "⧵⧹",
    "-": "‐–",
    "+": "𖫵",
    "<": "ᐸ𖫬ⵦ",
    ">": "ᐳ",
    "3": "З",
    "Ʒ": "Ӡ",
    "Ӡ": "Ʒ",
    "Æ": "Ӕ",
    "æ": "ӕ",
    "A": "АΑꓮ",
    "Ă": "ӐǍ",
    "Â": "Ȃ",
    "B": "ВΒꓐ",
    "D": "ᗞꓓ",
    "Đ": "ÐƉ",
    "Ð": "ĐƉ",
    "Ɖ": "ÐĐ",
    "E": "ЕΕꓰ",
    "Ĕ": "Ӗ",
    "Ë": "Ё",
    "F": "ꓝ",
    "G": "ꓖ",
    "H": "НΗꓧ",
    "I": "ІΙӀӏ",
    "Î": "Ȋ",
    "Ï": "ЇΪ",
    "J": "Јꓙ",
    "K": "КKΚꓗ",
    "Ḱ": "Ќ",
    "L": "Ꮮꓡ",
    "M": "МΜϺ",
    "N": "Νꓠ",
    "O": "ОΟՕꓳ",
    "Ö": "Ӧ",
    "Ө": "Ѳθ",
    "ϴ": "Ɵ",
    "P": "РΡ",
    "Q": "Ԛ",
    "S": "Ѕჽ",
    "Ș": "ŞṢ",
    "ŞṢȘ": "ȘṢ",
    "ṢȘ": "ȘŞ",
    "T": "ТΤꓔ",
    "Ț": "ŢṬ",
    "Ţ": "ȚṬ",
    "Ṭ": "ȚŢ",
    "U": "ꓴՍ",
    "V": "ⴸꛟꓦ",
    "W": "Ԝꓪ",
    "X": "ХΧⵝꓫ",
    "Y": "ΥҮꓬ",
    "Z": "Ζꓜ",
    "a": "а",
    "ă": "ӑǎ",
    "â": "ȃ",
    "c": "сϲᴄ",
    "e": "е",
    "è": "ѐ",
    "ë": "ё",
    "ĕ": "ӗ",
    "i": "і",
    "î": "ȋ",
    "ï": "ї",
    "j": "ј",
    "k": "ĸк",
    "ɫ": "ɬᏐ",
    "o": "оօο",
    "ö": "ӧ",
    "ó": "όό",
    "ò": "ὸ",
    "ө": "ɵꮎ",
    "θ": "ӨѲ𖺀",
    "p": "р",
    "q": "ԛ",
    "s": "ѕ",
    "ș": "şṣ",
    "ş": "șṣ",
    "ṣ": "șş",
    "ț": "ţṭ",
    "ţ": "țṭ",
    "ṭ": "țţ",
    "w": "ԝꮃ",
    "x": "х",
    "y": "уү",
    "ÿ": "ӱ",
    "z": "ꮓ"
}
```

### approximateReplacements

Single-character replacements with visually similar Unicode equivalents (enabled by checkbox).

```javascript
var approximateReplacements = {
    "'": "ʹ",
    "3": "Ӡ",
    "Ӡ": "3З",
    "5": "Ƽ",
    "6": "бᏮ",
    "A": "ᗅᎪ",
    "Ă": "Ā",
    "B": "Ᏼᗷꕗ",
    "C": "ᏟᑕⅭ",
    "D": "ᎠⅮ",
    "E": "Ꭼⴹ⋿ꗋ",
    "F": "Ϝ",
    "G": "ᏀႺ",
    "H": "Ꮋ",
    "I": "ꓲⅠⵏߊꕯ",
    "J": "Ꭻ",
    "K": "Ꮶ",
    "L": "Ⅼ",
    "M": "ꓟᎷⅯ",
    "O": "ⵔ",
    "Ө": "ƟϴᎾ",
    "P": "ꓑᏢ",
    "Q": "ǪႭ",
    "R": "ᎡꓣᏒ",
    "S": "ꓢᏚՏႽ",
    "T": "ㄒᎢꔋ",
    "Ț": "Ҭ",
    "V": "ᐯᏙⅤ",
    "W": "ᎳᏔ",
    "X": "Ⅹ",
    "Z": "Ꮓ",
    "ă": "ā",
    "c": "ꮯⅽ",
    "d": "ძⅾ",
    "g": "ɡց",
    "h": "ᏂႹ",
    "i": "Ꭵⅰ",
    "ı": "ɪ",
    "ɪ": "ı",
    "ĭ": "ǐ",
    "j": "ϳ",
    "k": "κкκꮶ",
    "ł": "ɫɬᏐ",
    "ɫ": "ł",
    "ɬ": "ł",
    "m": "ⅿ",
    "o": "ഠჿ",
    "p": "ρƿ",
    "s": "ടꮪꜱ",
    "u": "υ",
    "ú": "ύ",
    "v": "ꮩνⅴ",
    "w": "ꮤ",
    "x": "ⅹ",
    "y": "γʏ"
}
```

## Core functions

### obfuscateText()

```javascript
function obfuscateText() {
    var input = $("#input").val();
    var output = '';

    // 1. Process identical group replacements
    for (var [group, candidates] of Object.entries(identicalGroupReplacements)) {
        var replacement = group;
        if (Math.floor(Math.random() * 10) + 1 <= 6) {
            var randomCandidateIndex = Math.floor(Math.random() * candidates.length);
            replacement = candidates[randomCandidateIndex];
        }
        input = input.replace(group, replacement);
    }

    // 2. Process approximate group replacements (if enabled)
    if ($("#approximateCharactersCheckbox").is(':checked')) {
        for (var [group, candidates] of Object.entries(approximateGroupReplacements)) {
            var replacement = group;
            if (Math.floor(Math.random() * 10) + 1 <= 6) {
                var randomCandidateIndex = Math.floor(Math.random() * candidates.length);
                replacement = candidates[randomCandidateIndex];
            }
            input = input.replace(group, replacement);
        }
    }

    // 3. Process character-by-character replacements
    for (var i = 0; i < input.length; i++) {
        var character = input[i];
        var wasObfuscated = false;
        var candidates = "";

        if (identicalReplacements[character]) {
            candidates = identicalReplacements[character];
        }

        if ($("#approximateCharactersCheckbox").is(':checked') && approximateReplacements[character]) {
            candidates += approximateReplacements[character];
        }

        if (candidates != null && candidates.length > 0) {
            if (Math.floor(Math.random() * 10) + 1 <= 6) {
                var randomCandidateIndex = Math.floor(Math.random() * candidates.length);
                output += candidates[randomCandidateIndex];
                wasObfuscated = true;
            }
        }

        if (!wasObfuscated) {
            output += input[i];
        }
    }

    // 4. Insert zero-width spaces (if enabled)
    if ($("#zeroWidthSpacesCheckbox").is(':checked')) {
        var zeroWidthCharacters = ["\u200B", "\u200C", "\u200D", "\uFEFF", "\u2060"];
        var inputLength = input.length;
        var minSpaces = Math.ceil(inputLength * 0.1);
        var maxSpaces = Math.floor(inputLength * 0.5);
        var spaceCount = minSpaces + Math.floor(Math.random() * (maxSpaces - minSpaces + 1));

        for (var j = 0; j < spaceCount; j++) {
            var randomPosition = Math.floor(Math.random() * (output.length + 1));
            var randomCharacter = zeroWidthCharacters[Math.floor(Math.random() * zeroWidthCharacters.length)];
            output = output.slice(0, randomPosition) + randomCharacter + output.slice(randomPosition);
        }
    }

    $("#output").val(output);
}
```

**Algorithm**:
1. Read input value from `#input`
2. Apply identical group replacements (60% probability each)
3. Apply approximate group replacements if checkbox checked (60% probability each)
4. Iterate each character of the modified input:
   - Collect candidates from `identicalReplacements`
   - Add candidates from `approximateReplacements` if checkbox checked
   - 60% chance to replace with random candidate
   - Otherwise keep original character
5. Insert zero-width spaces if checkbox checked (10–50% of original input length)
6. Write result to `#output`

**Side effects**: Reads and writes DOM. No other side effects.

### copyText()

```javascript
function copyText() {
    var output = document.getElementById("output");

    output.focus();
    output.select();
    output.setSelectionRange(0, output.value.length);

    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(output.value).catch(function () {
            fallbackCopy(output);
        });
        return;
    }

    fallbackCopy(output);
}
```

**Behaviour**:
1. Focus, select, and set selection range on output element
2. If Clipboard API available and secure context, use `navigator.clipboard.writeText()`
3. On failure or if unavailable, call `fallbackCopy()`

### fallbackCopy()

```javascript
function fallbackCopy(copyText) {
    copyText.focus();
    copyText.select();
    copyText.setSelectionRange(0, copyText.value.length);

    document.execCommand("copy");
}
```

**Behaviour**: Uses legacy `document.execCommand("copy")` after selecting the text.

## Dependencies

- jQuery (`$`) — DOM value access and checkbox state checking
- DOM API — `document.getElementById`, `focus()`, `select()`, `setSelectionRange()`
- Clipboard API — `navigator.clipboard.writeText()`
- `window.isSecureContext` — Secure context detection
- `document.execCommand()` — Legacy copy fallback

## Failure modes

- If jQuery unavailable: `$` is undefined, function throws
- If DOM element IDs mismatch: reads `undefined`, processes empty string
- If Clipboard API unavailable: falls back to `execCommand`
- If `execCommand` unsupported: copy silently fails
- If output element not found: throws on `focus()`

## Extension points

- Add entries to any replacement map to extend coverage
- Modify probability by changing `6` in `Math.floor(Math.random() * 10) + 1 <= 6`
- Modify zero-width space range by changing `0.1` and `0.5` multipliers
- Add new zero-width characters to `zeroWidthCharacters` array
- Add new checkboxes and read their state in the function

## References

- [Architecture](./architecture.md)
- [Host and composition](./host-and-composition.md)
- [Presentation](./presentation.md)
- [Flows/obfuscation.md](../flows/obfuscation.md)
- [Flows/copy-to-clipboard.md](../flows/copy-to-clipboard.md)