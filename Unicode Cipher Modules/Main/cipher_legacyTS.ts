input = "", keywords = "";
document.getElementById("")?.addEventListener("click", MainProcotolLTS);

function MainProcotolLTS() {
    try {
        const packetA = document.querySelector("#") as HTMLInputElement;
        if(packetA) {
            input = packetA.value;
        }
        else {
            throw new Error("");
        }
        const packetB = document.querySelector("#") as HTMLInputElement;
        if(packetB) {
            keywords = packetB.value;
        }
        else {
            throw new Error("");
        }
    }
    catch(error) {
        console.error("Failed to Process Input: " + error);
    }
}