// Chama o callback para cada elemento e devolve um novo array com a mesma quantidade de itens.

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
/**
 * Map
 * Retornar um novo Array com a mesma quantidade de elementos
 * que o array inicial
 */

//const petNames = pets.map( (pet) => {
//return pet.age
// return pet.name
// })

//console.log(petNames)

//console.log(pets)

/**Foreach
 * Não retorna um novo array com a mesma quantidade de elementos
 */

const forEachPetNames = [];

pets.forEach((pet) => {
  forEachPetNames.push(pet.name);
});

console.log(forEachPetNames);
