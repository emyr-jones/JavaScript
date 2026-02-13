const input = document.getElementById("input");

function reverseString(str) {
    return str.split("").reverse().join("");
}

function check() {
    const value = input.value;
    const reversed = reverseString(value);
    if (value === reversed) {
        alert("It's a palindrome!");
    } else {
        alert("It's not a palindrome.");
    }
}