var identicalGroupReplacements = {
    "**": "ᕯ",
    "!!": "‼",
    "!?": "⁉",
    "??": "⁇",
    "?!": "⁈",

    "DZ": "Ǳ",
    "Dz": "ǲ",
    "IJ": "Ĳ",
    "LJ": "Ǉ",
    "Lj": "ǈ",
    "NJ": "Ǌ",
    "Nj": "ǋ",

    "dz": "ǳ",
    "ij": "ĳ",
    "lj": "ǉ",
    "lm": "㏐",
    "ln": "㏑",
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

    "ae": "æӕ",
    "bl": "Ы",
    "dz": "ʣ",
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
    "B": "В𝖡ΒᏴꕗꓐ",
    "C": "С𝖢ⅭᏟꓚ",
    "D": "Ꭰ𝖣Ⅾꓓ",
    "Đ": "ÐƉ",
    "Ð": "ĐƉ",
    "Ɖ": "ÐĐ",
    "E": "Е𝖤Ε⋿Ꭼꗋꓰ",
    "Ĕ": "Ӗ",
    "Ë": "Ё",
    "F": "ꓝ𝖥",
    "G": "Ꮐ𝖦ꓖ",
    "H": "Н𝖧ΗᎻꓧ",
    "I": "ІΙӀӏꕯ",
    "Î": "Ȋ",
    "Ï": "ЇΪ",
    "J": "𝖩ЈᎫꓙ",
    "K": "К𝖪KΚᏦꓗ",
    "Ḱ": "Ќ",
    "L": "Ⅼ𝖫Ꮮ𐐛ꓡԼ",
    "M": "М𝖬ΜᎷꓟ",
    "N": "Ν𝖭ꓠ",
    "O": "О𝖮Ο𐓂ꓳՕ𖫩",
    "Ö": "Ӧ",
    "Ө": "Ѳθ",
    "ϴ": "ƟᎾ",
    "P": "Р𝖯ΡᏢ",
    "Q": "Ԛ𝖰Ⴍ",
    "R": "Ꮢ𝖱Ꭱ",
    "S": "Ѕ𝖲ᏚႽჽ𖫖",
    "Ș": "ŞṢ",
    "ŞṢȘ": "ȘṢ",
    "ṢȘ": "ȘŞ",
    "T": "Т𝖳ΤᎢꔋߠꓔ",
    "Ț": "ŢṬ",
    "Ţ": "ȚṬ",
    "Ṭ": "ȚŢ",
    "U": "𐓎𝖴⋃Սꓴ",
    "V": "Ꮩ𝖵Ⅴⴸꛟꓦ",
    "W": "𝖶ԜᎳꓪ",
    "X": "𝖷ХⅩΧⵝꓫ",
    "Y": "Ү𝖸Υꓬ",
    "Z": "Ζ𝖹ᏃჍꛉꓜz",

    "a": "а", // The following don't work in some fonts: 𝖺
    "ă": "ӑ",
    "â": "ȃ",
    // The following don't work in some fonts: 𝖻. The following are invisible in some fonts: b‍
    "c": "сϲᴄⅽ",
    "d": "ⅾⅾ", // The following don't work in some fonts: 𝖽. The following look too different in some fonts: ԁ
    "e": "е", // The following don't work in some fonts: 𝖾
    "è": "ѐ",
    "ë": "ё",
    "ĕ": "ӗ",
    // The following don't work in some fonts: g‍
    "i": "і",
    "î": "ȋ",
    "ï": "ї",
    "j": "ј",
    "k": "κĸк",
    "ɫ": "ɬᏐ",
    "m": "ՠⅿ",
    // n // The following don't work in some fonts: ո𝗇
    "o": "оοօ௦೦ഠჿ𐐬𐓪",
    "ö": "ӧ",
    "ó": "όό",
    "ò": "ὸ",
    "ө": "ɵꮎ",
    "θ": "ӨѲ𖺀",
    "p": "р",
    "q": "ԛ",
    "s": "ѕꮪꜱട", // The following don't work in some fonts: 𝗌
    "ș": "şṣ",
    "ş": "șṣ",
    "ṣ": "șş",
    "ț": "ţṭ",
    "ţ": "țṭ",
    "ṭ": "țţ",
    // u // The following don't work in some fonts: ս
    "v": "ꮩ",
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
    "B": "ᗷ",
    "C": "ᑕ𞤌",
    "D": "ᗞ",
    "E": "ⴹ",
    "F": "Ϝ", // Ϝ does not look identical in some fonts
    "G": "Ⴚ",
    "I": "𝖨ꓲ𞥑Ⅰ𞠢ⵏߊ", // Stretch
    "J": "Ϳ",
    "M": "ϺⅯ",
    "O": "ⵔ",
    "Ө": "ƟϴᎾ",
    "P": "ꓑ",
    "Q": "Ǫ",
    "R": "ꓣ",
    "S": "ꓢՏ",
    "T": "ㄒ",
    "Ț": "Ҭ",
    "U": "ᑌ𞤋",
    "V": "ᐯ",
    "W": "Ꮤ",
    // "X": "᙭Ꭓχ"

    "ă": "ǎā",
    "b": "Ьƅხ", // "Ꮟ"
    "c": "ꮯⅽ", // "ꮯ" has a weird top right at least on iOS
    "d": "ძ",
    "g": "ɡց",
    //"h": "հ", // "հ" looks like some arabic letter on iOS
    "h": "ᏂႹ", // "һ", // Confirmed to look quite different in many fonts
    "i": "Ꭵⅰ", // This might be a bit of a stretch
    "ı": "ɪ",
    "ɪ": "ı",
    "ĭ": "ǐ",
    "j": "ϳ",
    "k": "кκꮶ",
    "ł": "ɫɬᏐ",
    "ɫ": "ł",
    "ɬ": "ł",
    "p": "ρ",
    // u // The following don't work in some fonts: 𐓶
    "u": "υ",
    "ú": "ύ",
    "v": "νⅴ∨",
    "w": "ꮤ",
    "x": "ⅹ",
    "y": "γʏ"
}

var characters = lowercase + uppercase + digits + punctuation;
var charactersCount = characters.length;

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
