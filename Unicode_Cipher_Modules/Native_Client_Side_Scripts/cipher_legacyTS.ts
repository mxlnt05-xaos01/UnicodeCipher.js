let input = "", keywords = "";
document.getElementById("")?.addEventListener("click", MainProtocolLTS);

function MainProtocolLTS() {
    try {
        const packetA = document.querySelector("#") as HTMLInputElement;
        if(packetA) {
            input = packetA.value;
        }
        else {
            throw new Error("Input String Unprocessable");
        }
        const packetB = document.querySelector("#") as HTMLInputElement;
        if(packetB) {
            keywords = packetB.value;
        }
        else {
            throw new Error("Input String Unprocessable");
        }
    }
    catch(error) {
        console.error("Input Data Retrieval Error: ", error);
    }
    const Text = CharsToDecimalTS(input, keywords);
    document.getElementById("")!.textContent = Text;
}

function CharsToDecimalTS(input: string, keyword: string) {
    const inputSplit = input.split("");
    const keywordSplit = keyword.split("");
    let Final = new Array(inputSplit.length);
    let proportionA: number[] = new Array(inputSplit.length);
    let proportionB: number[] = new Array(keywordSplit.length);
    for(let s = 0; s < keywordSplit.length; s++) {
        proportionB[s] = keywordSplit[s].charCodeAt(0);
    }
    for(let i = 0; i < inputSplit.length; i++) {
        proportionA[i] = inputSplit[i].charCodeAt(0);
    }
    for(let l = 0, k = 0; l < inputSplit.length; l++) {
        if(l < keywordSplit.length) {
            k++;
            Final[l] = CalculationTS(proportionA[l], proportionB[k]);
        }
        else {
            k = 0;
            Final[l] = CalculationTS(proportionA[l], proportionB[k]);
        }
    }
    const FinalizedVers: string = DecimalToCharsTS(Final);
    return FinalizedVers;
}

function DecimalToCharsTS(result: number[]) {
    const str = result.map(code => String.fromCharCode(code));
    const final = str.join("");
    return final;
}

function CalculationTS(a: number, b: number) {
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