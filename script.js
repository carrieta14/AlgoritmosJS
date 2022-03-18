
function primerAlgoritmo(){

    let num;

    while (true) {
        
        num = parseInt(prompt("Ingrese un numero entero"))

        if (num>0) {
            
            for (let i = 2; i <= num; i++) {
                
                let cont = 2;
                let prime = true;

                while (prime && cont < i) {
                    
                    if (i % cont == 0) {
                        prime = false;
                    }else{
                        cont++;
                    }
                }

                if (prime) {
                    document.writeln(i);
                }
            }

            {break;}

        } else {
            document.write("Numero invalido, vuelva a digitar un numero")
        }

    }
}



function segundoAlgoritmo(){

    let num2 = parseInt(prompt("Digite un numero entero positivo"))
    let fib = [0,1];

    for (let i = 2; i < num2; i++) {
        
        fib[i] = fib[i-1]+fib[i-2]
       
    }

    for (let index = 0; index < fib.length; index++) {
        
        document.write(fib[index]+"<br>")
        
    }
    
    
    
}

function tercerAlgorutmo(){

        let numero = parseInt(prompt("Ingrese un numero: "))

        let sumatoria = [];
        let conta = 0;

        for (let i = 0; i < numero; i++) {
            
            sumatoria[i] = Math.pow((i+1), numero);

            document.write((i+1)+"^"+ numero +" = "+ sumatoria[i]+"<br>");

            conta = conta + sumatoria[i];


        }
            document.write("La sumatoria del numero "+numero+ " es: "+conta);

}