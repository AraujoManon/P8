function pairNumbers(min, max) {
    min = Number(min);
    max = Number(max);
  const pairs = [];
  //  Pour chaque i qui est égal à min si min est pair,
  //  ou à min + 1 si min est impair, et tant que i est inférieur ou égal à max, 
  // augmente i de 2 à chaque tour et ajoute i au tableau pairs
  for (let i = min + (min % 2 === 0 ? 0 : 1); i <= max; i += 2) {
    pairs.push(i);
  }
  return pairs.join(",");
}
export default pairNumbers;
console.log(pairNumbers(1, 4));
