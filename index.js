const p1 = prompt("Nome do personagem 1:");
const attack = prompt(`Poder de ataque de ${p1}:`);

const p2 = prompt("Nome do personagem 2:");
let life = prompt(`Quantidade de vida de ${p2}:`);
const def = prompt(`Defesa de ${p2}:`);
const shield = prompt(`${p2} possui escudo? Sim(1) ou não(0)`);

let damage = 0;

if (attack > def && shield === "0") {
  damage = attack - def;
} else if (attack > def && shield === "1") {
  damage = (attack - def) / 2;
}

life -= damage;

alert(`${p1} causou ${damage} de dano em ${p2}`);
alert(`${p2} agora tem ${life}`);
