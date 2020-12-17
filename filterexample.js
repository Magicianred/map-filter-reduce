//Reduz a sintaxe e se torna fácil de visualizar/ entender o que está acontecendo no array.

const pets = [
  {
    name: "scraps",
    type: "dog",
    age: 10,
  },

  {
    name: "sparks",
    type: "cat",
    age: 2,
  },

  {
    name: "miag",
    type: "fish",
    age: 1,
  },
];

//filtrando pets com menos de cinco anos
const newPets = pets.filter((pet) => {
  return pet.age < 5;
});
console.log(newPets);

//console.log(pets)
