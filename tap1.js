function goster() { //Tap1
    let metn = document.getElementById("metn").value;
    document.getElementById("netice").innerHTML=metn;
}
function num1() { //Tap2
    let a=Number(document.getElementById("num1").value);
    let b=Number(document.getElementById("num2").value);
    let cavab=a+b;
    document.getElementById("netice").innerHTML=cavab;
}
function num2() {
    let a=Number(document.getElementById("num1").value);
    let b=Number(document.getElementById("num2").value);
    let cavab=a-b;
    document.getElementById("netice").innerHTML=cavab;
}
let say=0;
function artir() { // Tap3
    say++;
    document.getElementById("say").innerHTML=say;
}
function azalt() {
    say--;
    document.getElementById("say").innerHTML=say;
}
let n=8; //Tap4
let f=1;
for(let i=1; i<=8; i++) {
    f=f*i;
}
console.log("8!=", f);

