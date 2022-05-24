
var letras_mayusculas=['A','B','C','D','E','F','G','H', 'I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

function validar(texto){

    var arrTexto = texto.split('');
    var con = 0;
    for(let i=0; i<arrTexto.length; i++){
        for(let e=0; e<letras_mayusculas.length;e++){
            if(arrTexto[i] == letras_mayusculas[e]){
                con++;
                break;
            }

        }

        if(con == 0){
            alert("El texto ingresado debe contiener letras Mayúsculas y sin acentos.");
            location.reload();
            return false;   
        }

        con = 0;

    }

    return true;

}