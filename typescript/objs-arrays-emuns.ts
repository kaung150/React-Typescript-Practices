// const person: {
//     name: string;
//     age: number
// } 

// const person:{
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string]
// } = {
//     name: "Kaung Min Khant",
//     age: 30,
//     hobbies: ['Sport', 'Cooking'],
//     role: [2, 'author']
// };

// person.role.push('admin');
// person.role[1] = 10;


// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {ADMIN, READ_ONLY, AUTHOR}

const person= {
    name: "Kaung Min Khant",
    age: 30,
    hobbies: ['Sport', 'Cooking'],
    role: Role.ADMIN
};

// person.role = [2, 'author'];




console.log(person.role)

let favoriteActivities:string[];
favoriteActivities = ["Sport"]

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
}

if(person.role === Role.ADMIN){
    console.log("Hi there ")
}