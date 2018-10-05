const notas = [1,2,3,4,5,6,7,8];

externo: for (a in notas) {
    for (b in notas) {
        if (a == 2 && b == 3) break externo;
        console.log(`par = ${a} , ${b}`);
    }
}
