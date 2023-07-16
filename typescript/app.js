// const person: {
//     name: string;
//     age: number
// } 
var person = {
    name: "Kaung Min Khant",
    age: 30,
    hobbies: ['Sport', 'Cooking'],
    role: [2, 'author']
};
person.role.push('admin');
console.log(person.role);
var favoriteActivities;
favoriteActivities = ["Sport"];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
