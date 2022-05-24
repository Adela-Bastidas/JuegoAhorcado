let palabra_adivinar;
let cant_errores = 0;
let cant_aciertos =0;

const palabras = ['ALURA', 'ONE' , 'CODIGO', 'HTML', 'JUEGOS', 'ALGORITMO' , 'JAVASCRIPT', 'ORACLE', 'HTML', 'FRONTEND'];

localStorage.setItem("lista", JSON.stringify(palabras));
//localStorage.clear();
//console.log(localStorage.getItem("lista"));

const btn = document.getElementById('btn-jugar');
btn.addEventListener('click' , iniciar);

const btnDesistir = document.getElementById('btn-desistir');
btnDesistir.addEventListener('click', desistir);

const imagen = document.getElementById('piso');
const label_letras = document.getElementById('mostrar-letra');

const letra_ingresada = document.getElementById('textArea');
//label_letras.appendChild(span2);

mensaje = document.getElementById('resultado');


function iniciar(event){
    
    imagen.src = 'Imagenes/img0.png';
    mensaje.style.visibility = 'hidden';
    btn.disabled = true;
    btnDesistir.disabled=false;
    cant_errores = 0;
    cant_aciertos = 0;
    label_letras.innerHTML = '';
    letra_ingresada.innerHTML = '';

    const cant_palabras = palabras.length;
    const aleatorio = obtener_ramdom(0, cant_palabras);
    
    palabra_adivinar = palabras[aleatorio];
    console.log(palabra_adivinar);
    const cant_letras = palabra_adivinar.length;

    for(let i=0; i<btn_letras.length;i++){
        btn_letras[i].disabled = false;
    }

    for(let i=0; i< cant_letras;i++){
        const span = document.createElement('span');
        letra_ingresada.appendChild(span);
    }

}


function desistir(event){
    
    alert('La palabra era: ' + palabra_adivinar);
    location.href = "jugar.html"; 
}

const btn_letras = document.querySelectorAll('#keyboard button');

for(let i = 0; i<btn_letras.length;i++){
    btn_letras[i].addEventListener('click', click_letras);
}


//Adivinar letra 
function click_letras(event){
    const letras_span = document.querySelectorAll('#textArea span');
    const button = event.target;
    button.disabled = true;
    const letra = button.innerHTML;
    const palabra = palabra_adivinar;
    let acerto = false;

    for(let i = 0; i<palabra.length;i++){
        if(letra == palabra[i]){
            letras_span[i].innerHTML = letra;
            cant_aciertos++;
            acerto = true;
        }
    }

    if(acerto == false){
        cant_errores++;
        const buscar = `Imagenes/img${cant_errores}.png`;
        imagen.src = buscar;  
        let span2 = document.createElement('span');
        span2.classList.add('letras');
        //span2.textContent = letra; 
        label_letras.textContent = label_letras.textContent +  letra + "  " ; 
        console.log(label_letras);
 
    }
    
    if(cant_errores==7){
        mensaje.style.visibility = 'visible';
        mensaje.style.color = "#D35400";
        mensaje.innerHTML = "Perdiste &#129318, la palabra era:  " + palabra_adivinar + "&#128533";
        game_over();
    }else if(cant_aciertos == palabra_adivinar.length){
        mensaje.style.visibility = 'visible';
        mensaje.style.color = "#1E8449";
        mensaje.innerHTML = "Genial &#128170, adivinaste la palabra. &#128512";
        game_over();
    }
     
    console.log(palabra_adivinar);
}


function game_over(){
    for(let i=0; i<btn_letras.length;i++){
        btn_letras[i].disabled = true;
        btnDesistir.disabled=true;
    }
    
    btn.disabled = false;
    
}

game_over()

