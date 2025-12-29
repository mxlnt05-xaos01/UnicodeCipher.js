let inputWords = "", Keywords = "";
document.getElementById("").addEventListener("click", MainProtocolM());

function MainProtocolM() {
    inputWords = document.getElementById("").value;
    Keywords = document.getElementById("").value;
    // Make sure that you put the Id's of the input fields inside the ("") to get the value of the inputs.
    const context = new CipherMJS(inputWords, Keywords);
    const FinalResult = context.HTMLCharSelection();
    document.getElementById("").textContent = FinalResult;
    // After it is done, you can do what you may want with this information.
    // e.g. Send it to server
}

class CipherMJS {
    constructor(input, keyword) {
        const inputSplit = input.split("");
        const keywordSplit = keyword.split("");
        let Final = new Array(inputSplit.length);
        for(let s = 0; s < keywordSplit.length; s++) {
            keywordSplit[s] = keywordSplit[s].codePointAt(0);
        }
        for(let i = 0; i < inputSplit.length; i++) {
            inputSplit[i] = inputSplit[i].codePointAt(0);
        }
        for(let l = 0, k = 0; l < inputSplit.length; l++) {
            if(k < keywordSplit.length) {
                Final[l] = Calculation(inputSplit[l], keywordSplit[k]);
                k++;
            }
            else {
                k = 0;
                Final[l] = Calculation(inputSplit[l], keywordSplit[k]);
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