// Executa uma função para cada elemento retornando um único valor.

const pets = [
  {
    name: "scraps",
    type: "dog",
    age: 10,
    weight: 2,
  },

  {
    name: "sparks",
    type: "cat",
    age: 2,
    weight: 1,
  },

  {
    name: "miag",
    type: "fish",
    age: 1,
    weight: 0.2,
  },

  {
    name: "chiquinha",
    type: "cat",
    age: 1,
    weight: 1,
  },

  {
    name: "zé trovão",
    type: "horse",
    age: 1,
    weight: 3,
  },
];

//const totalWeight = pets.reduce( (total, pet) => {
//console.log(`Total: ${total}`)
//console.log(`Pet: ${pet.name}`)
//return total + 1

//return total + pet.weight
//}, 0)

//const totalWeight = pets.reduce( (total, pet) => {
//   return total + pet.weight
//}, 0)

const totalWeight = pets.reduce((total, pet) => {
  if (pet.type !== "dog") return total;

  return total + pet.weight;
}, 0);

console.log(totalWeight);
