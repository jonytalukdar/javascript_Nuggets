const people = [
  { name: 'Bob', age: 21, position: 'devoloper' },
  { name: 'Susi', age: 24, position: 'designer' },
  { name: 'John', age: 26, position: 'Marketer' },
  { name: 'Anna', age: 29, position: 'intern' },
];

const fruits = ['lemon', 'apple', 'banana', 'mango'];

//filter

var newPeople = people.filter((peopleName) => {
  if (peopleName.name == 'Anna') {
    return true;
  }
});
console.log(newPeople);

const youngPeople = people.filter((young) => {
  //   if (young.age < 25) {
  //     return young;
  //   }
  return young.age < 25;
});
console.log(youngPeople);

// const devolopers = people.filter((devoloper) => {
//   if (devoloper.position == 'devoloper') {
//     return devoloper;
//   }
// });
const devolopers = people.filter(
  (devoloper) => devoloper.position === 'devoloper'
);
console.log(devolopers);

// no match

const seniorDevs = people.filter((senior) => senior.position === 'senior devs');
console.log(seniorDevs);

// find

const bob = people.find((person) => person.name == 'Bob');
console.log(bob);
const fruit = fruits.find((fruit) => fruit == 'lemon');
console.log(fruit);
// no match

const noMatch = fruits.find((noMatch) => noMatch == 'pear');
console.log(noMatch);

// multiple matches

const randomPerson = people.find((random) => random.age < 30);
console.log(randomPerson);

console.log(bob.position);

const anna = people.filter((anna) => anna.name == 'Anna');
console.log(anna[0].position);

const details = [
  {
    id: 1,
    name: 'joney',
    age: 21,
    email: '@gmailjoney.com',
  },
  {
    id: 2,
    name: 'jerry',
    age: 20,
    email: '@gmailjerry.com',
  },
  {
    id: 3,
    name: 'jubayer',
    email: '@gmailjubayer.com',
  },
];

const joneyEmail = details.filter((email) => email.name == 'joney');
const findEmail = joneyEmail[0].email;
console.log(findEmail);
