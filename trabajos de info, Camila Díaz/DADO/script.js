function aleatorio (){
    let numMax = +document.getElementById('numMax').value;
    let numMin = +document.getElementById('numMin').value;

    let operacion = (Math.round (Math.random() * (numMax - numMin) +numMin)); 
    let resultado = document.getElementById('resultado');
    resultado.textContent = operacion; 
}
    