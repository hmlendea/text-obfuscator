var identicalGroupReplacements = {
    "**": "ᕯ",
    "!!": "‼",
    "!?": "⁉",
    "??": "⁇",
    "?!": "⁈",
    "?!": "⁈",
    "...": "…",
    " ": "     ",
}

var approximateGroupReplacements = {
    "II": "Ⅱ",
    "III": "Ⅲ",
    "IV": "Ⅳ",
    "VI": "Ⅵ",
    "VII": "Ⅶ",
    "VIII": "Ⅷ",
    "IX": "Ⅸ",
    "IX": "Ⅸ",
    "XI": "Ⅺ",
    "XII": "Ⅻ",

    "ii": "ⅱ",
    "iii": "ⅲ",
    "iv": "ⅳ",
    "vi": "ⅵ",
    "vii": "ⅶ",
    "viii": "ⅷ",
    "ix": "ⅸ",
    "xi": "ⅺ",
    "xii": "ⅻ",

    "DZ": "Ǳ",
    "Dz": "ǲ",
    "IJ": "Ĳ",
    "LJ": "Ǉ",
    "Lj": "ǈ",
    "NJ": "Ǌ",
    "Nj": "ǋ",

    "ae": "æӕ",
    "bl": "Ы",
    "dz": "ǳ",
    "dz": "ʣ",
    "ij": "ĳ",
    "lj": "ǉ",
    "lm": "㏐",
    "ln": "㏑",
    "log": "㏒",
    "ls": "ʪ",
    "lx": "㏓",
    "lz": "ʫ",
    "mb": "㏔",
    "mil": "㏕",
    "mol": "㏖",
    "nj": "ǌ",
    "oy": "ѹ",
    "Oy": "Ѹ",
    "ts": "ʦ"
}

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

    // 2 // The following don't work in some fonts: 𝟤
    "3": "З",
    "Ʒ": "Ӡ",
    "Ӡ": "Ʒ",
    // The following is utterly broken: 𞣋

    "Æ": "Ӕ",
    "æ": "ӕ",

    "A": "АΑꓮ", // The following don't work in some fonts: 𝖠
    "Ă": "ӐǍ",
    "Â": "Ȃ",
    "B": "ВΒꓐ", // The following don't work in some fonts: 𝖡
    // The following don't work in some fonts: C𝖢. The following is utterly broken: ꓚ
    "D": "ᗞꓓ", // The following don't work in some fonts: 𝖣
    "Đ": "ÐƉ",
    "Ð": "ĐƉ",
    "Ɖ": "ÐĐ",
    "E": "ЕΕꓰ", // The following don't work in some fonts: 𝖤
    "Ĕ": "Ӗ",
    "Ë": "Ё",
    "F": "ꓝ", // The following don't work in some fonts: 𝖥
    "G": "ꓖ", // The following don't work in some fonts: 𝖦
    "H": "НΗꓧ", // The following don't work in some fonts: 𝖧
    "I": "ІΙӀӏ",
    "Î": "Ȋ",
    "Ï": "ЇΪ",
    "J": "Јꓙ", // The following don't work in some fonts: 𝖩 // The following look different in some fonts: Ϳ
    "K": "КKΚꓗ", // The following don't work in some fonts: 𝖪
    "Ḱ": "Ќ",
    "L": "Ꮮꓡ", // The following don't work in some fonts: 𝖫𐐛
    "M": "МΜϺ", // The following don't work in some fonts: 𝖬
    "N": "Νꓠ", // The following don't work in some fonts: 𝖭
    "O": "ОΟՕꓳ", // The following don't work in some fonts: 𝖮𐓂𖫩
    "Ö": "Ӧ",
    "Ө": "Ѳθ",
    "ϴ": "Ɵ",
    "P": "РΡ", // The following don't work in some fonts: 𝖯
    "Q": "Ԛ", // The following don't work in some fonts: 𝖰
    //"R": "", // The following don't work in some fonts: 𝖱
    "S": "Ѕჽ", // The following don't work in some fonts: 𖫖𝖲
    "Ș": "ŞṢ",
    "ŞṢȘ": "ȘṢ",
    "ṢȘ": "ȘŞ",
    "T": "ТΤꓔ", // The following don't work in some fonts: 𝖳 // The following combines with nearby letters: ߠ
    "Ț": "ŢṬ",
    "Ţ": "ȚṬ",
    "Ṭ": "ȚŢ",
    "U": "ꓴՍ", // The following don't work in some fonts: 𝖴𐓎
    "V": "ⴸꛟꓦ", // The following don't work in some fonts: 𝖵
    "W": "Ԝꓪ", // The following don't work in some fonts: 𝖶
    "X": "ХΧⵝꓫ", // The following don't work in some fonts: 𝖷
    "Y": "ΥҮꓬ", // The following don't work in some fonts: 𝖸
    "Z": "Ζꓜ", // The following don't work in some fonts: 𝖹Ⴭꛉ

    "a": "а", // The following don't work in some fonts: 𝖺
    "ă": "ӑǎ",
    "â": "ȃ",
    // The following don't work in some fonts: 𝖻. The following are invisible in some fonts: b‍
    "c": "сϲᴄ",
    "e": "е", // The following don't work in some fonts: 𝖾
    "è": "ѐ",
    "ë": "ё",
    "ĕ": "ӗ",
    // The following don't work in some fonts: g‍
    "i": "і",
    "î": "ȋ",
    "ï": "ї",
    "j": "ј",
    "k": "ĸк",
    "ɫ": "ɬᏐ",
    // n // The following don't work in some fonts: ո𝗇
    "o": "оօο", // The following don't work in some fonts: 𐓪𐐬 // The following is looks too differnt in some fonts: ௦
    "ö": "ӧ",
    "ó": "όό",
    "ò": "ὸ",
    "ө": "ɵꮎ",
    "θ": "ӨѲ𖺀",
    "p": "р",
    "q": "ԛ",
    "s": "ѕ", // The following don't work in some fonts: 𝗌
    "ș": "şṣ",
    "ş": "șṣ",
    "ṣ": "șş",
    "ț": "ţṭ",
    "ţ": "țṭ",
    "ṭ": "țţ",
    // u // The following don't work in some fonts: ս
    "w": "ԝꮃ",
    "x": "х",
    "y": "уү",
    "ÿ": "ӱ",
    "z": "ꮓ"
}

var approximateReplacements = {
    "'": "ʹ",

    //"0": "߀", // This can turn the text left-to-right
    "3": "Ӡ", // The following look too different: Ʒ
    "Ӡ": "3З",
    "5": "Ƽ",
    "6": "бᏮ",

    "A": "ᗅᎪ",
    "Ă": "Ā",
    "B": "Ᏼᗷꕗ",
    "C": "ᏟᑕⅭ", // Ⅽ makes the next character uppercase on iOS
    "D": "ᎠⅮ", // "Ⅾ" makes the next character uppercase on iOS
    "E": "Ꭼⴹ⋿ꗋ",
    "F": "Ϝ", // Ϝ does not look identical in some fonts
    "G": "ᏀႺ",
    "H": "Ꮋ",
    "I": "ꓲⅠⵏߊꕯ", // Stretch // The following look different on some fonts: ꕯ // The following don't work on some fonts: 𝖨𞥑 𞠢
    // The following looks too different: Լ
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
    // "U": // The following don't work in some fonts: 𞤋 // The following look too different in some fonts: ᑌ⋃
    "V": "ᐯᏙⅤ",
    "W": "ᎳᏔ",
    // "X": "᙭Ꭓχ"
    "X": "Ⅹ",
    "Z": "Ꮓ",

    "ă": "ā",
    // "b": // The following are broken in some fonts: ხ // The following look different in some fonts: ᏏЬƅ
    "c": "ꮯⅽ", // "ꮯ" has a weird top right at least on iOS and "ⅽ" makes the next character after it uppercase
    "d": "ძⅾ", // The following don't work in some fonts: 𝖽. The following look too different in some fonts: ԁ. "ⅾ" makes the next character uppercase on iOS

    "g": "ɡց",
    //"h": "հ", // "հ" looks like some arabic letter on iOS
    "h": "ᏂႹ", // "һ", // Confirmed to look quite different in many fonts
    "i": "Ꭵⅰ", // This might be a bit of a stretch
    "ı": "ɪ",
    "ɪ": "ı",
    "ĭ": "ǐ",
    "j": "ϳ",
    "k": "κкκꮶ",
    "ł": "ɫɬᏐ",
    "ɫ": "ł",
    "ɬ": "ł",
    "m": "ⅿ", // The following don't work in some fonts: ՠ. ՠ also makes the next character uppercase on iOS
    "o": "ഠჿ", // The following look different in some fonts: ೦. ჿ is broken in Instagram on Android
    "p": "ρƿ",
    "s": "ടꮪꜱ", // ꜱ looks ok but doesn't work on e.g. Apple Watch
    // u // The following don't work in some fonts: 𐓶
    "u": "υ",
    "ú": "ύ",
    "v": "ꮩνⅴ", // The following have large paddings: ∨
    "w": "ꮤ", // The following look different in some fonts: ꮃ
    "x": "ⅹ",
    "y": "γʏ"
}

function obfuscateText() {
    var input = $("#input").val();
    var output = '';

    for (var [group, candidates] of Object.entries(identicalGroupReplacements)) {
        var replacement = group;

        if (Math.floor(Math.random() * 10) + 1 <= 6) {
            var randomCandidateIndex = Math.floor(Math.random() * candidates.length);
            replacement = candidates[randomCandidateIndex];
        }

        input = input.replace(group, replacement);
    }

    if ($("#approximateCharactersCheckbox").is(':checked') && approximateReplacements[character]) {
        for (var [group, candidates] of Object.entries(approximateGroupReplacements)) {
            var replacement = group;

            if (Math.floor(Math.random() * 10) + 1 <= 6) {
                var randomCandidateIndex = Math.floor(Math.random() * candidates.length);
                replacement = candidates[randomCandidateIndex];
            }

            input = input.replace(group, replacement);
        }
    }

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

    $("#output").val(output);
}

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

function fallbackCopy(copyText) {
    copyText.focus();
    copyText.select();
    copyText.setSelectionRange(0, copyText.value.length);

    document.execCommand("copy");
}