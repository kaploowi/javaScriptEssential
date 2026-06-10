let gro1;
let gro2;
let gro3;

function calculateTotal() {
    gro1 = parseFloat(document.getElementById("gro1").value);
    gro2 = parseFloat(document.getElementById("gro2").value);
    gro3 = parseFloat(document.getElementById("gro3").value);

    let total = gro1 + gro2 + gro3;

    document.getElementById('result').innerText = `The total amount is : $ ${total}`;
    console.log(total);
}