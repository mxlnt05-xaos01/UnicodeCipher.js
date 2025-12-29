let input = "", keywords = "";
document.getElementById("").addEventListener("click", MainProtocolL());

function MainProtocolLJS() {
    // Get Text from HTML Elements
    input = document.getElementById("").value;
    keywords = document.getElementById("").value;
    const txtPacket = CharsToDecimal(input, keywords);
    const finalPacket = DecimalToChars(txtPacket);
    document.getElementById("").textContent = finalPacket;
    // Here after it is done, you can do what you want with this information.
    // e.g. Send it to server
}

function CharsToDecimal(input, keyword) {
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
    const inFlow = DecimalToChars(Final);
    document.getElementById("").textContent = inFlow;
}

function DecimalToChars(result) {
    const str = result.map(code => String.fromCharCode(code));
    const final = str.join("");
    return final;
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