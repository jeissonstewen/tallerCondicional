/* 1. Leer dos (2) números y los imprima en forma ascendente. */
// let num1 = parseInt(prompt('Ingrese primer numero')), num2 = parseInt(prompt('Ingrese segundo numero'))
// if (num1<num2){
//     console.log(num1 + "-" + num2)
// } else console.log(num2 + "-" + num1)


/* 2. (sentencia switch) Diseñar un algoritmo que lea por teclado un número comprendido
entre 1 y 10. Se desea visualizar si el número es par o impar. En primer lugar, se deberá
detectar si el número está comprendido en el rango válido (1 a 10) y a continuación si
el número es 1, 3, 5, 7, 9, escribir un mensaje de “impar”; si es 2, 4, 6, 8, 10, escribir un
mensaje de “par”. */
// let numero = parseInt(prompt('Ingrese un numero de 1 a 10')), num,caso
// if (numero >0 && numero < 11){
//     if(numero%2===0){
//         caso=1
//     }else caso =2
//     switch(caso){
//         case 1:
//             num = 'par'
//             break
//         case 2:
//             num = 'impar'
//             break
//     }
//     console.log(num)
// } else alert ('El numero debe estar entre 1 y  10')

/* 3. (sentencia switch) Diseñar un algoritmo que lea un número entero entre 1 y 10, y nos
muestre por pantalla el número ingresado en letra (1 = uno). Si el número leído no está
comprendido entre 1 y 10 mostrar un mensaje de error. */
// let num = parseInt(prompt('Ingrese un numero de 1 a 10'))
// if (num >0 && num < 11){
//     switch(num){
//         case 1:
//             num = 'uno'
//             break
//         case 2:
//             num = 'dos'
//             break
//         case 3:
//             num = 'tres'
//             break
//         case 4:
//             num = 'cuatro'
//             break
//         case 5:
//             num = 'cinco'
//             break
//         case 6:
//             num = 'seis'
//             break
//         case 7:
//             num = 'siete'
//             break
//         case 8:
//             num = 'ocho'
//             break
//         case 9:
//             num = 'nueve'
//             break
//         case 10:
//             num = 'diez'
//             break
//     }
//     console.log(num)
// }

/* 4. Determinar la cantidad total a pagar por una llamada telefónica, teniendo en cuenta lo
siguiente:
• toda llamada que dure tres minutos o menos tiene un coste de 200 pesos.
• cada minuto adicional a partir de los tres primeros es un paso de contador y cuesta
100 pesos. */
/* let duracion = parseInt(prompt('Cuantos minutos duró la llamada')), valor, cont=1
if(duracion>3){
    cont = cont*duracion - 3;
    valor = 200 + 100*cont
} else valor = 200
console.log(valor) */

/* 5. En una Granja existen N conejos, C1 blancos y C2 negros. Se venden X conejos negros
y Y conejos blancos. Hacer un algoritmo que:
a) Imprima la cantidad de conejos vendida
b) Si P1 es el precio de venta de los conejos blancos y P2 es el precio de venta de los
conejos negros, imprima el monto total de la venta.
c) Imprima el color de los conejos que se vendieron más. */
/* let C1,C2, X, Y, N
C1 = parseInt(prompt("ingrese la cantidad de conejos blancos"))
C2 = parseInt(prompt("ingrese la cantidad de conejos negros"))
N = C1 + C2
X = parseInt(prompt("ingrese la cantidad de conejos blancos vendidos"))
Y = parseInt(prompt("ingrese la cantidad de conejos negros vendidos"))
CV = X + Y //conejos vendidos
console.log("Se vendieron " + CV + " conejos")
P1 = parseInt(prompt("Ingrese el valor de los conejos blancos"))
P2 = parseInt(prompt("Ingrese el valor de los conejos negros"))
TV = X*P1 + Y*P2
console.log("El valor de venta es "+TV) //total venta
if(X<Y){
    console.log("Se vendieron más conejos negros")
} else if(X<Y){
    console.log("Se vendieron más conejos blancos")
} */



/* 6. Diseñe un algoritmo que permita calcular la nota definitiva para los estudiantes,
determinadas sobre las siguientes condiciones:
a. NOTA PREVIOS será el promedio de los previos por el 60%. Cada estudiante tendrá
3 evaluaciones.
b. NOTA TRABAJOS será el promedio de los trabajos por el 40%. Cada estudiante
presentara 2 trabajos.
c. NOTA FINAL será la suma de la nota de los previos y nota de los trabajos.
d. Nota mínima 1,0 nota máxima: 5,0 */
/* let p1, p2, p3, t1, t2, pp, pt, NF
p1 = parseFloat(prompt("Ingrese la nota del previo 1 \nDebe ser entre 1 y 5"))
if(p1<1 || p1>5){
    alert("La nota debe estar entre 1.0 y 5.0")
    p1 = parseFloat(prompt("Ingrese la nota del previo 1 \nDebe ser entre 1 y 5"))
}
p2 = parseFloat(prompt("Ingrese la nota del previo 2\nDebe ser entre 1 y 5"))
if(p1<1 || p1>5){
    alert("La nota debe estar entre 1.0 y 5.0")
    p2 = parseFloat(prompt("Ingrese la nota del previo2 \nDebe ser entre 1 y 5"))
}
p3 = parseFloat(prompt("Ingrese la nota del previo 3\nDebe ser entre 1 y 5"))
if(p3<1 || p3>5){
    alert("La nota debe estar entre 1.0 y 5.0")
    p3 = parseFloat(prompt("Ingrese la nota del previo3 \nDebe ser entre 1 y 5"))
}
t1 = parseFloat(prompt("Ingrese la nota del trabajo 1\nDebe ser entre 1 y 5"))
if(t1<1 || t1>5){
    alert("La nota debe estar entre 1.0 y 5.0")
    t1 = parseFloat(prompt("Ingrese la nota del trabajo 1 \nDebe ser entre 1 y 5"))
}

t2 = parseFloat(prompt("Ingrese la nota del trabajo 2\nDebe ser entre 1 y 5"))
if(t2<1 || t2>5){
    alert("La nota debe estar entre 1.0 y 5.0")
    t2 = parseFloat(prompt("Ingrese la nota del trabajo 2 \nDebe ser entre 1 y 5"))
}

pp = ((p1+p2+p3)/3)*0.6
pt = ((t1+t2)/2)*0.4
NF = pp + pt
console.log("La nota final es "+NF) */

/* 7. Hacer un algoritmo que imprima el nombre de un artículo, clave, precio original, cantidad
y su precio con descuento. El descuento lo hace en base a la clave, si la clave es 1 el
descuento es del 10% y si la clave es 2 el descuento es del 20% (solo existen dos
claves). */

let nomArticulo, clave, precioOriginal, cantidad, descuento, precioDescuento
nomArticulo = prompt("Ingrese el nombre del articulo")
clave = parseInt(prompt("Ingrese la clave del producto"))
if(clave <1 || clave > 2) {
    alert("La clave de producto debe ser 1 ó 2")
    clave = parseInt(prompt("Ingrese la clave del producto"))
}
precioOriginal = parseFloat(prompt("Ingrese el precio ORIGINAL del producto"))
cantidad = parseInt(prompt("Ingrese la cantidad de productos"))
if (clave === 1){
    descuento = 10
} else if (clave === 2){
    descuento = 20
}
precioDescuento = precioOriginal-(precioOriginal*descuento)/100
console.log("EL ARTICULO ES: "+ nomArticulo + "\nLA CLAVE ES: "+ clave + "\nEL PRECIO ORIGINAL ES: "+
precioOriginal + "\nLA CANTIDAD ES: " + cantidad + "\nEL PRECIO CON DESCUENTO ES: " + precioDescuento)


/* 8. En un hospital existen tres áreas: Psiquiatría, Pediatría, Traumatología. El presupuesto
anual del hospital se reparte a estas tres (3) áreas; usted debe realizar un algoritmo que
permita ingresar el valor del presupuesto anual, ingresar el porcentaje correspondiente
a cada área, realizar el cálculo del presupuesto que corresponde a cada área, si la suma
de los porcentajes no corresponde al 100% debe mostrar un mensaje de error.
Mostrar el porcentaje asignado a cada área y el presupuesto obtenido. */


/* 9. Diseñar un algoritmo para determinar el precio del tiquete de ida y vuelta en avión,
conociendo la distancia a recorrer, sabiendo que si el número de días de estancia es
superior o igual a 7 y la distancia superior a 800 km el billete tiene una reducción del
30%. El precio por km es de $2,5 dólares. */