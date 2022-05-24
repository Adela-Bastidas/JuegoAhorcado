
function obtener_ramdom(num_min, num_max){
    const valores = num_max - num_min;
    const valor_al_azar = Math.floor(Math.random()*valores) + num_min;
    return valor_al_azar;
}