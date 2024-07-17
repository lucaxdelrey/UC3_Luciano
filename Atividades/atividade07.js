function jurosSimples(capitalInicial, taxaJuros, tempo) {
    const juros = capitalInicial + taxaJuros * tempo;
    const montante = capitalInicial + juros;
    return montante;
}
function jurosCompostos(capitalInicial, taxaJuros, tempo) {
    const montante = capitalInicial * Math.pow((1 + taxaJuros ), tempo);
    return montante;  
}
const capital = 1000;
const taxa = 0.05;
const tempo = 2;

const montanteJurosSimples = jurosSimples(capital, taxa, tempo);
const montanteJurosCompostos = jurosCompostos(capital, taxa, tempo);

console.log("Montante com juros simples:", montanteJurosSimples);
console.log("Montante com juros compostos:", montanheJurosCompostos.tofFixed(2));zz