// Compulsory Task 1

let items = [];
fetch("https://www.affirmations.dev/")
.then(res => res.json())
.then((result) => {
items = result;
console.log(items.affirmation);
}),
(error) => {
console.log(error);
}
