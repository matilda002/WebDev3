// Array of objects
const pets = [
    {type:"Cat", name:"Garfield"},
    {type:"Cat", name:"Tom"},
    {type:"Mouse", name:"Jerry"},
    {type:"Dog", name:"Snoopy"},
    {type:"Donkey", name:"Donkey"},
    {type:"Sloth", name:"Sid"},
];

const names = [
    {name:"Garfield"},
    {name:"Tom"},
    {name:"Jerry"},
    {name:"Snoopy"},
    {name:"Dragon"},
    {name:"Sid"},
];


function findPet(pets, names) {
    // Array that will hold the array of names with pet type
    const results = [];

    for (const name of names) {
        // default value is pet not found
        let type = "Pet not found";

        // seeing if name from name array matches the pets name
        // if it does, the type changes to the corresponding type
        for (const pet of pets) {
            if (pet.name === name.name) {
                type = pet.type;
                break;
            }
        }
        results.push({name: name.name, type: type});
    }
    return results;
}

console.log(findPet(pets, names));