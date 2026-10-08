// RANDOM PASSOWRD GENERATOR

function GeneratePassword(length, includeUppercase, includeLowercase, includeNums, includeSymbols) {

    const Numchars = "1234567890";
    const Symbols = "!@#$%^&*()";
    const Lowers = "abcdefghijklmnopqrtuvwxyz";
    const Uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let allowerdchars = "";
    let password = "";

    allowerdchars += includeLowercase ? Lowers : "";
    allowerdchars += includeUppercase ? Uppers : "";
    allowerdchars += includeNums ? Numchars : "";
    allowerdchars += includeSymbols ? Symbols : "";

    if (allowerdchars.length === 0) {
        return '(Atleast 1 set of chars should be selected)';
    }

    for (let i = 0; i < length; i++) {

        const randomindex = Math.floor(Math.random() * allowerdchars.length);
        password += allowerdchars[randomindex];
    }
    return password;
}

const passwordLength = 10;
const includeUppercase = true;
const includeLowercase = true;
const includeNums = true;
const includeSymbols = true;

const password = GeneratePassword(
    passwordLength,
    includeUppercase,
    includeLowercase,
    includeNums,
    includeSymbols);

console.log(`Password: ${password}`)