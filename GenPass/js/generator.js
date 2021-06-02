const slider = document.getElementById("passRange");
const output = document.getElementById("passLen");
slider.oninput = function (e) {
    output.innerHTML = (e.target.value);
}; // Update the current slider value (each time you drag the slider handle)
output.innerHTML = slider.value; // Display the default slider value

function genPass() {
    var password = '';
    var length = parseFloat(slider.value);
    var lowerLen = 0;
    var upperLen = 0;
    var digitLen = 0;
    var punctLen = 0;
    var lowerBox = document.getElementById("lowerCheck");
    var upperBox = document.getElementById("upperCheck");
    var digitBox = document.getElementById("digitCheck");
    var punctBox = document.getElementById("punctCheck");
    var lowercase = 'abcdefghijklmnopqrstuvwxyz';
    var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var digits = '0123456789';
    var punct = '!#$%&()*+,-.:;<=>?@[]^_`{|}~';
    var tempLower = '';
    var tempUpper = '';
    var tempDigits = '';
    var tempPunct = '';
    var checkCount = 0;
    var i = 0;
    var x = 0;

    if (lowerBox.checked) {
        checkCount += 1;
    };
    if (upperBox.checked) {
        checkCount += 1;
    };
    if (digitBox.checked) {
        checkCount += 1;
    };
    if (punctBox.checked) {
        checkCount += 1;
    };
    if (lowerBox.checked) {
        lowerLen = Math.ceil(length / checkCount);
        for (i = 0; i < length; i++) {
            x = Math.floor(Math.random() * (lowercase.length));
            tempLower += lowercase.charAt(x);
        }
        if (checkCount > 1) {
            tempLower = tempLower.slice(0, lowerLen);
        }
        password += tempLower;
    }
    if (upperBox.checked) {
        upperLen = Math.ceil(length / checkCount);
        for (i = 0; i < length; i++) {
            x = Math.floor(Math.random() * (uppercase.length));
            tempUpper += uppercase.charAt(x);
        }
        if (checkCount > 1) {
            tempUpper = tempUpper.slice(0, upperLen);
        }
        password += tempUpper;
    }
    if (digitBox.checked) {
        digitLen = Math.ceil(length / checkCount);
        for (i = 0; i < length; i++) {
            x = Math.floor(Math.random() * (digits.length));
            tempDigits += digits.charAt(x);
        }
        if (checkCount > 1) {
            tempDigits = tempDigits.slice(0, digitLen);
        }
        password += tempDigits;
    }
    if (punctBox.checked) {
        punctLen = Math.ceil(length / checkCount);
        for (i = 0; i < length; i++) {
            x = Math.floor(Math.random() * (punct.length));
            tempPunct += punct.charAt(x);
        }
        if (checkCount > 1) {
            tempPunct = tempPunct.slice(0, punctLen);
        }
        password += tempPunct;
    }
    if (checkCount == 0) {
        password = ' ';
    }
    password = password.split("");
    for (var z = password.length - 1; z > 0; z--) {
        var q = Math.floor(Math.random() * z);
        var m = password[z];
        password[z] = password[q];
        password[q] = m;
    }
    password = password.join("");
    password = password.slice(0, length);
    var passwordDisplay = document.getElementById('password');
    passwordDisplay.value = password;
}
function copy() {
    /* Get the text field */
    var copyText = document.getElementById('password');
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
    /* Copy the text inside the text field */
    document.execCommand("copy");
    alert("copied to clipboard");
}
function clearGen() {
    var passwordDisplay = document.getElementById('password');
    passwordDisplay.value = ' ';
    var copyText = document.getElementById('password');
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
    document.execCommand("copy");
    setTimeout(function () { alert("the clipboard has been cleared"); }, 1);
}