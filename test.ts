function has_erro(numSerie: string): number {
    let cases: string[] = numSerie.split('-');
    let calc = (Number(cases[2])*7 ).toString().padStart(4, '0')
    console.log(calc.slice(calc.length-4,calc.length-0))
    
    // console.log(parseInt(cases[2].slice(1,4))*7);
    
    // if (cases[1] !== ((Number(cases[2])*7 ).toString().slice(1,cases.length))) {
    //     return 3;
    // }
    return 0
    
}
console.log(has_erro("3210-0861-0123-5806")); 
console.log(has_erro("6730-2632-0376-0262"));
console.log(has_erro("2806-2574-6082-8538"));
console.log(has_erro("2223-2554-3222-2001"));
console.log(has_erro("2415-5994-5142-6449"));
console.log(has_erro("4212-4868-2124-8796"));
console.log(has_erro("0441-0080-1440-8039"));
