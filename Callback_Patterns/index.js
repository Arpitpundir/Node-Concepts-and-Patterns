import { createFileReader } from "./Zalgo-Effect.js";
import { createConsistentFileReader } from "./Solving_Zalgo_Deffered_Execution.js";
function createZalgoEffect() {
    const reader1 = createFileReader('data.txt');
    reader1.onDataReady((data) => {
        console.log(`First call data: ${data}`)

        const reader2 = createFileReader('data.txt')
        reader2.onDataReady((data) => {
            console.log(`Second call data: ${data}`)
        })
    })
};

function solveZalgoWithDefferedExecution(){
    const reader1 = createConsistentFileReader('data.txt');
    reader1.onDataReady((data) => {
        console.log(`First call data: ${data}`)

        const reader2 = createConsistentFileReader('data.txt')
        reader2.onDataReady((data) => {
            console.log(`Second call data: ${data}`)
        })
    })
}

//createZalgoEffect();
solveZalgoWithDefferedExecution();