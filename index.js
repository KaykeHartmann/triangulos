const prompt = require('prompt-sync')()


const triangulos = [];

while(true){
    let a = +prompt ('Triangulo lado A: ')
    let b = +prompt ('Triangulo lado B: ')
    let c = +prompt ('Triangulo lado C: ')


    //validação
    if (a > 0 && b > 0 && c > 0 && a + b > c && a + c > b && b + c > a) {
        
        let tipo
        if(a == b && b == c){
             tipo = "equilatero"
        }else if (a == b || a == c || b == c){
             tipo = "isosceles"
        }else{
             tipo = "Escaleno"
        }
        triangulos.push({ a, b,  c, tipo });
                    console.log(`Lado A: ${a}  lado B: ${b}  lado C: ${c}  ${tipo}`)
    }else{
        console.log("valores invalidos")
    }
    break;
}