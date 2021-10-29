var identicalReplacements = {
    ",": "͵",
    ";": ";",
    "|": "ǀ",
    "ǀ": "|",
    
    "2": "𝟤",
    "3": "З",
    "Ʒ": "Ӡ",
    "Ӡ": "Ʒ",
    "6": "Ꮾ",

    "Ă": "Ӑ",
    "A": "АΑᎪꓮ𝖠",
    "B": "ВΒᏴꓐ",
    "C": "СϹᏟꓚ",
    "D": "Ꭰꓓ",
    "Đ": "ÐƉ",
    "Ð": "ĐƉ",
    "Ɖ": "ÐĐ",
    "E": "ЕΕᎬꓰ",
    "Ĕ": "Ӗ",
    "Ë": "Ё",
    "F": "Ϝꓝ",
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
    "Ӧ": "Ö",
    "Ө": "Ѳθ",
    "ϴ": "ƟᎾ",
    "P": "РΡᏢꓑ",
    "R": "Ꮢꓣ",
    "Q": "Ԛ",
    "S": "ЅᏚꓢՏ",
    "T": "ТΤᎢꓔ",
    "U": "Սꓴ",
    "V": "Ꮩꓦ",
    "W": "ԜᎳꓪ",
    "X": "ХΧꓫ",
    "Y": "ҮΥꓬ",
    "Z": "ΖᏃꓜ",

    "a": "а𝖺",
    "ă": "ӑ",
    "b": "𝖻",
    "c": "сϲꮯᴄⅽ",
    "d": "ԁⅾ𝖽",
    "e": "е𝖾",
    "ë": "ё",
    "ĕ": "ӗ",
    "h": "հ",
    "i": "і",
    "ï": "ї",
    "j": "ј",
    "к": "κ",
    "κ": "к",
    "ɫ": "ɬᏐ",
    "n": "ո𝗇",
    "o": "оοօ",
    "ӧ": "ö",
    "ó": "όό",
    "ò": "ὸ",
    "ө": "ɵꮎ",
    "θ": "ӨѲ",
    "p": "р",
    "q": "ԛ",
    "s": "ѕꮪꜱ𝗌",
    "u": "ս",
    "v": "ꮩ",
    "w": "ԝꮃ",
    "x": "х",
    "y": "у",
    "ÿ": "ӱ",
    "z": "ꮓ"
}

var approximateReplacements = {
    "'": "ʹ",
    
    "3": "ӠƷ",
    "Ʒ": "3З",
    "Ӡ": "3З",
    "6": "б",

    "I": "ꓲ", // Stretch
    "J": "Ϳ",
    "M": "Ϻ",
    "Ө": "ƟϴᎾ",
    "Q": "Ǫ",
    "R": "Ꭱ",
    "Ș": "ŞṢ",
    "Ş": "ȘṢ",
    "Ṣ": "ȘŞ",
    "Ț": "ŢṬ",
    "Ţ": "ȚṬ",
    "Ṭ": "ȚŢ",
    "W": "Ꮤ",
    // "X": "Ꭓ"
    
    "b": "Ь", // "Ꮟ"
    "g": "ց",
    "h": "Ꮒ", // "һ", // Confirmed to look quite different in many fonts
    "i": "Ꭵⅰ", // This might be a bit of a stretch
    "ı": "ɪ",
    "ɪ": "ı",
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
    "u": "𐓶",
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
