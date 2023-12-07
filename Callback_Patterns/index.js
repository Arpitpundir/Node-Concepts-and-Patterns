import { createFileReader } from "./Zalgo-Effect.js";

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

createZalgoEffect();