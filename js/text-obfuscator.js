var identicalReplacements = {
    ",": "͵",
    ";": ";",
    "|": "ǀ",
    "ǀ": "|",
    
    "3": "З",
    "Ʒ": "Ӡ",
    "Ӡ": "Ʒ",

    "Ă": "Ӑ",
    "A": "АΑ",
    "B": "ВΒ",
    "C": "СϹ",
    "Đ": "ÐƉ",
    "Ð": "ĐƉ",
    "Ɖ": "ÐĐ",
    "Ĕ": "Ӗ",
    "Ë": "Ё",
    "E": "ЕΕ",
    "F": "Ϝ",
    "H": "НΗ",
    "I": "ІΙӀӏ",
    "Ï": "ЇΪ",
    "J": "Ј",
    "K": "КΚ",
    "Ḱ": "Ќ",
    "M": "МΜ",
    "N": "Ν",
    "O": "ОΟ",
    "Ӧ": "Ö",
    "Ө": "Ѳθ",
    "ϴ": "Ɵ",
    "P": "РΡ",
    "Q": "Ԛ",
    "S": "Ѕ",
    "T": "ТΤ",
    "W": "Ԝ",
    "X": "ХΧ",
    "Y": "ҮΥ",
    "Z": "Ζ",

    "a": "а",
    "ă": "ӑ",
    "c": "сϲ",
    "e": "е",
    "ë": "ё",
    "ĕ": "ӗ",
    "i": "і",
    "ï": "ї",
    "j": "ј",
    "к": "κ",
    "κ": "к",
    "ɫ": "ɬ",
    "ɬ": "ɫ",
    "o": "оο",
    "ӧ": "ö",
    "ó": "όό",
    "ò": "ὸ",
    "ө": "ɵ",
    "ɵ": "ө",
    "θ": "ӨѲ",
    "p": "р",
    "q": "ԛ",
    "s": "ѕ",
    "ú": "ύ",
    "w": "ԝ",
    "x": "х",
    "y": "у",
    "ÿ": "ӱ"
}

var approximateReplacements = {
    "'": "ʹ",
    
    "3": "ӠƷ",
    "Ʒ": "3З",
    "Ӡ": "3З",
    "6": "б",

    "J": "Ϳ",
    "M": "Ϻ",
    "Ө": "Ɵϴ",
    "Q": "Ǫ",
    "Ș": "ŞṢ",
    "Ş": "ȘṢ",
    "Ṣ": "ȘŞ",
    "Ț": "ŢṬ",
    "Ţ": "ȚṬ",
    "Ṭ": "ȚŢ",
    "X": "Ꭓ",
    "Ꭓ": "X",
    
    "b": "Ь",
    //"h": "һ", // Confirmed to look quite different in many fonts
    "ı": "ɪ",
    "ɪ": "ı",
    "j": "ϳ",
    "k": "кκ",
    "ɫ": "ł",
    "ɬ": "ł",
    "p": "ρ",
    "ș": "şṣ",
    "ş": "șṣ",
    "ṣ": "șş",
    "ț": "ţṭ",
    "ţ": "țṭ",
    "ṭ": "țţ",
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

        // 40% chance to obfuscate
        if (Math.floor(Math.random() * 10) + 1 <= 6) {
            var candidates = "";

            if (identicalReplacements[character]) {
                candidates = identicalReplacements[character];
            }

            if ($("#approximateCharactersCheckbox").is(':checked') && approximateReplacements[character]) {
                candidates += approximateReplacements[character];
            }

            if (candidates != null && candidates.length > 0) {
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
