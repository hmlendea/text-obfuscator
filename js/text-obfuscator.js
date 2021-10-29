var identicalReplacements = {
    "3": "З",

    "A": "А",
    "Ă": "Ă",
    "B": "В",
    "C": "С",
    "Ð": "ĐƉ",
    "Đ": "ÐƉ",
    "Ɖ": "ÐĐ",
    "E": "ЕΕ",
    "Ë": "Ё",
    "Ĕ": "Ӗ",
    "H": "Н",
    "I": "ІΙӀӏ",
    "J": "Ј",
    "K": "К",
    "Ḱ": "Ќ",
    "M": "М",
    "O": "ОΟ",
    "Ӧ": "Ö",
    "P": "Р",
    "X": "Х",
    "T": "Т",
    "Y": "Ү",

    "a": "а",
    "ă": "ӑ",
    "c": "с",
    "e": "е",
    "ë": "ё",
    "ĕ": "ӗ",
    "i": "і",
    "j": "ј",
    "o": "о",
    "ӧ": "ö",
    "ó": "ό",
    "p": "р",
    "ú": "ύ",
    "x": "х",
    "y": "у",
    "ÿ": "ӱ"
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
        if (Math.floor(Math.random() * 10) + 1 <= 4) {
            if (identicalReplacements[character]) {
                var candidates = identicalReplacements[character];
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
