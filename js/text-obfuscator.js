var identicalGroupReplacements = {
    "**": "ᕯ",
    "!!": "‼",
    "!?": "⁉",
    "??": "⁇",
    "?!": "⁈",

    "DZ": "Ǳ",
    "Dz": "ǲ",
    "LJ": "Ǉ",
    "Lj": "ǈ",
    "NJ": "Ǌ",
    "Nj": "ǋ",

    "dz": "ǳ",
    "lj": "ǉ",
    "nj": "ǌ"
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


    "IJ": "Ĳ",

    "ae": "æӕ",
    "bl": "Ы",
    "dz": "ʣ",
    "ij": "ĳ",
    "lm": "㏐",
    "ln": "㏑",
    "log": "㏒",
    "ls": "ʪ",
    "lx": "㏓",
    "lz": "ʫ",
    "mb": "㏔",
    "mil": "㏕",
    "mol": "㏖",
    "Oy": "Ѹ",
    "oy": "ѹ",
    "ts": "ʦ"
}

var identicalReplacements = {
    "`": "՝",
    ",": "͵",
    ":": "։",
    ";": ";",
    "|": "ǀ",
    "ǀ": "|",
    "/": "⁄⧸",
    "\\": "⧵⧹",
    "-": "‐–",
    "+": "𖫵",
    "<": "ᐸ𖫬ⵦ",
    ">": "ᐳ",

    // 2 // The following don't work in some fonts: 𝟤
    "0": "߀",
    "3": "З",
    "Ʒ": "Ӡ",
    "Ӡ": "Ʒ",
    "6": "Ꮾ",
    "8": "𞣋",

    "Æ": "Ӕ",
    "æ": "ӕ",

    "A": "АΑᎪꓮ", // The following don't work in some fonts: 𝖠
    "Ă": "Ӑ",
    "Â": "Ȃ",
    "B": "ВΒᏴꓐ", // The following don't work in some fonts: 𝖡
    "C": "ꓚ", // The following don't work in some fonts: C𝖢
    "D": "ᗞᎠꓓ", // The following don't work in some fonts: 𝖣
    "Đ": "ÐƉ",
    "Ð": "ĐƉ",
    "Ɖ": "ÐĐ",
    "E": "ЕΕᎬꓰ", // The following don't work in some fonts: 𝖤
    "Ĕ": "Ӗ",
    "Ë": "Ё",
    "Ë": "ꓝ", // The following don't work in some fonts: 𝖥
    "G": "Ꮐꓖ", // The following don't work in some fonts: 𝖦
    "H": "НΗᎻꓧ", // The following don't work in some fonts: 𝖧
    "I": "ІΙӀӏ",
    "Î": "Ȋ",
    "Ï": "ЇΪ",
    "J": "ЈᎫꓙ", // The following don't work in some fonts: 𝖩 // The following look different in some fonts: Ϳ
    "K": "КKΚᏦꓗ", // The following don't work in some fonts: 𝖪
    "Ḱ": "Ќ",
    "L": "ⅬᏞꓡ", // The following don't work in some fonts: 𝖫𐐛
    "M": "МΜϺ", // The following don't work in some fonts: 𝖬
    "N": "Νꓠ", // The following don't work in some fonts: 𝖭
    "O": "ОΟՕꓳ", // The following don't work in some fonts: 𝖮𐓂𖫩
    "Ö": "Ӧ",
    "Ө": "Ѳθ",
    "ϴ": "ƟᎾ",
    "P": "РΡᏢ", // The following don't work in some fonts: 𝖯
    "Q": "ԚႭ", // The following don't work in some fonts: 𝖰
    "R": "Ꮢ", // The following don't work in some fonts: 𝖱
    "S": "ЅᏚჽႽ", // The following don't work in some fonts: 𖫖𝖲
    "Ș": "ŞṢ",
    "ŞṢȘ": "ȘṢ",
    "ṢȘ": "ȘŞ",
    "T": "ТΤᎢꓔ", // The following don't work in some fonts: 𝖳 // The following combines with nearby letters: ߠ
    "Ț": "ŢṬ",
    "Ţ": "ȚṬ",
    "Ṭ": "ȚŢ",
    "U": "ꓴՍ", // The following don't work in some fonts: 𝖴𐓎
    "V": "ᏙⅤⴸꛟꓦ", // The following don't work in some fonts: 𝖵
    "W": "ԜᎳꓪ", // The following don't work in some fonts: 𝖶
    "X": "ХⅩΧⵝꓫ", // The following don't work in some fonts: 𝖷
    "Y": "ΥҮꓬ", // The following don't work in some fonts: 𝖸
    "Z": "ΖᏃჍꛉꓜ", // The following don't work in some fonts: 𝖹

    "a": "а", // The following don't work in some fonts: 𝖺
    "ă": "ӑ",
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

    "3": "Ӡ", // The following look too different: Ʒ
    "Ӡ": "3З",
    "5": "Ƽ",
    "6": "б",

    "A": "ᗅ",
    "Ă": "ǍĀ",
    "B": "ᗷꕗ",
    "C": "ᏟᑕⅭ", // Ⅽ makes the next character uppercase on iOS
    "D": "Ⅾ", // "Ⅾ" makes the next character uppercase on iOS
    "E": "ⴹ⋿ꗋ",
    "F": "Ϝ", // Ϝ does not look identical in some fonts
    "G": "Ⴚ",
    "I": "ꓲⅠⵏߊꕯ", // Stretch // The following look different on some fonts: ꕯ // The following don't work on some fonts: 𝖨𞥑 𞠢
    // The following looks too different: Լ
    "M": "ꓟᎷⅯ",
    "O": "ⵔ",
    "Ө": "ƟϴᎾ",
    "P": "ꓑ",
    "Q": "Ǫ",
    "R": "Ꭱꓣ",
    "S": "ꓢՏ",
    "T": "ㄒꔋ",
    "Ț": "Ҭ",
    // "U": // The following don't work in some fonts: 𞤋 // The following look too different in some fonts: ᑌ⋃
    "V": "ᐯ",
    "W": "Ꮤ",
    // "X": "᙭Ꭓχ"

    "ă": "ǎā",
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
    "p": "ρ",
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

    for (var [group, candidates] of Object.entries(approximateGroupReplacements)) {
        var replacement = group;

        if (Math.floor(Math.random() * 10) + 1 <= 6) {
            var randomCandidateIndex = Math.floor(Math.random() * candidates.length);
            replacement = candidates[randomCandidateIndex];
        }

        input = input.replace(group, replacement);
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
    var copyText = document.getElementById("output");
    copyText.select();
    copyText.setSelectionRange(0, 99999);

    document.execCommand("copy");
}
