//ctrl + K + C para comentar lineas
//ctrl + K + U para descomentar lineas

//Solicito nombre del cliente
let nombreYapellido = prompt("Bienvenido a MDZ Car Rent \nIngrese su nombre y apellido")

let opcion = prompt("Elige una opcion de auto para rentar: \n1-Auto Gama Baja \n2-Auto Gama Media \n3-Auto Gama Alta \nPresiona X para salir")

while(opcion != "X" && opcion != "x"){
    switch(opcion){
        case "1": let dias = parseInt(prompt("Cuantos dias desea rentar el auto? \nValor por dia: $20.000")) 
            alert("Alquilar un auto de Gama Baja por " + dias + " días va a costar: $" + costo(dias, opcion));
            break
        case "2": let dias2 = prompt("Cuantos dias desea rentar el auto? \nValor por dia: $30.000")
            alert("Alquilar un auto de Gama Media por " + dias2+" dias va a costar: $" + costo(dias2,opcion));
            break
        case "3": let dias3 = prompt("Cuantos dias desea rentar el auto? \nValor por dia: $40.000")
            alert("Alquilar un auto de Gama Alta por " + dias3 + " dias va a costar: $" + costo(dias3,opcion));
            break
    }
    opcion = prompt(
        "Elige una opcion de auto para rentar: \n1-Auto Gama Baja \n2-Auto Gama Media \n3-Auto Gama Alta \nPresiona X para salir"
    );
}

alert("Muchas gracias "+nombreYapellido+" por visitar nuestra pagina")

function costo(dia,modelo){
    if(modelo==1){
        return dia*20000; 
    }else{
        if(modelo==2){
            return dia*30000;
        }else{
            return dia*40000;
        }
    }
}