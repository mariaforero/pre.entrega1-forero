
let answer2 = prompt("estas interesado en solicitar una sesion fotografica?");
if (answer2 == "si") {
    let answer1 = prompt("hola cuantas fotos quieres tu album? 50/100");
    if (answer1 == 50) {
        alert("el total de tu sesion va a ser 120.000 ");
        let question3 = prompt(" quieres pagar en full o en cuotas?");
        if (question3 == "cuotas") {
            let question4 = prompt(' cuantas cuotas? 3/ 6');
            if (question4 == 3) {
                alert(" debes pagar 40 en los siguientes tres meses");
            }
            else if (question4 == 6) {
                alert(" debes pagar 20 en los proximos seis meses");
            }
        } else if (question3 == "full") {
            alert("contact me: mafe.avila@hotmail.es");
        }


    } else if (answer1 == 100) {
        alert("el total de tu sesion va a ser 300.000");
        let question5 = prompt("quieres pagar en full o en cuotas?");
        if (question5 == "cuotas") {
            let question6 = prompt("cunatas cuotas 3/ 6 ");
            if (question6 == 3) {
                alert("debes pagar 100.000 por los siguientes tres meses");
            }
            else {
                alert("debes pagar 50.000 en los proximos seis meses");
            }
        } else if (question5 == "full") {
            alert("contact me: mafe.avila@hotmail.es");
        }
    }

}
else if (answer2 == "no") {
    alert("thank you");
}
let year = prompt("year that you were born")
for (let age = 1850; age < 1870; age++) {
    console.log(age);
    if (age == year) {
        alert("discount 30%")
    }

}
