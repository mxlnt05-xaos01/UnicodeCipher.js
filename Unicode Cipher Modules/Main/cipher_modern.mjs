let inputWords = "", Keywords = "";
document.getElementById("").addEventListener("click", MainProtocolM());

function MainProtocolM() {
    inputWords = document.getElementById("").value;
    Keywords = document.getElementById("").value;
    // Make sure that you put the Id's of the input fields inside the ("") to get the value of the inputs.
    const context = new CipherLATIN(inputWords, Keywords);
    const FinalResult = context.HTMLCharSelection();
    document.getElementById("").textContent = FinalResult;
}

class CipherLATIN {
    constructor(input, keyword) {
        const inputSplit = input.split("");
        const keywordSplit = keyword.split("");
        let Final = new Array(inputSplit.length);
        for(let s = 0; s < keywordSplit.length; s++) {}
        for(let i = 0, key = 0; i < inputSplit.length; i++) {
            if(key < keywordSplit.length) {
                inputSplit[i] = inputSplit[i].codePointAt(0);
                keywordSplit[key] = keywordSplit[key].codePointAt(0);
                Final[i] = Calculation(inputSplit[i], keywordSplit[key]);
                key++;
            }
            else {
                key = 0;
                inputSplit[i] = inputSplit[i].codePointAt(0);
                keywordSplit[key] = keywordSplit[key].codePointAt(0);
                Final[i] = Calculation(inputSplit[i], keywordSplit[key]);
            }
        }
        this.Final = Final;
    }
    HTMLCharSelection() {
        const str = String.fromCodePoint(...this.Final);
        return str;
    }
}

function Calculation(a, b) {
    if(a - b < 0) {
        const frst = a + b;
        const fin = frst - 32;
        return fin;
    }
    else {
        const frst = a - b;
        const fin = frst + 32;
        return fin;
    }
}