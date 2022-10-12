class Alumno {

    constructor(nombre, apellido, edad, sexo, calificacion, id) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = parseInt(edad);
        this.sexo = sexo;
        this.calificacion = parseInt(calificacion);
        this.id = id;
    }

    asignarId(array) {
        this.id = array.length;
    }

    valorar(calificacion) {
        this.calificacion = calificacion;        
    }


}

const alumnos = [
    new Alumno('Nicolas', 'Marangon', 38, 'Masculino', 10, 1),
    new Alumno('Martin', 'Flores', 30, 'Masculino', 8, 2),
    new Alumno('Melissa', 'Ponce', 28, 'Femenino', 6, 3),
    new Alumno('Marcelo', 'Gonzalez', 25, 'Masculino', 7, 4),
    new Alumno('Matias', 'Marquez', 33, 'Masculino', 4, 5),
    new Alumno('Yanina', 'Garcia', 22, 'Femenino', 9, 6),
    new Alumno('Dulcinea', 'Varga', 32, 'Femenino', 5, 7),
    new Alumno('Romina', 'Espindola', 26, 'Femenino', 8, 8),
    
]

console.log(alumnos);


//--------------------Pedir que se ingresen nuevos alumnos y sumarlos al array-----------------------//
let continuar = true;

while (continuar) {
    let ingreso = prompt('Ingresa los datos del alumno: Nombre, Apellido, Edad, Sexo (Masculino ó Femenino), puntaje de 1 a 10, separados por una barra diagonal (/). Ingresa X para finalizar');
    
    if (ingreso.toUpperCase() == 'X') {
        continuar = false;
        break;
    }

    let datos = ingreso.split('/');
    console.log(datos);
    const alumno = new Alumno(datos[0], datos[1], datos[2], datos[3], datos[4]);

    alumnos.push(alumno);

    alumno.asignarId(alumnos);

    console.log(alumnos)
} 
//------------------Fin de pedir que se ingresen alumnos nuevos y sumarlos al array---------------------//


//--------------------------Ordenar el array de acuerdo a lo que se elija-----------------------------//

let criterio = prompt('Elegí el criterio deseado:\n1 - Apellido (A a Z) \n2 - Apellido (Z a A)\n3 - Mejor a peor puntuado');

function ordenar(criterio, array) {
    let arrayOrdenado = array.slice(0);


    switch (criterio) {
        case '1':
            let apellidoAscendente = arrayOrdenado.sort((a,b)=>a.apellido.localeCompare(b.apellido));
            return apellidoAscendente;
        case '2':
            let apellidoDescendente = arrayOrdenado.sort((a, b) => b.apellido.localeCompare(a.apellido));
            return apellidoDescendente;
        case '3':
            return arrayOrdenado.sort((a, b) => b.calificacion - a.calificacion);
        default:
            alert('No es un criterio válido');
            break;
    }
}

//----------------------Fin de ordenar el array de acuerdo a lo que se elija----------------------//

function crearStringResultado(array){
    let info = '';

    array.forEach(elemento=>{
        info += 'Nombre: ' + elemento.nombre + '\nApellido: ' + elemento.apellido + '\nEdad: ' + elemento.edad + '\nCalificación: ' + elemento.calificacion + ' puntos.\n\n'
    })

    return info;
}

//--------------------------Fin de crear el string con los resultados-----------------------------//

alert(crearStringResultado(ordenar(criterio,alumnos)));



//--------------------------Filtrar Alumno de acuerdo al apellido-----------------------------//
let ApellidoElegido = prompt('Escribí el apellido del alumno para mostrarte los resultados');

const filtrado = alumnos.filter((Alumno)=>Alumno.apellido.toLowerCase().includes(ApellidoElegido.toLowerCase()))

//--------------------------Mostrar alumnos filtrado de acuerdo al apellido-----------------------------//

if (filtrado.length==0){
    alert('Lo sentimos. No encontramos coincidencias en nuestro listado');
}else{
    const imprimible = filtrado.map((alumno)=>alumno.apellido);
    alert('Los alumnos de nuestro listado que coinciden parcial o totalmente con esta búsqueda, son:\n- ' + imprimible.join('\n- '));
}
//----------------------Fin de mostrar alumnos filtrado de acuerdo al apellido-------------------------//

