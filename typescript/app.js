// const person: {
//     name: string;
//     age: number
// } 
var person = {
    name: "Kaung Min Khant",
    age: 30,
    hobbies: ['Sport', 'Cooking']
};
var favoriteActivities;
favoriteActivities = ["Sport"];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
