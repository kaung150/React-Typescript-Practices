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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: "Kaung Min Khant",
    age: 30,
    hobbies: ['Sport', 'Cooking'],
    role: Role.ADMIN
};
// person.role = [2, 'author'];
console.log(person.role);
var favoriteActivities;
favoriteActivities = ["Sport"];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
if (person.role === Role.ADMIN) {
    console.log("Hi there ");
}
