function promediar() {
    const nota1 = +document.querySelector('#nota1').value;
    const nota2 = +document.querySelector('#nota2').value;
    const nota3 = +document.querySelector('#nota3').value;
    const salida = document.querySelector('#salida');
    const promedio = (nota1*0.35) + (nota2 * 0.35) + (nota3 * 0.3);



    if(promedio >=9 && promedio <=10){
        salida.textContent = promedio.toFixed(2) + ' tsssssss, felicidades, excelente promedio';
    } 
    if(promedio >=7 && promedio <=8){ 
        salida.textContent = promedio.toFixed(2) + 'Bien pero no tanto';

    }
    if(promedio >=6 && promedio <=7){
        salida.textContent = promedio.toFixed(2) + ' Pongase las pilas, casi casi  ';
    }
    
    if(promedio >=5 && promedio <6){
        salida.textContent = promedio.toFixed(2) + ' Queda reprobado ';
    }

    }