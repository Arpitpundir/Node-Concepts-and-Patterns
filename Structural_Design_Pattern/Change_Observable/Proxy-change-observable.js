/*
 making an object as observable by using Proxy
*/

const createObservable = (target, observer) => {
    return new Proxy(target, {
        set: (obj, prop, value) => {
            if(value !== obj[prop]){
                const prev = obj[prop];
                obj[prop] = value;
                observer({prop, prev, curr: value});
            }
            return true;
        }
    })
}

function calculateTotal(invoice){
    return invoice.subtotal - invoice.discount + invoice.tax;
}

const invoice = {
    subtotal: 100,
    discount: 10,
    tax: 20
};

let total = calculateTotal(invoice);
console.log(`Starting total: ${total}`);

const obsInvoice = createObservable(invoice, ({prop, prev, curr}) => {
    total = calculateTotal(invoice);
    console.log(`Total: ${total} (${prop} changed: ${prev}) -> ${curr}`);
});

obsInvoice.subtotal = 200;
obsInvoice.discount = 20;
obsInvoice.discount = 20;
obsInvoice.tax = 30;

console.log(`Final total: ${total}`);
