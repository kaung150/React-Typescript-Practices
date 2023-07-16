// const person: {
//     name: string;
//     age: number
// } 

const person:{
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]
} = {
    name: "Kaung Min Khant",
    age: 30,
    hobbies: ['Sport', 'Cooking'],
    role: [2, 'author']
};

// person.role.push('admin');
// person.role[1] = 10;

person.role = [2, 'author'];

console.log(person.role)

let favoriteActivities:string[];
favoriteActivities = ["Sport"]

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
}