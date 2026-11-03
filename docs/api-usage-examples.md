# API usage examples

## Overview

The Text Obfuscator is a client-side web application with no public API. This document provides usage examples for the internal JavaScript functions for developers who wish to embed or extend the obfuscation logic.

## Core functions

### obfuscateText()

**Signature**: `function obfuscateText()`

**Description**: Reads from `#input`, applies obfuscation algorithm, writes to `#output`. Uses global replacement maps and checkbox states.

**Example — Direct call**:
```javascript
// Set input value programmatically
$("#input").val("Hello World");

// Trigger obfuscation
obfuscateText();

// Read result
var result = $("#output").val();
console.log(result); // e.g., "Hеllo Wоrld" (with homoglyphs)
```

**Example — With checkbox control**:
```javascript
// Enable approximate characters
$("#approximateCharactersCheckbox").prop("checked", true);

// Disable zero-width spaces
$("#zeroWidthSpacesCheckbox").prop("checked", false);

$("#input").val("Test");
obfuscateText();
console.log($("#output").val());
```

### copyText()

**Signature**: `function copyText()`

**Description**: Copies `#output` value to clipboard. Uses modern Clipboard API with `execCommand` fallback.

**Example**:
```javascript
obfuscateText();  // Generate output first
copyText();       // Copy to clipboard
// Pasted content matches #output value
```

### fallbackCopy(element)

**Signature**: `function fallbackCopy(element)`

**Description**: Legacy clipboard copy using `document.execCommand('copy')`. Called automatically by `copyText()` when modern API unavailable.

**Example — Direct use**:
```javascript
// Copy any element's value (must be input/textarea)
var tempInput = $("<input>").val("Custom text").appendTo("body");
fallbackCopy(tempInput[0]);
tempInput.remove();
```

## Replacement maps (read-only)

### identicalReplacements
```javascript
// Access map
console.log(identicalReplacements["A"]); // "АΑᎪᗅ"

// Iterate all
Object.keys(identicalReplacements).forEach(function (char) {
    console.log(char, "->", identicalReplacements[char]);
});
```

### approximateReplacements
```javascript
console.log(approximateReplacements["A"]); // "ДΔΛ"
```

### identicalGroupReplacements
```javascript
console.log(identicalGroupReplacements["ae"]); // "æ"
```

### approximateGroupReplacements
```javascript
console.log(approximateGroupReplacements["th"]); // "þ"
```

## Embedding in another page

### Minimal integration
```html
<!-- 1. Include dependencies -->
<script src="https://code.jquery.com/jquery-3.7.0.min.js"></script>

<!-- 2. Include replacement maps and functions -->
<script src="js/text-obfuscator.js"></script>

<!-- 3. Add required DOM elements -->
<input type="text" id="input" placeholder="Enter text">
<input type="text" id="output" readonly>
<input type="checkbox" id="approximateCharactersCheckbox" checked>
<label for="approximateCharactersCheckbox">Approximate characters</label>
<input type="checkbox" id="zeroWidthSpacesCheckbox" checked>
<label for="zeroWidthSpacesCheckbox">Add zero-width spaces</label>
<button onclick="obfuscateText()">Obfuscate</button>
<button onclick="copyText()">Copy</button>
```

### Programmatic use without DOM
```javascript
// Extract core logic for use without jQuery/DOM
// (Requires copying replacement maps and algorithm)

// Simplified standalone version:
function obfuscateStandalone(input, options) {
    options = options || {};
    var useApproximate = options.approximate !== false;
    var useZeroWidth = options.zeroWidth !== false;

    // ... copy algorithm from text-obfuscator.js ...
    // Replace $("#input").val() with input parameter
    // Replace $("#output").val() with return value
    // Replace checkbox checks with options

    return output;
}

// Usage
var result = obfuscateStandalone("Hello", { approximate: true, zeroWidth: false });
console.log(result);
```

## Customising replacement maps

### Adding custom replacements
```javascript
// After text-obfuscator.js loads
identicalReplacements["@"] = "ⓐ@";
approximateReplacements["@"] = "α";

// Add group replacement
identicalGroupReplacements["@@"] = "ⓐⓐ";
```

### Replacing entire maps
```javascript
// Custom maps for specific use case
window.identicalReplacements = {
    "a": "а",
    "e": "е",
    "o": "о"
};
window.approximateReplacements = {};
window.identicalGroupReplacements = {};
window.approximateGroupReplacements = {};
```

## Event hooks (not built-in)

The application has no event system. To add hooks:

```javascript
// Wrap original functions
var originalObfuscate = obfuscateText;
obfuscateText = function () {
    console.log("Before obfuscation", $("#input").val());
    originalObfuscate();
    console.log("After obfuscation", $("#output").val());
    // Trigger custom event
    $(document).trigger("obfuscationComplete", [$("#output").val()]);
};

// Listen
$(document).on("obfuscationComplete", function (e, output) {
    console.log("Obfuscated:", output);
});
```

## Browser console snippets

### Quick obfuscate from console
```javascript
// Paste in DevTools console on the page
$("#input").val("Your text here");
obfuscateText();
copyText();
```

### Inspect replacement maps
```javascript
// In console
console.table(identicalReplacements);
console.table(approximateReplacements);
```

### Test specific character
```javascript
function testChar(char) {
    $("#input").val(char);
    obfuscateText();
    return $("#output").val();
}

testChar("A"); // Returns homoglyph
testChar("Z"); // Returns "Z" (no replacement)
```

## References

- [API reference](../api-reference/text-obfuscator.md)
- [Application services](../components/application-services.md)
- [Obfuscation flow](../flows/obfuscation.md)
- [Change guide](../change-guide.md)