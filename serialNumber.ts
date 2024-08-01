function has_error(numSerie: string): number {
    if (!/^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/.test(numSerie)) {
        return 1;
        // .test pour verifier si la chaine de caractere correspend au if
    }
    

    let cases: string[] = numSerie.split('-');
// un - entre chaque case
    if (cases[0] !== cases[2].split('').reverse().join('')) {
        return 2;
        // splite separer les chiffre et le return sans -
        // reverse pour inverser
        // join pour recoler les caracteres
    }
    let calc = (Number(cases[2])*7 ).toString().padStart(4, '0')
    if (cases[1] !== calc.slice(calc.length-4,calc.length-0)) {
        return 3;
    }
        // parseInt utilise pour convertire une chaine de caractere en un entier.
        // .slice() sélectionner les caracter dans le array
        // -4 pour les 4 dernier chiffres
    if ((parseInt(cases[0]) + parseInt(cases[1]) + parseInt(cases[2]) + parseInt(cases[3])) % 10000 !== 0) {
        return 4
    }
    return 0;
}

console.log(has_error("2806-2574-6082-8538"));
console.log(has_error("6730-2632-0376-0262")); 
console.log(has_error("2223-2554-3222-2001"));
console.log(has_error("2415-5994-5142-6449"));
console.log(has_error("4212-4868-2124-8796"));
console.log(has_error("0441-0080-1440-8039"));
console.log(has_error("3210-0861-0123-5806"));

// 1 :
console.log(has_error("2806-2574-6082-858"));
console.log(has_error("XXXX-XXXX-XXXX-XXXX"));

// 2 :
console.log(has_error("4221-4868-2124-8796"));
console.log(has_error("1122-1111-1212-1111"));

// 3 :
console.log(has_error("1122-1111-2211-1111"));
console.log(has_error("3879-1111-9783-1111"));

// 4 :
console.log(has_error("1122-5477-2211-1111"));
console.log(has_error("3879-8481-9783-1111"));
