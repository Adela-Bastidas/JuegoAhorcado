
let palabras = JSON.parse(localStorage.getItem("lista"));
//console.log(typeof(palabras));

const botonGuardar = document.getElementById('btn-guardar');
const palabraIngresada = document.getElementById('mns-palabra');

    botonGuardar.addEventListener('click', () => {
        var textovalido = validar(palabraIngresada.value);
        if(textovalido){

            if (palabraIngresada.value.length === 0) {
                alert('¡Campo vacío!','Debes ingresar una palabra');
            } else if (palabraIngresada.value.length > 8) {
                alert('La palabra debe tener maximo 8 letras');
            } else {
                palabras.push(palabraIngresada.value);
                alert('La palabra se agrego exitosamente');
        
                location.href = "jugar.html";
            }
        }
        return null;

    });




