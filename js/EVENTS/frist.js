

function handlinput (){
    let a = document.getElementById("clr").value
    document.body.style.backgroundColor = a;
}

function handlcalc(){
    let X =  document.getElementById("calc").value
    let y = eval(X);
    document.getElementById("calc").value = y
    document.getElementById("res").innerHTML = y;
    console.log(eval(X));

    
}

function ColorCh(){
    let X = document.getElementById("ClrC").value
    console.log(X)
    document.getElementById("clrchange").style.backgroundColor = X;
}