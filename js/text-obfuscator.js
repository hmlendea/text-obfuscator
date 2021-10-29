var identicalReplacements = {
    "A": "А",
    "Đ": "Ɖ",
    "E": "ЕΕ",
    "I": "ІΙ",
    "J": "Ј",
    "K": "К",
    "Ḱ": "Ќ",
    "O": "ОΟ",
    "T": "Т",

    "a": "а",
    "e": "е",
    "i": "і",
    "j": "ј",
    "o": "о",
    "ó": "ό",
    "ú": "ύ"
}

var characters = lowercase + uppercase + digits + punctuation;
var charactersCount = characters.length;

function obfuscateText() {
    var input = $("#input").val();
    var output = '';

    for (var i = 0; i < input.length; i++) {
        var character = input[i];

        if (!identicalReplacements[character]) {
            output += input[i];
        } else {
            var candidates = identicalReplacements[character];
            var randomCandidateIndex = Math.floor(Math.random() * candidates.length);

            output += candidates[randomCandidateIndex];
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
