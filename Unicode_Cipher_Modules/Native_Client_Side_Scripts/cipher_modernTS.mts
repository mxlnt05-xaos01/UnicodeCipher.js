let inputWords = "", Keywords = "";

document.getElementById("")?.addEventListener("click", MainProtocolMTS);

function MainProtocolMTS(this: {FinalArray: any[]}) {
    try {
        const A = document.querySelector('#') as HTMLInputElement;
        if(A) {
            inputWords = A.value;
        }
        else {
            throw new Error("Input String Unprocessable");
        }
        const B = document.querySelector('#') as HTMLInputElement;
        if(B) {
            Keywords = B.value;
        }
        else {
            throw new Error("Input String Unprocessable");
        }
    }
    catch(error) {
        console.error("Input Data Retrieval Error: ", error);
    }
    const context = new CipherMTS(inputWords, Keywords);
    const FinalResult = context.HTMLCharSelectionTS();
    document.getElementById("")!.textContent = FinalResult;
}

class CipherMTS {
    finalization: any[] = [];
    constructor(input: string, keyword: string) {
        const inputSplit = input.split("");
        const keywordSplit = keyword.split("");
        let Final = new Array(inputSplit.length);
        let propA = new Array(inputSplit.length);
        let propB = new Array(keywordSplit.length);
        for(let s = 0; s < keywordSplit.length; s++) {
            propB[s] = keywordSplit[s].codePointAt(0);
        }
        for(let i = 0; i < inputSplit.length; i++) {
            propA[i] = inputSplit[i].codePointAt(0);
        }
        for(let l = 0, k = 0; l < inputSplit.length; l++) {
            if(k < keywordSplit.length) {
                k++;
                Final[l] = CalculationTS(propA[l], propB[k]);
            }
            else {
                k = 0;
                Final[l] = CalculationTS(propA[l], propB[k]);
            }
        }
        this.finalization = Final;
    }
    HTMLCharSelectionTS() {
        const str = String.fromCodePoint(...this.finalization);
        return str;
    }
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