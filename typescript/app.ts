// const person: {
//     name: string;
//     age: number
// } 

const person = {
    name: "Kaung Min Khant",
    age: 30,
    hobbies: ['Sport', 'Cooking']
};

let favoriteActivities:string[];
favoriteActivities = ["Sport"]

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
}