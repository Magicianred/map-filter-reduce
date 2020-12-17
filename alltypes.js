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

//const dogs = pets.filter((pet){
//   return pet.type === 'dog'
//})

//console.log(dogs)

const totalWeightDogs = pets
  .filter((pet) => {
    return pet.type === "dog";
  })
  .reduce((total, pet) => {
    return total + pet.weight;
  }, 0);

console.log(totalWeightDogs);

/**
 * Promisses com map
 */
//const items = [ 'a', 'b', 'c', 'd']

//;(async function () {
//    const promiseFunction = async (element) => {
//        return new Promise((resolve, reject) => {
//            return resolve(`${element} - promise`)
//        })
//    }

// const itemMapped = promiseFunction('x')
// console.log(await itemMapped)

//   const itemsMappedPromises = items.map(promiseFunction)

//   const itemsMapped = await Promise.all(itemsMappedPromises)

//   console.log(itemsMapped)

//})
