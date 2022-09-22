var identicalReplacements = {
    ",": "͵",
    ";": ";",
    "|": "ǀ",
    "ǀ": "|",

    // 2 // The following don't work in some fonts: 𝟤
    "3": "З",
    "Ʒ": "Ӡ",
    "Ӡ": "Ʒ",
    "6": "Ꮾ",

    "Ă": "Ӑ",
    "A": "АΑᎪꓮ", // The following don't work in some fonts: 𝖠
    "B": "ВΒᏴꓐ",
    "C": "СϹᏟꓚ",
    "D": "Ꭰꓓ",
    "Đ": "ÐƉ",
    "Ð": "ĐƉ",
    "Ɖ": "ÐĐ",
    "E": "ЕΕᎬꓰ",
    "Ĕ": "Ӗ",
    "Ë": "Ё",
    "F": "ꓝ",
    "G": "Ꮐꓖ",
    "H": "НΗᎻꓧ",
    "I": "ІΙӀӏ",
    "Ï": "ЇΪ",
    "J": "ЈᎫꓙ",
    "K": "КΚᏦꓗ",
    "Ḱ": "Ќ",
    "L": "ᏞꓡԼ",
    "M": "МΜᎷꓟ",
    "N": "Νꓠ",
    "O": "ОΟꓳՕ",
    "Ö": "Ӧ",
    "Ө": "Ѳθ",
    "ϴ": "ƟᎾ",
    "P": "РΡᏢ",
    "Q": "Ԛ",
    "R": "ᏒᎡ",
    "S": "ЅᏚ",
    "Ș": "ŞṢ",
    "ŞṢȘ": "ȘṢ",
    "ṢȘ": "ȘŞ",
    "T": "ТΤᎢꓔ",
    "Ț": "ŢṬ",
    "Ţ": "ȚṬ",
    "Ṭ": "ȚŢ",
    "U": "Սꓴ",
    "V": "Ꮩꓦ",
    "W": "ԜᎳꓪ",
    "X": "ХΧꓫ",
    "Y": "ҮΥꓬ",
    "Z": "ΖᏃꓜ",

    "a": "а", // The following don't work in some fonts: 𝖺
    "ă": "ӑ",
    // The following don't work in some fonts: 𝖻. The following are invisible in some fonts: b‍
    "c": "сϲᴄⅽ",
    "d": "ⅾ", // The following don't work in some fonts: 𝖽. The following look too different in some fonts: ԁ
    "e": "е", // The following don't work in some fonts: 𝖾
    "ë": "ё",
    "ĕ": "ӗ",
    // The following don't work in some fonts: g‍
    "i": "і",
    "ï": "ї",
    "j": "ј",
    "к": "κ",
    "κ": "к",
    "ɫ": "ɬᏐ",
    // n // The following don't work in some fonts: ո𝗇
    "o": "оοօ",
    "ö": "ӧ",
    "ó": "όό",
    "ò": "ὸ",
    "ө": "ɵꮎ",
    "θ": "ӨѲ",
    "p": "р",
    "q": "ԛ",
    "s": "ѕꮪꜱ", // The following don't work in some fonts: 𝗌
    // u // The following don't work in some fonts: ս
    "v": "ꮩ",
    "w": "ԝꮃ",
    "x": "х",
    "y": "у",
    "ÿ": "ӱ",
    "z": "ꮓ"
}

var approximateReplacements = {
    "'": "ʹ",

    "3": "Ӡ", // The following look too different: Ʒ
    "Ӡ": "3З",
    "6": "б",

    "F": "Ϝ", // Ϝ does not look identical in some fonts
    "I": "ꓲ", // Stretch
    "J": "Ϳ",
    "M": "Ϻ",
    "Ө": "ƟϴᎾ",
    "P": "РΡᏢꓑ",
    "Q": "Ǫ",
    "R": "ꓣ",
    "S": "ꓢՏ",
    "W": "Ꮤ",
    // "X": "Ꭓ"

    "b": "Ь", // "Ꮟ"
    "g": "ց",
    "h": "Ꮒ", // "һ", // Confirmed to look quite different in many fonts
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
    "ș": "şṣ",
    "ş": "șṣ",
    "ṣ": "șş",
    "ț": "ţṭ",
    "ţ": "țṭ",
    "ṭ": "țţ",
    // u // The following don't work in some fonts: 𐓶
    "u": "υ",
    "ú": "ύ",
    "w": "ꮤ",
    "y": "γ"
}

var characters = lowercase + uppercase + digits + punctuation;
var charactersCount = characters.length;

function obfuscateText() {
    var input = $("#input").val();
    var output = '';

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
